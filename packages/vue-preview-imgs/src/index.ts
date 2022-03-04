import { App, createApp, defineComponent, h, onMounted, onUnmounted, reactive } from 'vue';
import PhotoSwipe, { Options, Item } from 'photoswipe';
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import { Options as UIOptions } from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/default-skin/default-skin.css';
import 'photoswipe/dist/photoswipe.css';
import Comp from './app.vue';

type ImageItem = {
  alt?: string;
  title?: string;
  el?: Element;
} & Item;

type ShowPhotoOptions = {
  images: Array<ImageItem>;
  usePosition?: boolean;
} & UIOptions;

let gallery: PhotoSwipe<Options>;

export const showPhoto = (config: ShowPhotoOptions) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const vm = createApp(
    defineComponent({
      setup() {
        const compOptions = reactive({
          usePosition: false,
          index: 0,
          ...config,
        });
        const init = () => {
          const pswpElement = document.querySelectorAll('.pswp')[0] as HTMLElement;
          const options: UIOptions = {
            ...config,
          };
          if (compOptions.usePosition) {
            options.getThumbBoundsFn = (index: number) => {
              const thumbnail = (compOptions.images[index] as ImageItem).el;
              const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
              const rect = (thumbnail as Element).getBoundingClientRect();
              return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            };
          }
          gallery = new PhotoSwipe(pswpElement, PhotoSwipeUIDefault, compOptions.images, options);
          gallery.init();
          gallery.listen('close', () => {
            setTimeout(() => {
              // gallery.destroy();
              vm.unmount();
              document.body.removeChild(container);
            }, 500);
          });
        };
        onMounted(() => {
          init();
        });
        onUnmounted(() => {
          document.body.removeChild(container);
        });
        return {
          ...compOptions,
        };
      },
      render() {
        return h(Comp);
      },
    }),
  );
  vm.mount(container);
};

export default {
  install(app: App) {
    app.config.globalProperties.$previewImg = showPhoto;
  },
};
