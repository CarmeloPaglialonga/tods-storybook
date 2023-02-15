import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss-modules";
import babel from "rollup-plugin-babel";
import autoprefixer from "autoprefixer";
import { terser } from "rollup-plugin-terser";

import packageFile from "./package.json";

import * as path from "path";
import * as fs from "fs";

// Get all files in a folder
const ls = (...folders) => fs.readdirSync(path.join(__dirname, ...folders));
// This boolean helps us decide what kind of build to generate.
const isProduction = process.env.NODE_ENV === "production";
// These are the libraries that we expect user to have in their application.
//const external = Object.keys(packageFile.peerDependencies);
// These are the extensions we want rollup to consider.

const extensions = [".js", ".jsx"];

const plugins = [
    // This is to resolve "./abc" as "./abc/index.js", just like commonjs.
    resolve({
        extensions,
    }),

    // This will process the css-modules and also write typescript definitions.
    postcss({
        minimize: isProduction,
        writeDefinitions: true,
        plugins: [
            autoprefixer({
                env: isProduction ? "production" : "development",
                add: true,
                remove: true,
            }),
        ],
    }),

    injectStyleFunctions(),

    // Babel is only used to parse typescript and JSX. We aren't using typescript compiler as it has larger output.
    babel({
        extensions,
        exclude: "node_modules/**",
    }),

    // This allows us to bundle other commonjs based dependencies into our output.
    commonjs({
        include: /node_modules/,
    }),

    // Terser is ES2015 syntax aware a minifier.
    isProduction ? terser() : void 0,
];

function getComponents() {
    //const ignoreList = ["index.mdx", "styles"];
    const isRoot = file => file === "index.jsx";
    const isStoriesFile = file => file.includes("stories.jsx");
    const sourceFolder = "src";
    const distFolder = "dist";

    const components = ls("src")
        .filter(e => !isStoriesFile(e))
        .map(file => ({
            input: isRoot(file) ? `${sourceFolder}/${file}` : `${sourceFolder}/${file}/index.jsx`,
            output: isRoot(file) ? `${distFolder}/index.js` : `${distFolder}/${file}/index.js`,
        }));

    return components;
}

const configurations = getComponents().map(({ input, output }) => {
    return {
        input,
        output: {
            file: output,
            format: "cjs",
            compact: isProduction,
        },
        output: {
          file: output,
          format: ".esm",
          compact: isProduction,
      },
        plugins,
        external: ["react", "styled-components"],
    };
});

export default configurations;

/**
 * Simple rollup plugin to inject `_getCss` and `_getId` functions to default export of scss files.
 */
function injectStyleFunctions() {
    /**
     * Creates unique module ids by simplying trimming the user work directory path from the id used by rollup.
     * @param {string} id
     */
    const sanitizeId = id => packageFile.name + id.split(packageFile.name)[1];

    return {
        name: "injectStyleFunctions",
        async transform(code, id) {
            if (id.includes(".scss")) {
                return {
                    id,
                    /**
                     * post css plugin would add a default export like `{ "exportedClassName": "generatedClassName" }`
                     * withStyles based apps rely on default export to also provide `_getCss` and `_getId` functions
                     * This code replaces the default export string to also include these functions
                     **/
                    code: code.replace(
                        "export default {",
                        "export default {".concat(
                            [
                                "_getCss: function() { return css; },",
                                `_getId: function() { return "${sanitizeId(id)}"; },`,
                            ].join("")
                        )
                    ),
                };
            }

            return null;
        },
    };
}