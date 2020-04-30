// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Generated at 2020-04-30T16:03:02.632Z

import React from "react";
import PropTypes from "prop-types";
import {
  Input as InputPrimitive,
  InputProps as InputPrimitiveProps,
} from "cairo-primitives";

export type InputProps = InputPrimitiveProps & {};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => (
    <InputPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{ base: {}, variants: {} }}
    />
  )
);

Input.defaultProps = {};

Input.propTypes = {};
