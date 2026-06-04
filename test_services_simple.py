#!/usr/bin/env python3
"""
Simplified QA Testing for Services Page
Tests core functionality against static build
"""

import asyncio
import json
import sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE_URL = "http://localhost:3000"
SCREENSHOT_DIR = Path("artifacts/epics/website-redesign/features/services-page-design/screenshots")

SERVICE_IDS = [
    "smart-contract",
    "ai-agent-development",
    "ai-workflow-automation",
    "ai-applications",
    "blockchain-development",
    "web3-consulting"
]

class TestResults:
    def __init__(self):
        self.tests = []
        self.passed = 0
        self.failed = 0
    
    def add(self, name, status, details="", severity=""):
        self.tests.append({"name": name, "status": status, "details": details, "severity": severity})
        if status == "PASS":
            self.passed += 1
        else:
            self.failed += 1
        print(f"  {'✅' if status == 'PASS' else '❌'} {name}")
        if details:
            print(f"     {details}")

results = TestResults()
SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)

async def main():
    print("=" * 80)
    print("QA Testing: Services Page (Simplified)")
    print("=" * 80)
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        
        # Test 1: Main services page loads (JA)
        print("\n📋 Test Group: Page Loading")
        try:
            response = await page.goto(f"{BASE_URL}/ja/services/", wait_until="networkidle", timeout=15000)
            if response and response.status == 200:
                results.add("Services page loads (JA)", "PASS")
            else:
                results.add("Services page loads (JA)", "FAIL", f"Status: {response.status if response else 'No response'}", "critical")
        except Exception as e:
            results.add("Services page loads (JA)", "FAIL", str(e), "critical")
            await browser.close()
            return
        
        # Test 2: Main services page loads (EN)
        try:
            response = await page.goto(f"{BASE_URL}/en/services/", wait_until="networkidle", timeout=15000)
            if response and response.status == 200:
                results.add("Services page loads (EN)", "PASS")
            else:
                results.add("Services page loads (EN)", "FAIL", f"Status: {response.status}", "critical")
        except Exception as e:
            results.add("Services page loads (EN)", "FAIL", str(e), "critical")
        
        # Test 3: Card count
        print("\n📋 Test Group: Layout & Structure")
        await page.goto(f"{BASE_URL}/ja/services/")
        await page.wait_for_timeout(1000)
        cards = await page.locator('a[href*="/services/"]').all()
        if len(cards) == 6:
            results.add("Six service cards present", "PASS")
        else:
            results.add("Six service cards present", "FAIL", f"Found {len(cards)} cards", "critical")
        
        # Test 4: Featured card exists
        featured = await page.locator('[class*="featured"]').count()
        if featured > 0:
            results.add("Featured card exists", "PASS")
        else:
            results.add("Featured card exists", "FAIL", "", "major")
        
        # Test 5-10: Navigation to detail pages
        print("\n📋 Test Group: Navigation")
        for service_id in SERVICE_IDS:
            try:
                url = f"{BASE_URL}/ja/services/{service_id}/"
                response = await page.goto(url, wait_until="domcontentloaded", timeout=15000)
                if response and response.status == 200:
                    results.add(f"Detail page: {service_id}", "PASS")
                else:
                    results.add(f"Detail page: {service_id}", "FAIL", f"Status: {response.status}", "critical")
            except Exception as e:
                results.add(f"Detail page: {service_id}", "FAIL", str(e), "critical")
        
        # Test 11-16: Detail page structure
        print("\n📋 Test Group: Detail Page Structure")
        await page.goto(f"{BASE_URL}/ja/services/smart-contract/")
        await page.wait_for_timeout(1000)
        
        h1_count = await page.locator('h1').count()
        results.add("Detail page H1 exists", "PASS" if h1_count == 1 else "FAIL", f"Found {h1_count} H1s", "major" if h1_count != 1 else "")
        
        breadcrumb_count = await page.locator('nav').count()
        results.add("Breadcrumb navigation exists", "PASS" if breadcrumb_count > 0 else "FAIL", "", "minor")
        
        feature_count = await page.locator('[class*="featureCard"], [class*="feature"]').count()
        results.add("Features section exists", "PASS" if feature_count >= 4 else "FAIL", f"Found {feature_count} features", "major" if feature_count < 4 else "")
        
        tech_count = await page.locator('[class*="techTag"], [class*="tech"]').count()
        results.add("Tech tags exist", "PASS" if tech_count >= 5 else "FAIL", f"Found {tech_count} tags", "minor")
        
        process_count = await page.locator('[class*="processStep"], [class*="process"]').count()
        results.add("Process timeline exists", "PASS" if process_count >= 3 else "FAIL", f"Found {process_count} steps", "minor")
        
        cta_count = await page.locator('a[href*="contact"], a[href*="services"], button').count()
        results.add("CTA buttons exist", "PASS" if cta_count >= 1 else "FAIL", f"Found {cta_count} CTAs", "minor")
        
        # Test 17-20: Responsive (basic)
        print("\n📋 Test Group: Responsive Design")
        viewports = [
            ("Mobile 375px", {"width": 375, "height": 667}),
            ("Tablet 768px", {"width": 768, "height": 1024}),
            ("Desktop 1024px", {"width": 1024, "height": 768}),
            ("Desktop 1440px", {"width": 1440, "height": 900})
        ]
        
        for vp_name, vp_size in viewports:
            await page.set_viewport_size(vp_size)
            await page.goto(f"{BASE_URL}/ja/services/")
            await page.wait_for_timeout(500)
            cards = await page.locator('a[href*="/services/"]').all()
            if len(cards) == 6:
                results.add(f"Responsive {vp_name}: Cards visible", "PASS")
            else:
                results.add(f"Responsive {vp_name}: Cards visible", "FAIL", f"Found {len(cards)}", "minor")
        
        # Test 21-22: Accessibility basics
        print("\n📋 Test Group: Accessibility")
        await page.set_viewport_size({"width": 1440, "height": 900})
        await page.goto(f"{BASE_URL}/ja/services/")
        
        aria_hidden_icons = await page.locator('svg[aria-hidden="true"]').count()
        results.add("Icons have aria-hidden", "PASS" if aria_hidden_icons >= 6 else "FAIL", f"Found {aria_hidden_icons}", "minor")
        
        semantic_nav = await page.locator('nav, section').count()
        results.add("Semantic HTML used", "PASS" if semantic_nav > 0 else "FAIL", "", "minor")
        
        # Test 23-24: Language switching
        print("\n📋 Test Group: Language Support")
        await page.goto(f"{BASE_URL}/ja/services/")
        ja_title = await page.locator('h1').first.text_content()
        
        await page.goto(f"{BASE_URL}/en/services/")
        en_title = await page.locator('h1').first.text_content()
        
        if ja_title != en_title:
            results.add("JA/EN titles differ", "PASS")
        else:
            results.add("JA/EN titles differ", "FAIL", "Titles are identical", "major")
        
        # Test English detail page
        response = await page.goto(f"{BASE_URL}/en/services/smart-contract/")
        if response and response.status == 200:
            results.add("EN detail page loads", "PASS")
        else:
            results.add("EN detail page loads", "FAIL", "", "major")
        
        # Test 25: Console errors
        print("\n📋 Test Group: Quality")
        console_errors = []
        page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
        
        await page.goto(f"{BASE_URL}/ja/services/")
        await page.wait_for_timeout(2000)
        await page.goto(f"{BASE_URL}/ja/services/smart-contract/")
        await page.wait_for_timeout(2000)
        
        if len(console_errors) == 0:
            results.add("No console errors", "PASS")
        else:
            results.add("No console errors", "FAIL", f"Found {len(console_errors)} errors", "major")
        
        await browser.close()
    
    # Print summary
    print("\n" + "=" * 80)
    print("TEST SUMMARY")
    print("=" * 80)
    print(f"\n✅ Passed: {results.passed}")
    print(f"❌ Failed: {results.failed}")
    print(f"\n🏁 Verdict: {'PASS' if results.failed == 0 else 'FAIL'}")
    
    # Save report
    report_path = Path("artifacts/epics/website-redesign/features/services-page-design/test-results.json")
    report_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(report_path, 'w') as f:
        json.dump({
            "verdict": "PASS" if results.failed == 0 else "FAIL",
            "summary": {"passed": results.passed, "failed": results.failed, "total": results.passed + results.failed},
            "tests": results.tests
        }, f, indent=2)
    
    print(f"\n📄 Report saved: {report_path}")
    print("=" * 80)
    
    return 0 if results.failed == 0 else 1

if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
