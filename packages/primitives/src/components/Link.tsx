import React from "react";
import {
  Link as LinkPrimitive,
  LinkProps as LinkPrimitiveProps,
} from "theme-ui";
import useStyleConfig from "../hooks/use-style-config";

export type LinkProps = LinkPrimitiveProps & {
  styleConfig?: any;
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ sx, ...props }, forwardedRef: any) => {
    const { getPartStates } = useStyleConfig("Link", props);
    const link = getPartStates("link");

    return (
      <LinkPrimitive
        {...props}
        ref={forwardedRef}
        data-part-id="link"
        sx={{
          ...link?._normal,
          ":hover": { ...link?._hover },
          ":focus": { ...link?._focus },
          ...sx,
        }}
      />
    );
  }
);

Link.defaultProps = {
  styleConfig: {},
};
