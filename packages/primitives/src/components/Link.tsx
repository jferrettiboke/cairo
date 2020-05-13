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
  ({ children, sx, ...props }, forwardedRef: any) => {
    const { styleConfig, getPartStates } = useStyleConfig("Link", props);
    const link = getPartStates("link");

    return (
      <LinkPrimitive
        {...props}
        ref={forwardedRef}
        data-part-id="link"
        sx={{
          ...styleConfig?.base?.link?._normal,
          ...link?._common?._normal,
          ...link?._normal,
          ":hover": {
            ...styleConfig?.base?.link?._hover,
            ...link?._common?._hover,
            ...link?._hover,
          },
          ":focus": {
            ...styleConfig?.base?.link?._focus,
            ...link?._common?._focus,
            ...link?._focus,
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </LinkPrimitive>
    );
  }
);

Link.defaultProps = {
  styleConfig: {},
};
