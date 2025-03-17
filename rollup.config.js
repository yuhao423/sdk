import path from 'path';
import alias from '@rollup/plugin-alias';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: [
    alias({
      entries: {
        '@': path.resolve(__dirname, 'src')
      }
    })
  ]
};
