import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
//import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';


const packageJson = require("./package.json");

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: './src/index.js',
    output: [
       {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
     /* {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      }, */
    ], 
    plugins: [
      replace({
        preventAssignment: true,
		    'process.browser': true,
        "process.env.NODE_ENV": JSON.stringify("development")
      }),
       postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env','@babel/preset-react']
      }),
      //external(),
      resolve(),
      commonjs(),
      terser(),
    ],
   external: Object.keys(packageJson.peerDependencies),
  }
];