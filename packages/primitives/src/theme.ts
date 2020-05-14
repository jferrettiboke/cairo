const theme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    gray100: "#F7FAFC",
    gray200: "#EDF2F7",
    gray300: "#E2E8F0",
    gray400: "#CBD5E0",
    gray500: "#A0AEC0",
    gray600: "#718096",
    gray700: "#4A5568",
    gray800: "#2D3748",
    gray900: "#1A202C",
    blue: "#3182CE",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
};

export default {
  styles: {
    root: {
      backgroundColor: theme.colors.white,
      color: theme.colors.black,
      fontFamily:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      lineHeight: "1",
      fontSize: theme.fontSizes[2],
      fontWeight: "400",
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
  },
  components: {
    Badge: {
      base: {
        badge: {
          _normal: {
            backgroundColor: theme.colors.gray200,
            borderRadius: "9999px",
            color: theme.colors.black,
            p: "2px 8px",
            textTransform: "uppercase",
          },
        },
      },
    },
    Button: {
      base: {
        button: {
          _normal: {
            backgroundColor: theme.colors.gray200,
            borderRadius: "5px",
            color: theme.colors.black,
            p: "10px 20px",
          },
          _hover: {
            backgroundColor: theme.colors.gray100,
          },
          _focus: {
            boxShadow: `${theme.colors.blue} 0px 0px 0px 1px inset`,
          },
          _disabled: {},
          _waiting: {},
        },
      },
    },
    Input: {
      base: {
        input: {
          _normal: {
            border: "1px solid",
            borderColor: theme.colors.gray300,
            borderRadius: "3px",
            p: "10px",
          },
          _hover: {},
          _focus: {
            borderColor: theme.colors.black,
          },
          _disabled: {
            bg: theme.colors.gray100,
          },
        },
      },
    },
    Link: {
      base: {
        link: {
          _normal: {
            color: theme.colors.black,
            textDecoration: "underline",
          },
          _hover: {
            textDecoration: "none",
          },
          _focus: {},
        },
      },
    },
    Select: {
      base: {
        select: {
          _normal: {
            border: "1px solid",
            borderColor: theme.colors.gray300,
            borderRadius: "3px",
            p: "10px",
          },
          _hover: {},
          _focus: {
            borderColor: theme.colors.black,
          },
          _disabled: {
            bg: theme.colors.gray100,
          },
        },
      },
    },
    Textarea: {
      base: {
        textarea: {
          _normal: {
            border: "1px solid",
            borderColor: theme.colors.gray300,
            borderRadius: "3px",
            p: "10px",
          },
          _hover: {},
          _focus: {
            borderColor: theme.colors.black,
          },
          _disabled: {
            bg: theme.colors.gray100,
          },
        },
      },
    },
  },
};
