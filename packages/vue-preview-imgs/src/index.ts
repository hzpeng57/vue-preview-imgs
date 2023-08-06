import { App } from 'vue';
import { setGallery } from './core';
import Gallery from './components/Gallery.vue';
import Item from './components/Item.vue';
export * from './config';

export { Gallery, Item, setGallery };
export default {
  install(app: App) {
    app.config.globalProperties.$setGallery = setGallery;
  },
};
