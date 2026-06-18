import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "src/app/icon.svg"));

async function png(size) {
  return sharp(svg, { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

// Assemble un .ico contenant des images PNG (supporté depuis Windows Vista).
function buildIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type icon
  header.writeUInt16LE(count, 4);

  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const chunks = [];
  images.forEach((img, i) => {
    const d = 16 * i;
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, d + 0); // width
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, d + 1); // height
    dir.writeUInt8(0, d + 2); // palette
    dir.writeUInt8(0, d + 3); // reserved
    dir.writeUInt16LE(1, d + 4); // color planes
    dir.writeUInt16LE(32, d + 6); // bpp
    dir.writeUInt32LE(img.data.length, d + 8); // size
    dir.writeUInt32LE(offset, d + 12); // offset
    offset += img.data.length;
    chunks.push(img.data);
  });

  return Buffer.concat([header, dir, ...chunks]);
}

const sizes = [16, 32, 48];
const images = [];
for (const size of sizes) images.push({ size, data: await png(size) });

writeFileSync(join(root, "src/app/favicon.ico"), buildIco(images));
writeFileSync(join(root, "src/app/apple-icon.png"), await png(180));
// Aperçu pour contrôle visuel
writeFileSync(join(root, "scripts/preview-128.png"), await png(128));

console.log("Favicon généré :", sizes.map((s) => `${s}x${s}`).join(", "), "+ apple-icon 180x180");
