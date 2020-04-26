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

function renderPropTypes(component: string, props: object) {
  const renderProps = Object.entries(props)
    .sort()
    .map(renderPropType)
    .join(",\n  ");

  return `
export const ${component}PropTypes = {
  ${renderProps}
}
`;
}

function renderDefaultProp([name, { _default, _common, ...values }]: any) {
  if (!_default) return;
  return `${name}: "${_default}",`;
}

function renderDefaultProps(component: string, props: object) {
  const renderProps = Object.entries(props)
    .sort()
    .map(renderDefaultProp)
    .join("\n  ");

  return `
export const ${component}DefaultProps = {
${renderProps}
}
`;
}

function renderTypeProps([name, { _default, _common, ...values }]: any) {
  const renderProps = Object.entries(values)
    .map(([key, value]) => getPropValue(key))
    .join("|");

  return `${name}?: ${renderProps}`;
}

function renderTypes(component: string, props: object) {
  const renderProps = Object.entries(props)
    .sort()
    .map(renderTypeProps)
    .join(",\n  ");

  return `
export type ${component}Props = {
${renderProps}
}
`;
}

function renderComponent(component: string, styleConfig: any = {}) {
  return `
  import React from "react";
  import {
    ${component} as ${component}Primitive,
    ${component}Props as ${component}PrimitiveProps,
  } from "cairo-primitives";
  import {
    ${component}DefaultProps,
    ${component}PropTypes,
    ${component}Props as ${component}GeneratedProps,
  } from "./types";
  
  export type ${component}Props = ${component}PrimitiveProps & ${component}GeneratedProps;
  
  export const ${component} = React.forwardRef<HTML${component}Element, ${component}Props>(
    (props, forwardedRef) => (
      <${component}Primitive
        {...props}
        ref={forwardedRef}
        styleConfig={${JSON.stringify(styleConfig)}}
      />
    )
  );
  
  ${component}.defaultProps = ${component}DefaultProps;

  ${component}.propTypes = ${component}PropTypes;
`;
}

export function generateComponents(ast: any) {
  let data: Record<string, string> = {};

  Object.entries(ast.components).forEach(([component, styleConfig]) => {
    data[component] = renderComponent(component, styleConfig);
  });

  return data;
}

export function generateTypes(theme: any) {
  const { components } = theme;
  let dataParts: string[] = [];

  Object.entries(components)
    .sort()
    .forEach(([component, { base, variants }]: any) => {
      const defaultProps = renderDefaultProps(component, variants);
      const propTypes = renderPropTypes(component, variants);
      const props = renderTypes(component, variants);
      dataParts.push(defaultProps, propTypes, props);
    });

  const data: string = `
    import PropTypes from "prop-types";
    ${dataParts.map((i) => i).join("")}
  `;

  return data;
}
