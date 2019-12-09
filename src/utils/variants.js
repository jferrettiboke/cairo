import { useResponsiveValue, useBreakpointIndex } from "@theme-ui/match-media";
import get from "lodash.get";
import theme from "../theme";

export default function variants(...variantBlocks) {
  const variants = useResponsiveValue(variantBlocks);
  let styles = {};
  variants.map(variant => {
    styles = { ...styles, ...get(theme, variant) };
  });
  return styles;
}
