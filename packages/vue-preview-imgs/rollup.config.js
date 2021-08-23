import vue from 'rollup-plugin-vue';
// import css from 'rollup-plugin-css-only';
import styles from 'rollup-plugin-styles';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

export default {
  input: 'src/index.ts',
  output: {
    format: 'esm',
    file: 'dist/index.esm.js',
    globals: {
      vue: 'Vue',
    },
  },
  context: '',
  external: ['vue'],
  plugins: [
    nodeResolve(),
    // css(),
    styles(),
    vue({
      target: 'browser',
      css: false,
      compileTemplate: true,
    }),
    esbuild({
      target: 'es2015',
    }),
  ],
};
