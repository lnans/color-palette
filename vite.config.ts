import preact from '@preact/preset-vite'
import { terser } from 'rollup-plugin-terser'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    minify: 'terser',
    rollupOptions: {
      plugins: [
        terser({
          format: {
            comments: false,
          },

          mangle: {
            keep_classnames: false,
            reserved: [],
          },
        }),
      ],
    },
  },
})
