module.exports = {
  base: {
    button: {
      _normal: {
        WebkitAppearance: "none",
        position: "relative",
        display: "inline-flex",
        WebkitBoxAlign: "center",
        alignItems: "center",
        WebkitBoxPack: "center",
        justifyContent: "center",
        textAlign: "center",
        lineHeight: "38px",
        whiteSpace: "nowrap",
        fontWeight: "normal",
        minWidth: "200px",
        height: "40px",
        fontSize: "0.875rem",
        flexShrink: "0",
        userSelect: "none",
        cursor: "pointer",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        textDecoration: "none",
        padding: "0px 25px",
        margin: "0px",
        transition: "all 0.2s ease 0s",
        overflow: "hidden",
        outline: "none",
      },
      _hover: {},
      _focus: {},
      _disabled: {
        cursor: "not-allowed",
      },
      _isWaiting: {
        cursor: "default",
      },
    },
  },
  variants: {
    variant: {
      _default: "default",
      _common: {
        button: {
          _normal: {},
          _hover: {},
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
      default: {
        button: {
          _normal: {
            color: "#fff",
            backgroundColor: "#000",
          },
          _hover: {
            color: "#000",
            backgroundColor: "#fff",
            boxShadow: "#000 0px 0px 0px 1px inset",
          },
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
      secondary: {
        button: {
          _normal: {
            color: "#666",
            backgroundColor: "#fff",
            boxShadow: "#eaeaea 0px 0px 0px 1px inset",
          },
          _hover: {
            color: "#000",
            boxShadow: "#000 0px 0px 0px 1px inset",
          },
          _focus: {},
          _disabled: {
            color: "#888",
            filter: "grayscale(1)",
            bg: "#fafafa",
          },
          _isWaiting: {
            bg: "#fafafa",
          },
        },
      },
      ghost: {
        button: {
          _normal: {
            bg: "white",
            color: "black",
          },
          _hover: {},
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
      success: {
        button: {
          _normal: {
            bg: "success.default",
            color: "white",
          },
          _hover: {
            bg: "white",
            color: "success.default",
            boxShadow: (theme) =>
              `${theme.colors.success.default} 0px 0px 0px 1px inset`,
          },
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
      error: {
        button: {
          _normal: {
            bg: "error.default",
            color: "white",
          },
          _hover: {
            bg: "white",
            color: "error.default",
            boxShadow: (theme) =>
              `${theme.colors.error.default} 0px 0px 0px 1px inset`,
          },
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
      warning: {
        button: {
          _normal: {
            bg: "warning.default",
            color: "white",
          },
          _hover: {
            bg: "white",
            color: "warning.default",
            boxShadow: (theme) =>
              `${theme.colors.warning.default} 0px 0px 0px 1px inset`,
          },
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
    },
    size: {
      _default: "medium",
      _common: {
        button: {
          _normal: {},
          _hover: {},
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
      large: {
        button: {
          _normal: {
            lineHeight: "38px",
            fontWeight: "500",
            minWidth: "200px",
            height: "50px",
            fontSize: "1rem",
            padding: "0px 25px",
          },
          _hover: {},
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
      medium: {
        button: {
          _normal: {},
          _hover: {},
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
      small: {
        button: {
          _normal: {
            minWidth: "100px",
            height: "24px",
            lineHeight: "22px",
            padding: "0px 10px",
          },
          _hover: {},
          _focus: {},
          _disabled: {},
          _isWaiting: {},
        },
      },
    },
  },
};
