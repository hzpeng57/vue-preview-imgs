import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'VuePreviewImgs',
    },
    rollupOptions: {
      external: [/^photoswipe/, 'vue'],
      output: {
        exports: 'named',
        globals: {
          photoswipe: 'PhotoSwipe',
          'photoswipe/lightbox': 'PhotoSwipeLightbox',
          vue: 'Vue',
        },
      },
    },
  },
});
