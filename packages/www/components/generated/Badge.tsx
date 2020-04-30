// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Generated at 2020-04-30T16:03:02.143Z

import React from "react";
import PropTypes from "prop-types";
import {
  Badge as BadgePrimitive,
  BadgeProps as BadgePrimitiveProps,
} from "cairo-primitives";

export type BadgeProps = BadgePrimitiveProps & {};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (props, forwardedRef) => (
    <BadgePrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{ base: {}, variants: {} }}
    />
  )
);

Badge.defaultProps = {};

Badge.propTypes = {};
