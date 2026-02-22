import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const source = path.join(root, "public/images/sl-logo.jpg");

async function generate() {
  // Create a square crop from center of the source image
  const metadata = await sharp(source).metadata();
  const size = Math.min(metadata.width, metadata.height);
  const left = Math.round((metadata.width - size) / 2);
  const top = Math.round((metadata.height - size) / 2);

  const cropped = sharp(source).extract({
    left,
    top,
    width: size,
    height: size,
  });

  // Generate icon.png (32x32) for the app/ directory (Next.js favicon)
  await cropped
    .clone()
    .resize(32, 32)
    .png()
    .toFile(path.join(root, "app/favicon.ico"));

  // Generate apple-icon.png (180x180)
  await cropped
    .clone()
    .resize(180, 180)
    .png()
    .toFile(path.join(root, "app/apple-icon.png"));

  // Generate icon.png (192x192) for general use
  await cropped
    .clone()
    .resize(192, 192)
    .png()
    .toFile(path.join(root, "app/icon.png"));

  console.log("Favicons generated successfully!");
}

generate().catch(console.error);
