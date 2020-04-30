// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Generated at 2020-04-30T16:03:02.687Z

import React from "react";
import PropTypes from "prop-types";
import {
  Textarea as TextareaPrimitive,
  TextareaProps as TextareaPrimitiveProps,
} from "cairo-primitives";

export type TextareaProps = TextareaPrimitiveProps & {};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, forwardedRef) => (
    <TextareaPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{ base: {}, variants: {} }}
    />
  )
);

Textarea.defaultProps = {};

Textarea.propTypes = {};
