import { preserveShebangs } from "rollup-plugin-preserve-shebangs";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: ["src/index.ts"],
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    preserveShebangs(),
    typescript({
      clean: true,
      typescript: require("typescript"),
    }),
  ],
};
