import { chromium } from 'playwright';

async function runQa() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.error('Browser Console Error:', msg.text());
    }
  });

  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1000);

  // Take initial English screenshot
  await page.screenshot({ path: 'screenshot_en.png', fullPage: true });
  console.log('Saved screenshot_en.png');

  // Toggle to Arabic
  await page.click('button[aria-label*="Toggle character name"]');
  await page.waitForTimeout(500);

  // Take Arabic screenshot
  await page.screenshot({ path: 'screenshot_ar.png', fullPage: true });
  console.log('Saved screenshot_ar.png');

  await browser.close();
}

runQa().catch(console.error);
