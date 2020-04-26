import { StyleConfig } from "../../../src";

export const Badge: StyleConfig = {
  base: {
    badge: {
      _normal: {
        display: "inline-block",
        verticalAlign: "middle",
        lineHeight: "1",
        cursor: "inherit",
        borderRadius: "16px",
        fontVariant: "tabular-nums",
      },
      _hover: {},
      _focus: {},
    },
  },
  variants: {
    variant: {
      _default: "primary",
      _common: {
        badge: {
          _normal: {},
          _hover: {},
          _focus: {},
        },
      },
      primary: {
        badge: {
          _normal: {
            bg: "black",
          },
          _hover: {},
          _focus: {},
        },
      },
      success: {
        badge: {
          _normal: {
            bg: "success.default",
          },
          _hover: {},
          _focus: {},
        },
      },
      error: {
        badge: {
          _normal: {
            bg: "error.default",
          },
          _hover: {},
          _focus: {},
        },
      },
      warning: {
        badge: {
          _normal: {
            bg: "warning.default",
          },
          _hover: {},
          _focus: {},
        },
      },
    },
    size: {
      _default: "normal",
      _common: {
        badge: {
          _normal: {
            color: "#fff",
          },
          _hover: {},
          _focus: {},
        },
      },
      small: {
        badge: {
          _normal: {
            fontSize: "12px",
            padding: "3px 7px",
          },
          _hover: {},
          _focus: {},
        },
      },
      normal: {
        badge: {
          _normal: {
            fontSize: "14px",
            padding: "2px 7px",
          },
          _hover: {},
          _focus: {},
        },
      },
      large: {
        badge: {
          _normal: {
            fontSize: "16px",
            padding: "3px 10px",
          },
          _hover: {},
          _focus: {},
        },
      },
    },
    uppercase: {
      _default: "normal",
      _common: {
        badge: {
          _normal: {},
          _hover: {},
          _focus: {},
        },
      },
      normal: {
        badge: {
          _normal: {},
          _hover: {},
          _focus: {},
        },
      },
      true: {
        badge: {
          _normal: {
            textTransform: "uppercase",
          },
          _hover: {},
          _focus: {},
        },
      },
    },
  },
};
