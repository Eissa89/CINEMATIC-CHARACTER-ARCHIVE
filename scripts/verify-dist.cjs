const { chromium } = require('playwright');
const fs = require('fs');
const http = require('http');
const path = require('path');

const distPath = path.join(__dirname, '..', 'dist');
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  let filePath = path.join(distPath, reqUrl === '/' ? 'index.html' : reqUrl);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distPath, 'index.html');
  }
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(4173, async () => {
  console.log('Dist preview server running on http://localhost:4173/');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleErrors = [];
  const networkErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('response', resp => {
    if (resp.status() >= 400) networkErrors.push({ url: resp.url(), status: resp.status() });
  });

  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });

  // Verify English name
  const bodyTextEn = await page.textContent('body');
  console.log('Body contains LIGHTNING McQUEEN:', bodyTextEn.includes('LIGHTNING McQUEEN'));

  // Verify McQueen hero image
  const heroImg = page.locator('img[alt="LIGHTNING McQUEEN"]').first();
  const heroWidth = await heroImg.evaluate(i => i.naturalWidth);
  console.log('McQueen hero naturalWidth:', heroWidth);

  // Toggle language to Arabic
  const arButton = page.locator('button', { hasText: 'العربية' });
  if (await arButton.isVisible()) {
    await arButton.click();
    await page.waitForTimeout(500);
  }

  const bodyTextAr = await page.textContent('body');
  console.log('Contains Arabic title (برق بنزين):', bodyTextAr.includes('برق بنزين'));

  await page.screenshot({ path: 'dist_preview.png', fullPage: true });

  console.log('Console Errors count:', consoleErrors.length);
  console.log('Network Errors count:', networkErrors.length);

  await browser.close();
  server.close();

  if (consoleErrors.length > 0 || networkErrors.length > 0 || heroWidth <= 0 || !bodyTextAr.includes('برق بنزين')) {
    console.error('VERIFICATION FAILED!');
    process.exit(1);
  } else {
    console.log('VERIFICATION PASSED CLEANLY!');
  }
});
