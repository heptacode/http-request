#!/usr/bin/env node

import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';
import { build as esbuild } from 'esbuild';
import { execa } from 'execa';
import { readFile, rm } from 'node:fs/promises';
import path from 'node:path';

const pkgRaw = await readFile(
  path.join(process.cwd(), 'package.json'),
  'utf8'
);
const { dependencies = {} } = JSON.parse(pkgRaw);

const external = [...Object.keys(dependencies)];

async function build(options = {}) {
  await rm(path.join(process.cwd(), 'dist'), { force: true, recursive: true });
  await execa('yarn', ['run', 'tsc']);
  return esbuild({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    external,
    plugins: [pnpPlugin()],
    ...options,
  });
}

await Promise.all([
  build({ format: 'cjs', outfile: 'dist/index.cjs' }),
  build({ format: 'esm', outfile: 'dist/index.mjs' }),
]);