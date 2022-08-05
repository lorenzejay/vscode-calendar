import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import css from "rollup-plugin-css-only";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "./src/webview/sidebar.ts",
  output: {
    format: "iife",
    sourcemap: true,
    name: "app",
    file: "dist/webview/sidebar.js",
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      //   customElement: true,
      // tag: null,
      // css: (css) => {
      //   css.write("sidebar.css");
      // },
    }),
    css({ output: "sidebar.css" }),

    resolve({ browser: true, dedupe: ["svelte"] }),
    commonjs(),
    typescript({
      tsconfig: "./src/webview/tsconfig.json",
      sourceMap: !production,
      inlineSources: !production,
    }),
    image(),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
