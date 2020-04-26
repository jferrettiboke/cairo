import styles from "./styles";
import components from "./components";

export default {
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
  //   text: {
  //     heading: {
  //       fontFamily: "heading",
  //       lineHeight: "heading",
  //       fontWeight: "heading",
  //     },
  //   },
  styles,
  components,
};
