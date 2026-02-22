import sharp from "sharp";
import fs from "fs";
import path from "path";

// Fetch the source image from the blob URL
const imageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sl%20logo-PU1VEyObQx4PVEwmb4jTcVxdKN36ZV.jpg";

async function generate() {
  const res = await fetch(imageUrl);
  const buffer = Buffer.from(await res.arrayBuffer());

  // Create a square crop from center of the source image
  const metadata = await sharp(buffer).metadata();
  const size = Math.min(metadata.width, metadata.height);
  const left = Math.round((metadata.width - size) / 2);
  const top = Math.round((metadata.height - size) / 2);

  const cropped = sharp(buffer).extract({
    left,
    top,
    width: size,
    height: size,
  });

  // Generate favicon.ico (32x32) for the app/ directory
  const favicon = await cropped.clone().resize(32, 32).png().toBuffer();

  // Generate apple-icon.png (180x180)
  const appleIcon = await cropped.clone().resize(180, 180).png().toBuffer();

  // Generate icon.png (192x192)
  const icon = await cropped.clone().resize(192, 192).png().toBuffer();

  // Output as base64 for capture
  console.log("FAVICON_BASE64:" + favicon.toString("base64"));
  console.log("APPLE_ICON_BASE64:" + appleIcon.toString("base64"));
  console.log("ICON_BASE64:" + icon.toString("base64"));
  console.log("Done!");
}

generate().catch(console.error);
