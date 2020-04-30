// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Generated at 2020-04-30T16:03:02.674Z

import React from "react";
import PropTypes from "prop-types";
import {
  Text as TextPrimitive,
  TextProps as TextPrimitiveProps,
} from "cairo-primitives";

export type TextProps = TextPrimitiveProps & {};

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  (props, forwardedRef) => (
    <TextPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{ base: {}, variants: {} }}
    />
  )
);

Text.defaultProps = {};

Text.propTypes = {};
