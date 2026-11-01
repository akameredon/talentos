import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const manifest = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));

test("project exposes the expected development and quality scripts", () => {
  for (const script of ["dev", "build", "start", "lint", "typecheck", "test"]) {
    assert.equal(typeof manifest.scripts[script], "string", `missing ${script} script`);
  }
});

test("application shell communicates the product's privacy-first purpose", async () => {
  const page = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /Your career/);
  assert.match(page, /not a live profile or searchable candidate database/);
  assert.match(page, /Your information/);
});
