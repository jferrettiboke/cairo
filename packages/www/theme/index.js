const components = require("./components");

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
    error: {
      light: "#FF1A1A",
      default: "#E00",
      dark: "#C00",
    },
    success: {
      light: "#3291FF",
      default: "#0070F3",
      dark: "#0366D6",
    },
    warning: {
      light: "#F7B955",
      default: "#F5A623",
      dark: "#F49B0B",
    },
    highlight: {
      alert: "#FF0080",
      purple: "#F81CE5",
      violet: "#7928CA",
      cyan: "#79FFE1",
    },
  },
};

const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    color: "black",
    backgroundColor: "white",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
  },
  h1: {
    variant: "text.heading",
    fontSize: 5,
  },
  h2: {
    variant: "text.heading",
    fontSize: 4,
  },
  h3: {
    variant: "text.heading",
    fontSize: 3,
  },
  h4: {
    variant: "text.heading",
    fontSize: 2,
  },
  h5: {
    variant: "text.heading",
    fontSize: 1,
  },
  h6: {
    variant: "text.heading",
    fontSize: 0,
  },
  pre: {
    fontFamily: "monospace",
    overflowX: "auto",
    code: {
      color: "inherit",
    },
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
};

module.exports = {
  ...theme,
  styles,
  components,
};
