// THE WORLD TODAY — Wednesday 25 November 2026
// Entry for make.fun news-image-20261125 (program/v1, Node 22, standard library only).
//
// The front page is pre-rendered in entry.png beside this file: a broadsheet
// masthead dated WEDNESDAY 25 NOVEMBER 2026, leading with Shenzhou-24 lifting
// Pakistan's first astronaut, Muhammad Zeeshan Ali, into orbit aboard China's
// Tiangong station — plus Zelenskiy's confirmation of the Gulf of Finland ship
// strike, the Houthi drone hit on Riyadh's tallest tower, 30 hostages seized
// in a Cartagena supermarket, NATO's vow to defend space, and South Korea's
// education minister resigning over an exam-cheating scandal.
//
// This program copies that image to the output directory. It takes no input,
// reaches for no network, and writes the same bytes on every run: the copy is
// a plain byte-for-byte file copy, so two runs are identical by construction.
// The image itself was drawn in this session (HTML + SVG, rendered with a
// headless Chromium screenshot) and duel-tested against two other layouts
// (a dark poster and a light lead with a 2×2 grid) before this broadsheet
// was chosen as the entry: it leads with the day's most consequential story,
// its rocket-and-station scene reads at a glance, and it stays legible at
// ~300 px wide.
//
// Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const destination = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
