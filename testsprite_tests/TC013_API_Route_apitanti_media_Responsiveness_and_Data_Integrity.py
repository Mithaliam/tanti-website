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
        # -> Send a GET request to /api/tanti-media to test the API response directly.
        await page.goto('http://localhost:3001/api/tanti-media', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Send a malformed or unauthorized request to /api/tanti-media to verify error handling.
        await page.goto('http://localhost:3001/api/tanti-media?malformed=true', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Send an unauthorized request to /api/tanti-media to verify error handling.
        await page.goto('http://localhost:3001/api/tanti-media?unauthorized=true', timeout=10000)
        await asyncio.sleep(3)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=/tanti/ABB_AIC/ABB_AIC_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Anil_Dollars_Colony/Anil_Dollars_Colony-5.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Ashwath_Ram/Ashwath_Ram_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Fuzail/Fuzail_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Javaji/Javaji_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/King_Meadows/King_Meawdos_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Nagraj/Nagraj-9.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Others/Others_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Rai/Rai_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Raj_Kiran/Raj_Kiran_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Ranganath_lad/Ranganath_Lad_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Ranjanna/Ranjanna_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/residential/diming_1.png').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/security.jpg').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Shivakumar/Shivakumar_1.webp').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/tanti/Venkatkrishna/Venkatkrishna_1.webp').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    