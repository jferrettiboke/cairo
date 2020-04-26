import fs from "fs";
import Path from "path";
import chalk from "chalk";
import prettier from "prettier";
import { generateTypes, generateComponents } from "./codegen";

function format(source: string) {
  return prettier.format(source, { parser: "babel-ts" });
}

function writeFile(path: string, fileName: string, data: string) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }

  fs.writeFileSync(Path.resolve(path, fileName), format(data));
}

export default async function generate(configFile: any, outputPath: string) {
  console.log(chalk.yellow("Generating types..."));

  const source = generateTypes(configFile);
  writeFile(outputPath, "types.ts", source);

  console.log(chalk.yellow("Generating components..."));

  const components = generateComponents(configFile);
  Object.entries(components).forEach(([component, componentSource]) => {
    writeFile(outputPath, `${component}.tsx`, componentSource);
  });

  console.log(chalk.green("Done!"));
}
