import PropTypes from "prop-types";

export const ButtonDefaultProps = {
  size: "medium",
  variant: "default",
};

export const ButtonPropTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  variant: PropTypes.oneOf([
    "default",
    "secondary",
    "ghost",
    "success",
    "error",
    "warning",
  ]),
};

export type ButtonProps = {
  size?: "large" | "medium" | "small";
  variant?: "default" | "secondary" | "ghost" | "success" | "error" | "warning";
};

export const LinkDefaultProps = {
  variant: "default",
};

export const LinkPropTypes = {
  variant: PropTypes.oneOf(["default", "color"]),
};

export type LinkProps = {
  variant?: "default" | "color";
};
