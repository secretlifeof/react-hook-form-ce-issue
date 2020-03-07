import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
// import { uglify } from 'rollup-plugin-uglify';

// const production = process.env.BUILD === 'production';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'build/app.min.js',
    format: 'iife'
  },
  treeshake: true,
  plugins: [commonjs(), resolve(), typescript()]
}
