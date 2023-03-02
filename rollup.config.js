import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss'
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
      {
        file: "dist/index.d.ts",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
      }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      resolve(),
      terser(),
    ],
    external: ['react', 'react-dom', 'prop-types', 'styled-components'],
  },
];
