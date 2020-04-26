import React from "react";
import {
  Link as LinkPrimitive,
  LinkProps as LinkPrimitiveProps,
} from "cairo-primitives";
import {
  LinkDefaultProps,
  LinkPropTypes,
  LinkProps as LinkGeneratedProps,
} from "./types";

export type LinkProps = LinkPrimitiveProps & LinkGeneratedProps;

export const Link = React.forwardRef<HTMLLinkElement, LinkProps>(
  (props, forwardedRef) => (
    <LinkPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{
        base: {
          link: { _normal: { textDecoration: "none" }, _hover: {}, _focus: {} },
        },
        variants: {
          variant: {
            _default: "default",
            _common: { link: { _normal: {}, _hover: {}, _focus: {} } },
            default: {
              link: { _normal: { color: "inherit" }, _hover: {}, _focus: {} },
            },
            color: {
              link: { _normal: { color: "#0070f3" }, _hover: {}, _focus: {} },
            },
          },
        },
      }}
    />
  )
);

Link.defaultProps = LinkDefaultProps;

Link.propTypes = LinkPropTypes;
