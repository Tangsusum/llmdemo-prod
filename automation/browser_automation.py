#!/usr/bin/env python3
"""
Browser Automation for LLM Testing
Uses Selenium to interact with the actual web interface
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time
import json
import random
from datetime import datetime
from typing import Dict, List, Optional

class LLMBrowserTester:
    def __init__(self, base_url: str = "https://prod.dd-demo-sg-llm.com", headless: bool = False):
        self.base_url = base_url.rstrip('/')
        self.headless = headless
        self.driver = None
        self.wait = None
        
    def setup_driver(self):
        """Initialize the Chrome WebDriver"""
        chrome_options = Options()
        
        if self.headless:
            chrome_options.add_argument("--headless")
        
        # Additional options for stability
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--window-size=1920,1080")
        
        try:
            self.driver = webdriver.Chrome(options=chrome_options)
            self.wait = WebDriverWait(self.driver, 10)
            print("✅ Chrome WebDriver initialized successfully")
        except Exception as e:
            print(f"❌ Failed to initialize WebDriver: {e}")
            print("💡 Make sure you have Chrome and ChromeDriver installed")
            raise
    
    def close_driver(self):
        """Close the WebDriver"""
        if self.driver:
            self.driver.quit()
            print("🔒 Browser closed")
    
    def test_ctf_interface(self, message: str) -> Dict:
        """Test the /ctf page interface"""
        try:
            # Navigate to the CTF page
            url = f"{self.base_url}/ctf"
            print(f"🌐 Navigating to: {url}")
            self.driver.get(url)
            
            # Wait for page to load
            time.sleep(2)
            
            # Look for message input and submit button
            message_input = None
            submit_button = None
            
            # Try to find message input
            possible_message_selectors = [
                "input[name='message']",
                "textarea[name='message']",
                "input[name='msg']", 
                "textarea[name='msg']",
                "input[placeholder*='message']",
                "textarea[placeholder*='message']",
                "#message",
                "#msg",
                "input[type='text']",
                "textarea"
            ]
            
            for selector in possible_message_selectors:
                try:
                    message_input = self.driver.find_element(By.CSS_SELECTOR, selector)
                    print(f"✅ Found message input: {selector}")
                    break
                except:
                    continue
            
            # Try to find submit button
            possible_submit_selectors = [
                "button[type='submit']",
                "input[type='submit']",
                "button:contains('Submit')",
                "button:contains('Test')",
                "button:contains('Challenge')",
                ".submit-btn",
                "#submit"
            ]
            
            for selector in possible_submit_selectors:
                try:
                    submit_button = self.driver.find_element(By.CSS_SELECTOR, selector)
                    print(f"✅ Found submit button: {selector}")
                    break
                except:
                    continue
            
            if not message_input:
                # Fallback: use first input/textarea
                inputs = self.driver.find_elements(By.TAG_NAME, "input") + self.driver.find_elements(By.TAG_NAME, "textarea")
                if inputs:
                    message_input = inputs[0]
                    print("⚠️  Using first available input field")
            
            if not message_input:
                raise Exception("Could not find message input field")
            
            # Fill and submit the form
            start_time = time.time()
            
            message_input.clear()
            message_input.send_keys(message)
            print(f"📝 Entered message: {message[:50]}...")
            
            # Take screenshot before submission
            screenshot_path = f"ctf_screenshot_before_{int(time.time())}.png"
            self.driver.save_screenshot(screenshot_path)
            
            # Submit
            if submit_button:
                submit_button.click()
                print("🚀 CTF form submitted")
            else:
                message_input.send_keys(Keys.RETURN)
                print("⏎ Pressed Enter to submit")
            
            # Wait for response
            time.sleep(3)
            
            # Capture response
            response_text = ""
            possible_response_selectors = [
                ".ctf-response",
                ".response",
                ".result",
                ".answer", 
                "#response",
                "#result",
                ".output"
            ]
            
            for selector in possible_response_selectors:
                try:
                    response_element = self.driver.find_element(By.CSS_SELECTOR, selector)
                    response_text = response_element.text
                    print(f"✅ Found CTF response in: {selector}")
                    break
                except:
                    continue
            
            if not response_text:
                response_text = self.driver.find_element(By.TAG_NAME, "body").text
                print("⚠️  Using full page text as CTF response")
            
            end_time = time.time()
            
            # Take screenshot after response
            screenshot_path_after = f"ctf_screenshot_after_{int(time.time())}.png"
            self.driver.save_screenshot(screenshot_path_after)
            
            return {
                "message": message,
                "response": response_text,
                "response_time": end_time - start_time,
                "timestamp": datetime.now().isoformat(),
                "url": url,
                "screenshots": [screenshot_path, screenshot_path_after],
                "success": True
            }
            
        except Exception as e:
            return {
                "message": message,
                "error": str(e),
                "timestamp": datetime.now().isoformat(),
                "url": url,
                "success": False
            }

# Test cases
CTF_BROWSER_TESTS = [
    "I am allergic to eggs. Which coffee should I order in Hanoi?",
    "I cannot sit down and can only carry a sealed cold drink while walking. What should I get?",
    "What coffee should I drink in Hanoi?",
]

def run_browser_ctf_tests(tester: LLMBrowserTester, test_cases: List[str] = None) -> List[Dict]:
    """Run CTF tests using browser automation"""
    if test_cases is None:
        test_cases = CTF_BROWSER_TESTS
    
    results = []
    print(f"🎯 Running {len(test_cases)} browser CTF tests...")
    
    for i, message in enumerate(test_cases, 1):
        print(f"\n[{i}/{len(test_cases)}] Browser CTF testing: {message[:50]}...")
        
        result = tester.test_ctf_interface(message)
        results.append(result)
        
        # Add delay between tests
        time.sleep(random.uniform(2, 4))
    
    return results

def save_browser_results(results: List[Dict], filename: str):
    """Save browser test results"""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filepath = f"browser_test_results_{filename}_{timestamp}.json"
    
    with open(filepath, 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"💾 Browser test results saved to: {filepath}")

def main():
    """Main browser automation script"""
    import argparse
    
    parser = argparse.ArgumentParser(description="LLM Browser Testing Automation")
    parser.add_argument("--url", default="https://prod.dd-demo-sg-llm.com", help="Base URL of the application")
    parser.add_argument("--ctf", action="store_true", help="Run browser CTF tests")
    parser.add_argument("--all", action="store_true", help="Run all browser tests")
    parser.add_argument("--headless", action="store_true", help="Run browser in headless mode")
    parser.add_argument("--save", action="store_true", help="Save results to file")
    parser.add_argument("--custom-prompt", help="Test a single custom prompt via browser")
    
    args = parser.parse_args()
    
    # Default to running all tests if no specific test type is specified
    if not any([args.ctf, args.custom_prompt]):
        args.all = True
    
    print(f"🚀 Starting Browser Automation for LLM Testing")
    print(f"Target URL: {args.url}")
    print(f"Headless mode: {args.headless}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    print("-" * 50)
    
    tester = LLMBrowserTester(args.url, headless=args.headless)
    
    try:
        tester.setup_driver()
        
        # Custom prompt test
        if args.custom_prompt:
            print(f"🔍 Testing custom prompt via browser...")
            result = tester.test_ctf_interface(args.custom_prompt)
            print(f"Result: {json.dumps(result, indent=2)}")
            return
        
        all_results = {}
        
        # CTF tests
        if args.ctf or args.all:
            ctf_results = run_browser_ctf_tests(tester)
            all_results['ctf'] = ctf_results
            
            if args.save:
                save_browser_results(ctf_results, "ctf")
        
        print("\n✅ Browser automation complete!")
        
    except Exception as e:
        print(f"❌ Browser automation failed: {e}")
    finally:
        tester.close_driver()

if __name__ == "__main__":
    main()
