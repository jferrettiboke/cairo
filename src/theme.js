// import prism from "@theme-ui/prism/presets/vs-dark.json";

const baseColors = {
  black: "#000",
  white: "#fff",
  gray: {
    "100": "#f7fafc",
    "200": "#edf2f7",
    "300": "#e2e8f0",
    "400": "#cbd5e0",
    "500": "#a0aec0",
    "600": "#718096",
    "700": "#4a5568",
    "800": "#2d3748",
    "900": "#1a202c"
  },
  red: {
    "100": "#fff5f5",
    "200": "#fed7d7",
    "300": "#feb2b2",
    "400": "#fc8181",
    "500": "#f56565",
    "600": "#e53e3e",
    "700": "#c53030",
    "800": "#9b2c2c",
    "900": "#742a2a"
  },
  orange: {
    "100": "#fffaf0",
    "200": "#feebc8",
    "300": "#fbd38d",
    "400": "#f6ad55",
    "500": "#ed8936",
    "600": "#dd6b20",
    "700": "#c05621",
    "800": "#9c4221",
    "900": "#7b341e"
  },
  yellow: {
    "100": "#fffff0",
    "200": "#fefcbf",
    "300": "#faf089",
    "400": "#f6e05e",
    "500": "#ecc94b",
    "600": "#d69e2e",
    "700": "#b7791f",
    "800": "#975a16",
    "900": "#744210"
  },
  green: {
    "100": "#f0fff4",
    "200": "#c6f6d5",
    "300": "#9ae6b4",
    "400": "#68d391",
    "500": "#48bb78",
    "600": "#38a169",
    "700": "#2f855a",
    "800": "#276749",
    "900": "#22543d"
  },
  teal: {
    "100": "#e6fffa",
    "200": "#b2f5ea",
    "300": "#81e6d9",
    "400": "#4fd1c5",
    "500": "#38b2ac",
    "600": "#319795",
    "700": "#2c7a7b",
    "800": "#285e61",
    "900": "#234e52"
  },
  blue: {
    "100": "#ebf8ff",
    "200": "#bee3f8",
    "300": "#90cdf4",
    "400": "#63b3ed",
    "500": "#4299e1",
    "600": "#3182ce",
    "700": "#2b6cb0",
    "800": "#2c5282",
    "900": "#2a4365"
  },
  indigo: {
    "100": "#ebf4ff",
    "200": "#c3dafe",
    "300": "#a3bffa",
    "400": "#7f9cf5",
    "500": "#667eea",
    "600": "#5a67d8",
    "700": "#4c51bf",
    "800": "#434190",
    "900": "#3c366b"
  },
  purple: {
    "100": "#faf5ff",
    "200": "#e9d8fd",
    "300": "#d6bcfa",
    "400": "#b794f4",
    "500": "#9f7aea",
    "600": "#805ad5",
    "700": "#6b46c1",
    "800": "#553c9a",
    "900": "#44337a"
  },
  pink: {
    "100": "#fff5f7",
    "200": "#fed7e2",
    "300": "#fbb6ce",
    "400": "#f687b3",
    "500": "#ed64a6",
    "600": "#d53f8c",
    "700": "#b83280",
    "800": "#97266d",
    "900": "#702459"
  }
};

const space = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem"
};

const placeholderStyle = {
  color: "gray.400",
  opacity: 1
};

const fieldStyles = {
  appearance: "none",
  backgroundColor: "background",
  border: "1px solid",
  borderColor: "gray.300",
  borderRadius: "default",
  boxSizing: "border-box",
  boxShadow: "default",
  color: "text",
  fontFamily: "sans",
  fontWeight: "normal",
  fontSize: "base",
  lineHeight: "normal",
  outline: "none",
  py: "3",
  px: "4",
  width: "full",
  "&:focus": {
    borderColor: "gray.500"
  },
  "&:read-only": {
    borderColor: "gray.200",
    color: "gray.500"
  },
  "&:disabled": {
    borderColor: "gray.200",
    color: "gray.400",
    cursor: "not-allowed"
  },
  "&::-webkit-input-placeholder": placeholderStyle,
  "&::-moz-placeholder": placeholderStyle,
  "&:-ms-input-placeholder": placeholderStyle
};

const base = {
  initialColorMode: "light",
  colors: {
    black: baseColors.black,
    white: baseColors.white,
    gray: baseColors.gray,
    background: baseColors.white,
    foreground: baseColors.gray["100"],
    text: baseColors.black,
    error: {
      light: "#FF1A1A",
      default: "#E00",
      dark: "#C00"
    },
    success: {
      light: "#3291FF",
      default: "#0070F3",
      dark: "#0366D6"
    },
    warning: {
      light: "#F7B955",
      default: "#F5A623",
      dark: "#F49B0B"
    },
    // highlight: {
    //   alert: "#FF0080",
    //   purple: "#F81CE5",
    //   violet: "#7928CA",
    //   cyan: "#79FFE1"
    // },
    buttons: {
      primary: {
        background: baseColors.black,
        text: baseColors.white,
        _hover: {
          background: baseColors.white,
          text: baseColors.black
        }
      },
      secondary: {
        background: baseColors.gray["500"],
        text: baseColors.white,
        _hover: {
          background: baseColors.white,
          text: baseColors.black
        }
      }
    },
    divider: baseColors.gray["200"],
    modes: {
      dark: {
        background: baseColors.black,
        foreground: baseColors.gray["900"],
        text: baseColors.white,
        buttons: {
          primary: {
            background: baseColors.white,
            text: baseColors.black,
            _hover: {
              background: baseColors.black,
              text: baseColors.white
            }
          },
          secondary: {
            background: baseColors.gray["900"],
            text: baseColors.white,
            _hover: {
              background: baseColors.white,
              text: baseColors.black
            }
          }
        },
        divider: baseColors.gray["900"]
      }
    }
  },
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  borderWidths: {
    default: "1px",
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px"
  },
  fonts: {
    sans: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"'
    ].join(", "),
    serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"].join(
      ", "
    ),
    mono: [
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace"
    ].join(", ")
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  },
  fontWeights: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  gradients: {
    cold:
      "135deg, rgb(47, 196, 209) 0%, rgb(79, 84, 241) 28%, rgb(200, 109, 215) 100%"
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    lg: "0.5rem",
    full: "9999px"
  },
  shadows: {
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    none: "none"
  },
  sizes: {
    auto: "auto",
    ...space,
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    screen: "100vw"
  },
  space,
  zIndices: {
    auto: "auto",
    "0": "0",
    "10": "10",
    "20": "20",
    "30": "30",
    "40": "40",
    "50": "50"
  }
};

const components = {
  avatars: {
    sizes: {
      sm: { width: "8", height: "8" },
      md: { width: "16", height: "16" },
      lg: { width: "32", height: "32" }
    }
  },
  badges: {
    kinds: {
      _default: "primary",
      _common: {
        color: "white"
      },
      primary: {
        bg: "black"
      },
      success: {
        bg: "success.default"
      },
      error: {
        bg: "error.default"
      },
      warning: {
        bg: "warning.default"
      }
    }
  },
  buttons: {
    _common: {
      cursor: "pointer"
    },
    kinds: {
      _default: "primary",
      _common: {
        borderWidth: "1px",
        borderStyle: "solid"
      },
      primary: {
        bg: "buttons.primary.background",
        borderColor: "buttons.primary.background",
        color: "buttons.primary.text",
        ":hover": {
          bg: "buttons.primary._hover.background",
          color: "buttons.primary._hover.text"
        }
      },
      secondary: {
        bg: "buttons.secondary.background",
        borderColor: "buttons.secondary.background",
        color: "buttons.secondary.text",
        ":hover": {
          bg: "buttons.secondary._hover.background",
          color: "buttons.secondary._hover.text"
        }
      }
    },
    sizes: {
      sm: {
        py: "1",
        px: "2",
        fontSize: "sm"
      },
      md: {
        py: "3",
        px: "4",
        fontSize: "base"
      },
      lg: {
        py: "4",
        px: "5",
        fontSize: "lg"
      }
    }
  },
  dividers: {
    kinds: {
      _default: "primary",
      primary: {
        p: 0,
        m: 0,
        height: 0,
        border: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
        width: "full"
      }
    }
  },
  forms: {
    checkbox: { ...fieldStyles },
    group: {
      mb: "6"
    },
    input: { ...fieldStyles },
    label: {
      // Raw
      display: "block",
      fontWeight: "bold",
      // Theme
      color: "text",
      fontSize: "sm",
      mb: "2"
    },
    radio: { ...fieldStyles },
    select: { ...fieldStyles },
    textarea: { ...fieldStyles },
    toggleSwitch: {}
  },
  headings: {
    _common: {
      color: "text",
      fontFamily: "sans",
      fontWeight: "extrabold",
      lineHeight: "normal"
    },
    sizes: {
      "2xl": { fontSize: "6xl" },
      xl: { fontSize: "5xl" },
      lg: { fontSize: "4xl" },
      md: { fontSize: "3xl" },
      sm: { fontSize: "2xl" },
      xs: { fontSize: "xl" }
    }
  },
  links: {
    kinds: {
      _default: "primary",
      primary: {
        color: "gray.700",
        fontFamily: "sans",
        fontSize: "base",
        fontWeight: "bold",
        textDecoration: "none",
        ":hover": {
          textDecoration: "underline"
        }
      }
    }
  },
  notifications: {
    kinds: {
      _default: "default",
      _common: {
        borderRadius: "default",
        boxShadow: "md",
        p: "5",
        width: "full"
      },
      default: {
        border: "1px solid",
        bg: "white",
        borderColor: "gray.200",
        color: "black"
      },
      success: {
        bg: "success.default",
        color: "white"
      },
      error: {
        bg: "error.default",
        color: "white"
      },
      warning: {
        bg: "warning.default",
        color: "white"
      }
    }
  }
};

const styles = {
  root: {
    bg: "background",
    boxSizing: "border-box",
    color: "text",
    fontFamily: "sans",
    fontSize: "base",
    fontWeight: "normal",
    lineHeight: "normal",
    m: 0,
    p: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  }
  // pre: {
  //   ...prism
  // }
};

const theme = {
  ...base,
  ...components,
  styles
};

export default theme;
