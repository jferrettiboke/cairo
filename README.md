[![Cairo](./cairo.jpg)](https://cairo.now.sh)

<p align="left">
  <a aria-label="Creator" href="https://github.com/jferrettiboke">
    <img src="https://img.shields.io/badge/MADE%20BY%20Jesús%20Ferretti-000000.svg?style=for-the-badge&logo=Logo&labelColor=000000&logoWidth=20">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/cairo">
    <img alt="" src="https://img.shields.io/npm/v/cairo.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/jferrettiboke/cairo/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/cairo.svg?style=for-the-badge&labelColor=000000">
  </a>
</p>

## Description

Cairo helps you generate a production-ready React.js component library from your specs, with a command.

Build consistent, themeable, type-safe, accessible React apps and websites with ease, confidence, and speed.

Make all your components look like how you want, let Cairo handles the rest, including functionality, accessibility, API design, auto-generated code with TypeScript support, and many more. Superior DX and UX. Always.

## Features

- Great UX
- Superior DX with a great API design
- Type-safe (TypeScript)
- Rapid and easy customization
- Accessible and responsive by default

## Why

When building products, it is tedious to write and maintain components across products, ensure best practices, and many more things. Having one central design system improves the workflow drastically.

- Build products and iterate faster
- Waste less time maintaining design systems for each product
- Be more productive
- Keep consistency across products
- User experience: ensuring great UX to the end user
- Accessibility: ensuring content is usable by and for everyone
- Performance: ensuring fast load times for the end user
- Developer experience: ensuring superior DX

## TODOs

**`cairo-primitives`**

- [x] Define first components
- [ ] Give good defaults
- [ ] Make components accessible
- [ ] Make custom props responsive

**`cairo`**

- [x] Generate components (styling, prop types, TypeScript support...)
- [ ] Generate Styleguide (theme, components, playground...): `cairo generate --styleguide`
- [ ] 🤔 Generate and publish to NPM: `cairo generate --npm`
- [ ] 🤔 Lint (theme, components...): `cairo lint`

**Examples**

- [ ] Replicate Vercel Design
- [ ] Replicate Stripe Design

## Contribute

Please, do not hesitate to contribute to this project (it does not matter how small your contribution could look like — everything counts in some way).

## FAQs

TBD

## Creator

Made with ❤️ by [Jesús Ferretti](https://twitter.com/jferrettiboke)

---

## Documentation

### Getting Started

#### Installation

Use `npm i -D cairo` or `yarn add -D cairo` to install Cairo as a dev dependency.

#### Generate

You just need to indicate the main entry point for the theme.

`cairo generate -i theme/`

With a specific output path:

`cairo generate -i theme/ -o /components`

This will generate all components at `components/generated/`. If you don't specify the output path, it will generate all files at the current working directory, `generated/`.

To check all options, please execute `cairo --help` in your terminal.

#### Usage

After generating all components, you can use them easily.

First, be sure to use the provider component.

```jsx
import { CairoProvider } from "cairo-primitives";
import theme from "../theme";

export default function App({ children }) {
  return <CairoProvider theme={theme}>{children}</CairoProvider>;
}
```

And then, use any generated component you want.

```jsx
import { Button, Box, Text } from "../components/generated";

export default function HomePage() {
  return (
    <Box sx={{ p: [2, 4, 6] }}>
      <Text as="p">Hello world!</Text>
      <Box>
        <Button variant="primary">My awesome button</Button>
      </Box>
    </Box>
  );
}
```
