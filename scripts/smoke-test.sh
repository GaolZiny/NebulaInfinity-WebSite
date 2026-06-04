#!/bin/bash
# 全量 Smoke Test 脚本
# 自动检测所有页面路由并验证 HTTP 状态
# 用法: ./scripts/smoke-test.sh [--start-server]

PROJECT_DIR="/root/.openclaw/projects/NebulaInfinity-WebSite"
PORT=3000
BASE_URL="http://localhost:$PORT"
FAILED=0
TESTED=0

# 如果指定 --start-server，先启动
if [ "$1" = "--start-server" ]; then
    bash "$PROJECT_DIR/scripts/devserver.sh" restart
    sleep 3
fi

# 检查 server 是否在跑
if ! curl -s -o /dev/null http://localhost:$PORT 2>/dev/null; then
    echo "❌ Dev server not running on port $PORT"
    echo "   Run: bash scripts/devserver.sh start"
    exit 1
fi

echo "🔍 Smoke Test — $(date)"
echo "================================"

# 自动从 app/ 目录发现所有页面路由
discover_pages() {
    cd "$PROJECT_DIR"
    
    # 找到所有 page.tsx 文件，转换为 URL 路径
    find app/ -name "page.tsx" | while read f; do
        # 去掉 app/ 前缀和 /page.tsx 后缀
        route=$(echo "$f" | sed 's|^app/||; s|/page\.tsx$||')
        
        # 跳过根页面（只是 redirect）
        [ "$route" = "page.tsx" ] && continue
        
        # 处理 [lang] 参数
        if echo "$route" | grep -q "\[lang\]"; then
            for lang in ja en; do
                resolved=$(echo "$route" | sed "s|\[lang\]|$lang|g")
                
                # 处理 [slug] / [serviceId] 等动态参数
                if echo "$resolved" | grep -q "\["; then
                    # 需要从代码中获取实际的 slug 值，暂时跳过动态子页面
                    continue
                fi
                
                echo "/$resolved/"
            done
        fi
    done
}

# 从静态 build 输出获取更完整的页面列表（如果 out/ 存在）
discover_from_build() {
    cd "$PROJECT_DIR"
    if [ -d "out" ]; then
        find out/ -name "index.html" | while read f; do
            route=$(echo "$f" | sed 's|^out||; s|/index\.html$|/|')
            # 跳过根
            [ "$route" = "/" ] && continue
            echo "$route"
        done
    fi
}

# 收集所有要测试的页面
PAGES=$(discover_pages | sort -u)

# 如果有 out/ 目录，用更完整的列表
BUILD_PAGES=$(discover_from_build | sort -u)
if [ -n "$BUILD_PAGES" ]; then
    PAGES="$BUILD_PAGES"
fi

# 加上根页面
PAGES="/ $PAGES"

echo ""
echo "Testing $(echo "$PAGES" | wc -w) pages..."
echo ""

# 测试每个页面
for page in $PAGES; do
    STATUS=$(curl -sL -o /dev/null -w "%{http_code}" "${BASE_URL}${page}" 2>/dev/null)
    TESTED=$((TESTED + 1))
    
    if [ "$STATUS" = "200" ]; then
        echo "  ✅ $STATUS  $page"
    elif [ "$STATUS" = "308" ] || [ "$STATUS" = "307" ] || [ "$STATUS" = "301" ] || [ "$STATUS" = "302" ]; then
        # Redirect — follow it and check final status
        FINAL=$(curl -sL -o /dev/null -w "%{http_code}" "${BASE_URL}${page}" 2>/dev/null)
        if [ "$FINAL" = "200" ]; then
            echo "  ✅ $STATUS→$FINAL  $page (redirect)"
        else
            echo "  ❌ $STATUS→$FINAL  $page (redirect failed)"
            FAILED=$((FAILED + 1))
        fi
    else
        echo "  ❌ $STATUS  $page"
        FAILED=$((FAILED + 1))
    fi
done

echo ""
echo "================================"
echo "Tested: $TESTED pages"

if [ $FAILED -eq 0 ]; then
    echo "Result: ✅ ALL PASSED"
    exit 0
else
    echo "Result: ❌ $FAILED FAILED"
    exit 1
fi
