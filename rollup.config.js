// const path = require('path')
import path from 'path';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: path.resolve('/Users/yu/WeChatProjects/minicode-1/utils/bundle.cjs.js'),
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs({
      exclude: 'node_modules'
    }),
    // alias({
    //   entries: {
    //     '@': path.resolve(__dirname, 'src')
    //   }
    // })
  ]
};
