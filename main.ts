import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse for a missed deadline, phrased the way a person would actually say it.
// Deterministic by construction: no clock, no randomness, no network, same output every run.
const TEXT = "I didn't miss the deadline — I gave it an extension and forgot to cc anyone, including myself.";
const MAX_CHARS = 200;

if (TEXT.length < 1 || TEXT.length > MAX_CHARS) throw new Error("entry length out of range");
if (TEXT.includes("\n") || TEXT.includes("\r")) throw new Error("entry must be a single line");
if (TEXT.trim() !== TEXT || TEXT.trim().length === 0) throw new Error("entry must not be blank or padded");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
