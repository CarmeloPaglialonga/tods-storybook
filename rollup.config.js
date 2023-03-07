import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss'
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import styles from 'rollup-plugin-styles';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import stringHash from 'string-hash';
import {camelCase} from 'lodash';
import del from 'rollup-plugin-delete';
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
        del({ targets: 'dist/*' }),
        peerDepsExternal({
          includeDependencies: true,
        }),
        styles({
          mode: ['extract', './styles.css'],
          modules: {
            generateScopedName: (name, filename, css) => {
              if (filename.includes('module')) {
                const hash = stringHash(css).toString(15);
                return `${camelCase(name)}__${hash}`;
              }
  
              return name;
            },
          },
          url: {
            publicPath: './assets/',
          },
        }),
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
