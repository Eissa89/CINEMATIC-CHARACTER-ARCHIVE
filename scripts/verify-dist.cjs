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
  let reqUrl = req.url;
  if (reqUrl.startsWith('/CINEMATIC-CHARACTER-ARCHIVE/')) {
    reqUrl = reqUrl.replace('/CINEMATIC-CHARACTER-ARCHIVE/', '/');
  }
  let filePath = path.join(distPath, reqUrl === '/' ? 'index.html' : reqUrl);
  if (!fs.existsSync(filePath)) {
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
  console.log('Dist preview server running on http://localhost:4173/CINEMATIC-CHARACTER-ARCHIVE/');
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

  await page.goto('http://localhost:4173/CINEMATIC-CHARACTER-ARCHIVE/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'dist_preview.png', fullPage: true });

  const images = await page.locator('img').all();
  console.log('Found image count:', images.length);
  for (const img of images) {
    const src = await img.getAttribute('src');
    const alt = await img.getAttribute('alt');
    const natWidth = await img.evaluate(i => i.naturalWidth);
    console.log(`Image src: ${src}, alt: ${alt}, naturalWidth: ${natWidth}`);
  }

  console.log('Console Errors:', consoleErrors);
  console.log('Network Errors:', networkErrors);

  await browser.close();
  server.close();
});
