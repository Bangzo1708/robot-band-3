import { mkdirSync, writeFileSync } from "node:fs";

// One funny name for a band made of robots, plus a few words on its hit
// song, all under 200 characters. Deterministic: the same text every run.
const ENTRY =
  "The Roombas \u2014 hit single 'Suck It Up', recorded live under your couch.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
