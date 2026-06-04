#!/bin/bash
# Dev Server 管理脚本
# 用法: ./scripts/devserver.sh [start|stop|restart|status]

PROJECT_DIR="/root/.openclaw/projects/NebulaInfinity-WebSite"
SERVICE_NAME="nebula-devserver"
PID_FILE="/tmp/${SERVICE_NAME}.pid"
LOG_FILE="/tmp/${SERVICE_NAME}.log"
PORT=3000

start() {
    if is_running; then
        echo "✅ Dev server already running (PID $(cat $PID_FILE))"
        return 0
    fi

    echo "Starting dev server..."
    # Kill any stale next processes
    pkill -f "next dev" 2>/dev/null
    sleep 1
    
    # Clean .next cache
    rm -rf "$PROJECT_DIR/.next"
    
    # Start server
    cd "$PROJECT_DIR"
    nohup node_modules/.bin/next dev -H 0.0.0.0 > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    
    # Wait for startup
    echo "Waiting for server to be ready..."
    for i in $(seq 1 60); do
        if curl -s -o /dev/null -w "" http://localhost:$PORT 2>/dev/null; then
            echo "✅ Dev server started (PID $(cat $PID_FILE), port $PORT)"
            return 0
        fi
        sleep 1
    done
    
    echo "❌ Dev server failed to start within 60s"
    cat "$LOG_FILE" | tail -20
    return 1
}

stop() {
    if [ -f "$PID_FILE" ]; then
        kill $(cat "$PID_FILE") 2>/dev/null
        rm -f "$PID_FILE"
    fi
    pkill -f "next dev" 2>/dev/null
    sleep 1
    echo "✅ Dev server stopped"
}

restart() {
    stop
    sleep 1
    start
}

status() {
    if is_running; then
        echo "✅ Running (PID $(cat $PID_FILE), port $PORT)"
        curl -s -o /dev/null -w "  HTTP status: %{http_code}\n" http://localhost:$PORT
    else
        echo "❌ Not running"
    fi
}

is_running() {
    if [ -f "$PID_FILE" ] && kill -0 $(cat "$PID_FILE") 2>/dev/null; then
        return 0
    fi
    # Also check if port is in use
    if ss -tlnp | grep -q ":$PORT "; then
        return 0
    fi
    return 1
}

case "${1:-status}" in
    start)   start ;;
    stop)    stop ;;
    restart) restart ;;
    status)  status ;;
    *)       echo "Usage: $0 {start|stop|restart|status}" ;;
esac
