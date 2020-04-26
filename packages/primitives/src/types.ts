export interface StyleConfig {
  base: PartStates;
  variants: Variant;
}

interface States {
  _normal?: any;
  _hover?: any;
  _focus?: any;
  _active?: any;
  _disabled?: any;
  _isWaiting?: any;
}

interface PartStates {
  [k: string]: States;
}

interface A {
  [k: string]: PartStates;
}

interface Variant {
  [k: string]: {
    _default: string;
    _common: PartStates;
    [k: string]: any; // Should be PartStates
  };
}
