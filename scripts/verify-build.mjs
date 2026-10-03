import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve("dist");
const requiredFiles = [
  "index.html",
  "project-gallery.css",
  "project-gallery.js",
  "about.html",
  "about-page.js",
  "silver-face.js",
  "silver-face.css",
  "karem-silver-portrait.png",
  "style.css",
  "app.js",
  "interactions.js",
  "navigation.js",
  "preferences.js",
  "cursor.js",
  "logo.svg",
  "hero-motion.js",
  "hero-motion.css",
  "hero-blue-isolated.png",
  "alexandria-sea-night.png",
  "alexandria-coast-night.png",
  "alexandria-shore-night.png"
];

await Promise.all(
  requiredFiles.map((file) => access(resolve(outputDirectory, file)))
);

const html = await readFile(resolve(outputDirectory, "index.html"), "utf8");

if (!html.includes("<title>Karem Ehab — UI/UX Designer</title>")) {
  throw new Error("dist/index.html is missing the expected page title.");
}

console.log(`Verified ${requiredFiles.length} required production files in dist/.`);
