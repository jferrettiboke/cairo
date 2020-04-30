#!/usr/bin/env node
import path from "path";
import yargs from "yargs";
import generate from "./commands/generate";
import log from "./utils/log";

const { argv } = yargs.options({
  i: { type: "string", alias: "inputPath", description: "Config file path" },
  o: { type: "string", alias: "outputPath", description: "Generated output" },
  w: { type: "boolean", alias: "watch", description: "Watch mode" },
});

let { i: inputPath, o: outputPath, w: watch } = argv;

inputPath = path.resolve(process.cwd(), inputPath || "");
outputPath = path.resolve(process.cwd(), outputPath || "", "generated");

switch (argv._[0]) {
  case "generate":
    generate({ watch, inputPath, outputPath });
    break;

  case "lint":
    log.warning("This feature has not been implemented yet");
    break;

  default:
    log.error("Error: Unknown command");
    break;
}
