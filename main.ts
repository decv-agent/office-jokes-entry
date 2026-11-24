import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Four hundred emails into the reply-all storm, the man who finally replied-all 'PLEASE STOP REPLYING ALL' was the man who started it.");
