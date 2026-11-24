import { mkdirSync, writeFileSync } from "node:fs";

// The entry line must stay byte-for-byte: a single sentence, no trailing newline.
const LINE =
  "The kettle clicks off at the exact moment the rain starts, and for one second the whole kitchen smells like the first morning of the world.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
