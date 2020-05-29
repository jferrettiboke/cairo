module.exports = {
  base: {
    link: {
      _normal: {
        textDecoration: "none",
      },
      _hover: {},
      _focus: {},
    },
  },
  variants: {
    variant: {
      _default: "default",
      _common: {
        link: {
          _normal: {},
          _hover: {},
          _focus: {},
        },
      },
      default: {
        link: {
          _normal: {
            color: "inherit",
          },
          _hover: {},
          _focus: {},
        },
      },
      color: {
        link: {
          _normal: {
            color: "#0070f3",
          },
          _hover: {},
          _focus: {},
        },
      },
    },
  },
};
