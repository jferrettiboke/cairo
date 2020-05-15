import React from "react";
import {
  Image as ImagePrimitive,
  ImageProps as ImagePrimitiveProps,
} from "theme-ui";

export type ImageProps = ImagePrimitiveProps & {
  alt: string;
  src: string;
};

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ sx, ...props }, forwardedRef: any) => (
    <ImagePrimitive
      {...props}
      ref={forwardedRef}
      data-part-id="image"
      sx={{
        display: "block",
        ...sx,
      }}
    />
  )
);
