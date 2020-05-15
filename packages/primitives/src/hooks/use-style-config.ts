import { useThemeUI } from "theme-ui";
// @ts-ignore
import { useResponsiveValue } from "@theme-ui/match-media";
import merge from "deepmerge";
import { StyleConfig } from "../types";

function logError({
  propKey,
  propValue,
  styleConfig,
}: {
  propKey: string;
  propValue: string | boolean | [];
  styleConfig: any;
}) {
  if (styleConfig.variants[propKey].hasOwnProperty(propValue)) return;

  const values = Object.entries(styleConfig.variants[propKey])
    .filter(([key]) => key !== "_default" && key !== "_common")
    .map(([key]) => {
      switch (key) {
        case "true":
          return "`true`";
        case "false":
          return "`false`";
        default:
          return `\`${key}\``;
      }
    })
    .join(", ");

  throw new Error(
    `Variant value \`${propValue}\` does not exist on variant \`${propKey}\`. Values allowed: ${values}`
  );
}

function useVariantsFromProps(props: any, styleConfig: any) {
  let variants: any = {};

  Object.entries(props).forEach(([propKey, propValue]) => {
    if (styleConfig?.variants?.hasOwnProperty(propKey)) {
      let variantValue = propValue as string;
      if (Array.isArray(propValue)) {
        variantValue = useResponsiveValue(propValue);
      }
      logError({ propKey, propValue: variantValue, styleConfig });
      variants[propKey] = variantValue;
    }
  });

  return variants;
}

function getPartStates({
  styleConfig,
  props,
  part,
}: {
  styleConfig: StyleConfig;
  props: any;
  part: string;
}): Record<string, any> {
  const variants = useVariantsFromProps(props, styleConfig);
  const baseStyles = (styleConfig.base && styleConfig.base[part]) || {};
  let allStyles = { ...baseStyles };

  Object.entries(variants).forEach(([variantKey, variantValue]) => {
    const variant = styleConfig.variants[variantKey];
    const { _default, _common, ...variantValues } = variant;
    const defaultVariantValue =
      variant._default || Object.keys(variantValues)[0];
    const commonStyles = variant._common[part] || {};
    const styles =
      variant[(variantValue as string) || defaultVariantValue][part] || {};

    allStyles = merge(allStyles, merge(commonStyles, styles));
  });

  return allStyles;
}

export default function useStyleConfig(
  component: string,
  { styleConfig: localStyleConfig, ...props }: { styleConfig?: any }
) {
  const { theme } = useThemeUI() as any;

  // Merge global style config with local style config
  const styleConfig = merge(
    theme.components[component] || {},
    localStyleConfig || {}
  ) as any;

  return {
    styleConfig,
    getPartStates: (part: string) =>
      getPartStates({ styleConfig, props, part }),
  };
}
