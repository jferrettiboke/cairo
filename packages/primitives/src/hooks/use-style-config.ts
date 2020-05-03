import { useThemeUI } from "theme-ui";
import merge from "deepmerge";
import getPartStates from "../utils/getPartStates";

export default function useStyleConfig(
  component: string,
  { styleConfig: localStyleConfig, ...props }: { styleConfig?: any }
) {
  const { theme } = useThemeUI() as any;
  const styleConfig = merge(
    theme.components[component] || {},
    localStyleConfig || {}
  ) as any;

  return {
    styleConfig,
    getPartStates: (part: string) => getPartStates(styleConfig, props, part),
  };
}
