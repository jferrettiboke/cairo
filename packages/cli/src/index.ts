#!/usr/bin/env node
import path from "path";
import chokidar from "chokidar";
import yargs from "yargs";
import chalk from "chalk";
import generate from "./lib/generate";

const { argv } = yargs.options({
  i: { type: "string", alias: "inputPath", description: "Config file path" },
  o: { type: "string", alias: "outputPath", description: "Generated output" },
  w: { type: "boolean", alias: "watch", description: "Watch mode" },
});

let { i: inputPath, o: outputPath, w: watch } = argv;

inputPath = path.resolve(process.cwd(), inputPath || "");
outputPath = path.resolve(process.cwd(), outputPath || "", "generated");

function requireUncached(module: string) {
  delete require.cache[require.resolve(module)];
  return require(module);
}

if (watch) {
  console.log(`\n${chalk.cyan("Watching...")}`);

  chokidar
    .watch(inputPath, {
      ignored: outputPath,
      // persistent: true,
      // awaitWriteFinish: {
      //   stabilityThreshold: 2000,
      //   pollInterval: 100,
      // },
    })
    .on("change", (path, stats) => {
      // Bug: requires are cached
      const configFile = requireUncached(inputPath as string);

      console.log(`> Changes on ${path}`);
      generate(configFile, outputPath as string);
    });
}

generate(requireUncached(inputPath), outputPath as string);
