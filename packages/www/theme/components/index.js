module.exports = {
  Button: require("./Button"),
  Link: require("./Link"),
  Text: {
    base: {
      text: {
        _normal: {},
      },
    },
    variants: {
      variant: {
        _default: "default",
        _common: {
          text: {
            _normal: { fontWeight: "bold" },
          },
        },
        default: {
          text: {
            _normal: {},
          },
        },
        h1: {
          text: {
            _normal: { fontSize: "3em" },
          },
        },
      },
    },
  },
};
