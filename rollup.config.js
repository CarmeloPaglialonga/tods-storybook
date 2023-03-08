import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2"
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
//import scss from "rollup-plugin-scss";
const packageJson = require('./package.json');
//const path = require('path')


export default [
  {
    input: "./src/index.js",
//    preserveModules: true,
  /*  output: [ {
 
         dir: 'dist',
        format: 'es',
        preserveModulesRoot: './src',
        preserveModules: true,
      },
    ], */
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
       file: packageJson.module,
       format: 'esm',
       sourcemap: true,
     },
     {
      dir: 'dist',
      format: 'es',
      preserveModules: true,
    },
  ],
    plugins: [
        del({ targets: 'dist/*' }),
        peerDepsExternal({
          includeDependencies: true,
        }),
       /*  styles({
          mode: ['extract', 'dist/styles.css'],
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
        }), */
      typescript({
        typescript: require("typescript"),
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: 'bundled',
      }),
      resolve(),
      postcss({
        extract: false,
        modules: true,
        use: ['sass']
     }),
      commonjs(),
      terser(),
    ],
    external: Object.keys(packageJson.peerDependencies),
  },
];
