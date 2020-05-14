import { useThemeUI } from "theme-ui";
// @ts-ignore
import { useResponsiveValue } from "@theme-ui/match-media";
import merge from "deepmerge";
import getPartStates from "../utils/getPartStates";

function useResponsiveProps(props: any, styleConfig: any) {
  let _props: any = {};

  Object.keys(styleConfig.variants).forEach((key: string) => {
    // @ts-ignore
    if (props.hasOwnProperty(key) && Array.isArray(props[key])) {
      const propValue = useResponsiveValue(props[key]);
      // const index = useBreakpointIndex();
      _props[key] = propValue;
    } else {
      _props[key] = props[key];
    }
  });

  return _props;
}

export default function useStyleConfig(
  component: string,
  { styleConfig: localStyleConfig, ...props }: { styleConfig?: any }
) {
  const { theme } = useThemeUI() as any;

  const styleConfig = merge(
    theme.components[component] || {},
    localStyleConfig || {}
  ) as any;

  const responsiveProps = useResponsiveProps(props, styleConfig);

  return {
    styleConfig,
    getPartStates: (part: string) =>
      getPartStates(styleConfig, responsiveProps, part),
  };
}
