import { createHtmlPlugin } from 'vite-plugin-html'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

export default {
  plugins: [
    pluginRewriteAll(),
    createHtmlPlugin({
      pages: [
        // {
        //   entry: 'src/main.ts',
        //   filename: 'index.html',
        //   template: 'dist/index.html'
        // },
        // {
        //   entry: 'src/main.ts',
        //   filename: 'index.html',
        //   template: 'functions/index.html'
        // }
      ]
    }),
  ],
}
