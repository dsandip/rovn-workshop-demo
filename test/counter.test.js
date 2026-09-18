// Simple test: verify the homepage counter value in index.html
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

// Extract the counter value from the <p class="counter" id="counter">N</p> element
const match = html.match(/id="counter"[^>]*>(\d+)</);
if (!match) {
  console.error("FAIL: counter element not found in index.html");
  process.exit(1);
}

const value = parseInt(match[1], 10);
const expected = 6218;

if (value !== expected) {
  console.error(`FAIL: expected counter to be ${expected}, got ${value}`);
  process.exit(1);
}

console.log(`PASS: counter is ${value} (expected ${expected})`);
