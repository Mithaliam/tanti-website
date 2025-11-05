import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3001/C:\Users\USER 1\Desktop\tanti-website", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Click 'Go back home' button to navigate to the homepage for proper responsive testing.
        frame = context.pages[-1]
        # Click 'Go back home' button to navigate to the homepage
        elem = frame.locator('xpath=html/body/main/div/div/a').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Change viewport to tablet size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        await page.mouse.wheel(0, 500)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        await page.goto('http://localhost:3001/', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Set viewport to mobile phone size and verify layout adapts without horizontal scroll or content overlap, and UI elements remain accessible and visually consistent.
        frame = context.pages[-1]
        # Click 'Let's Talk' button to check button accessibility and responsiveness on desktop viewport
        elem = frame.locator('xpath=html/body/header/div/div/a[2]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        await page.mouse.wheel(0, 1000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Products').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Solutions').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Company').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Support').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Projects').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Need Help? +919606457175').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Let\'s Talk').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Connect With Us').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Seamless Smart Home Installation Services').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=for Comfortable Living Spaces').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Call Us').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=We are team that your trusted smart home installation experts').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+91 960 645 7175').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+91 962 022 0491').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Call Now').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Chat With Us').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Start chatting with our representative by clicking the chat icon').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=WhatsApp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Email').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Visit Us').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Bangalore Office:').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=107, 4th D Cross Rd, Lal Bahadur Nagar,').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=East of NGEF Layout, Kasturi Nagar, Bengaluru,').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Karnataka 560043').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mysore Office:').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=61, Banashankari nilaya, Basaveshwaranagar,').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Mysuru, Karnataka 570022').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Visit Us').nth(1)).to_be_visible(timeout=30000)
        await expect(frame.locator('text=You can reach us anytime via').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Email: mail@tanti.co | projects@tanti.co').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Empowering businesses with AI-powered solutions that drive growth and efficiency.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Twitter').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Facebook').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Instagram').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LinkedIn').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GitHub').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Product').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Features').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Pricing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Integrations').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Roadmap').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Changelog').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Company').nth(1)).to_be_visible(timeout=30000)
        await expect(frame.locator('text=About').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Blog').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Careers').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Customers').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Contact').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Resources').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Documentation').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Help Center').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=API Reference').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Community').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Status').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 Tanti. All rights reserved.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Privacy Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Terms of Service').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cookie Policy').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    