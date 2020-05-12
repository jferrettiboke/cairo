import merge from "deepmerge";
import { StyleConfig } from "../types";

function getStates(
  styleConfig: StyleConfig,
  variant: string, // size
  value: string, // large
  part: string // button
): object {
  return styleConfig.variants[variant][value][part] || {};
}

export default function getPartStates(
  styleConfig: StyleConfig,
  props: any,
  part: string
) {
  const s = {
    _normal: {},
    _hover: {},
    _focus: {},
    _disabled: {},
    _waiting: {},
  };
  let states = {
    _common: { ...s },
    ...s,
  };

  if (Object.entries(styleConfig.variants || {}).length <= 0) {
    return states;
  }

  // Variants
  Object.keys(styleConfig.variants).forEach((key: string) => {
    let variantStates = {}; // common + default or X
    const variant = styleConfig.variants[key];

    // Common
    if (props.hasOwnProperty(key)) {
      variantStates = merge(variantStates, {
        _common: getStates(styleConfig, key, "_common", part),
      });
    }

    if (props.hasOwnProperty(key)) {
      const value = props[key];
      if (variant.hasOwnProperty(value)) {
        variantStates = merge(
          variantStates,
          getStates(styleConfig, key, value, part)
        );
      } else {
        console.error(`${key}="${value}" does not exist.`);
      }
    } else {
      // Default variant
      variantStates = merge(
        variantStates,
        getStates(styleConfig, key, variant._default, part)
      );
    }

    states = merge(states, variantStates);
  });

  return states;
}
