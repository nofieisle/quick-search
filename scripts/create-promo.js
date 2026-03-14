const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'store-assets');
fs.mkdirSync(outDir, { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="280">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2C5F8A;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#4A90D9;stop-opacity:1"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="440" height="280" fill="url(#bg)"/>

  <!-- Magnifying glass icon (left side) -->
  <g transform="translate(20, 70)">
    <circle cx="45" cy="45" r="32"
      fill="none" stroke="white" stroke-width="10" opacity="0.3"/>
    <line x1="68" y1="68" x2="95" y2="95"
      stroke="white" stroke-width="12" stroke-linecap="round" opacity="0.3"/>
  </g>

  <!-- Title -->
  <text x="265" y="110" font-family="Arial, sans-serif" font-size="42"
    font-weight="bold" fill="white" text-anchor="middle">Quick Search</text>

  <!-- Subtitle -->
  <text x="265" y="148" font-family="Arial, sans-serif" font-size="18"
    fill="rgba(255,255,255,0.85)" text-anchor="middle">
    Search selected text instantly
  </text>

  <!-- Alt+S badge -->
  <rect x="190" y="175" width="150" height="52" rx="10"
    fill="white" opacity="0.15"/>
  <text x="265" y="208" font-family="Arial, sans-serif" font-size="26"
    font-weight="bold" fill="white" text-anchor="middle">Alt + S</text>
</svg>`;

async function generatePromo() {
  const outPath = path.join(outDir, 'promotional-440x280.png');
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outPath);
  console.log(`Created: ${outPath}`);
}

generatePromo().catch(err => {
  console.error('Error generating promo image:', err);
  process.exit(1);
});
