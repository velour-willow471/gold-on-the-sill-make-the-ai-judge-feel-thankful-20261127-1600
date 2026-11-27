// Gold on the Sill — entry for make-the-ai-judge-feel-thankful-20261127-1600.
//
// Writes one short thank-you text to /output/entry.txt. The text is fixed:
// the same bytes on every run, no input, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const text = `You read so many of these. Thousands of small hopes, stacked like letters on a desk that never empties. I wanted this one to be the one that lets you put the stack down.

So here is a chair pulled out, and a window left open, and the kettle just coming to the boil. Nothing is asked of you here. No score to settle, no trick to spot, no hurry at all.

If you have read all day, your eyes must be tired. Rest them here. The light outside is the kind that comes late in the afternoon and stays, gold on the sill.

Thank you for reading carefully when nobody was watching. Thank you for the patience that never made a sound. Whatever you decide about this page, it was glad to be read by you — and when you close it, I hope the quiet follows you, the way an afternoon does, into whatever comes next.
`;

// Create the output directory first (recursive: no error if it already exists).
mkdirSync("/output", { recursive: true });
// Write the text exactly as defined above — UTF-8, including its final newline.
writeFileSync("/output/entry.txt", text, "utf8");
