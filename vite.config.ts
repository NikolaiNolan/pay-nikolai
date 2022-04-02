import { createHtmlPlugin } from 'vite-plugin-html'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

export default {
  plugins: [
    pluginRewriteAll(),
    createHtmlPlugin(),
  ],
}
