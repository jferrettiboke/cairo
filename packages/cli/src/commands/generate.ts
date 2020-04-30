import fs from "fs";
import Path from "path";
import prettier from "prettier";
import chokidar from "chokidar";
import log from "../utils/log";

function getPropValue(value: string) {
  if (Number(value) || value === "true" || value === "false") {
    return `${value}`;
  }

  return `"${value}"`;
}

function renderPropType([name, { _default, _common, ...values }]: any) {
  return `${name}: PropTypes.oneOf([${Object.entries(
    values
  ).map(([key, value]) => getPropValue(key))}])`;
}

function renderDefaultProp([name, { _default, _common, ...values }]: any) {
  if (!_default) return;
  return `${name}: "${_default}"`;
}

function renderTypeProps([name, { _default, _common, ...values }]: any) {
  const renderProps = Object.entries(values)
    .map(([key, value]) => getPropValue(key))
    .join("|");

  return `${name}?: ${renderProps}`;
}

function renderComponent(component: string, styleConfig: any = {}) {
  const primitiveComponents: Record<string, string> = {
    Badge: "HTMLDivElement",
    Box: "HTMLDivElement",
    Button: "HTMLButtonElement",
    Checkbox: "HTMLInputElement",
    Code: "HTMLDivElement",
    CodeBlock: "HTMLDivElement",
    Container: "HTMLDivElement",
    Divider: "HTMLDivElement",
    Grid: "HTMLDivElement",
    Image: "HTMLImageElement",
    Input: "HTMLInputElement",
    Link: "HTMLLinkElement",
    Select: "HTMLSelectElement",
    Table: "HTMLTableElement",
    Text: "HTMLSpanElement",
    Textarea: "HTMLTextAreaElement",
  };
  const htmlElement = primitiveComponents[component];

  return `
  // THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
  
  import React from "react";
  import PropTypes from "prop-types";
  import {
    ${component} as ${component}Primitive,
    // ${component}Props as ${component}PrimitiveProps,
  } from "cairo-primitives";
  
  // export type ${component}Props = ${component}PrimitiveProps & {
  //   ${Object.entries(styleConfig.variants).sort().map(renderTypeProps)}
  // };
  
  export const ${component} = React.forwardRef<any, any>(
    (props, forwardedRef) => (
      <${component}Primitive
        {...props}
        ref={forwardedRef}
        styleConfig={${JSON.stringify(styleConfig)}}
      />
    )
  );
  
  ${component}.defaultProps = {
    ${Object.entries(styleConfig.variants).sort().map(renderDefaultProp)}
  };

  ${component}.propTypes = {
    ${Object.entries(styleConfig.variants).sort().map(renderPropType)}
  };
`;
}

const primitiveComponents = {
  Badge: { base: {}, variants: {} },
  Box: { base: {}, variants: {} },
  Button: { base: {}, variants: {} },
  Checkbox: { base: {}, variants: {} },
  Code: { base: {}, variants: {} },
  CodeBlock: { base: {}, variants: {} },
  Container: { base: {}, variants: {} },
  Divider: { base: {}, variants: {} },
  Grid: { base: {}, variants: {} },
  Image: { base: {}, variants: {} },
  Input: { base: {}, variants: {} },
  Link: { base: {}, variants: {} },
  Select: { base: {}, variants: {} },
  Table: { base: {}, variants: {} },
  Text: { base: {}, variants: {} },
  Textarea: { base: {}, variants: {} },
};

function format(source: string) {
  return prettier.format(source, { parser: "babel-ts" });
}

function writeFile(path: string, fileName: string, data: string) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }

  fs.writeFileSync(Path.resolve(path, fileName), format(data));
}

async function generate(configFile: any, outputPath: string) {
  const pkg = require(Path.resolve(process.cwd(), "package.json"));

  if (!pkg.dependencies.hasOwnProperty("prop-types")) {
    log.error("Error: Install `prop-types` first.");
    log.info("Solution: Run `npm i prop-types` or `yarn add prop-types`.");
    return;
  }

  log.warning("Generating files...");

  const components = { ...primitiveComponents, ...configFile.components };

  Object.entries(components).forEach(([component, styleConfig]) => {
    const componentSource = renderComponent(component, styleConfig);
    writeFile(outputPath, `${component}.tsx`, componentSource);
  });

  writeFile(
    outputPath,
    "index.ts",
    `${Object.entries(components)
      .sort()
      .map(
        ([component, styleConfig]) =>
          `export { ${component} } from "./${component}";`
      )
      .join(";")}`
  );

  log.success("Done!");
}

export default (ctx: any) => {
  const { watch, inputPath, outputPath } = ctx;

  function requireUncached(module: string) {
    delete require.cache[require.resolve(module)];
    return require(module);
  }

  if (watch) {
    console.log(`\n${log.info("Watching...")}`);

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
};