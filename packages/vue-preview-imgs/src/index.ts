import Vue, { VueConstructor } from 'vue';
const PhotoSwipe = require('photoswipe');
const PhotoSwipeUIDefault = require('photoswipe/dist/photoswipe-ui-default');
import * as PhotoSwipeUIDefaultType from 'photoswipe/dist/photoswipe-ui-default';
import * as PhotoSwipeType from 'photoswipe';
import 'photoswipe/dist/default-skin/default-skin.css';
import 'photoswipe/dist/photoswipe.css';
import App from './app.vue';

type ImageItem = {
  alt?: string;
  title?: string;
  el?: Element;
} & PhotoSwipeType.Item;

type ShowPhotoOptions = {
  images: Array<ImageItem>;
  usePosition?: boolean;
} & PhotoSwipeUIDefaultType.Options;

let vm;
let gallery: PhotoSwipeType<PhotoSwipeType.Options>;

export const showPhoto = (config: ShowPhotoOptions) => {
  vm = new (Vue.extend(App))({
    data: () => ({
      usePosition: false,
      index: 0,
      ...config,
    }),
    mounted() {
      document.body.appendChild(this.$el);
      this.init();
    },
    beforeDestroy() {
      document.body.removeChild(this.$el);
    },
    methods: {
      init() {
        const pswpElement = document.querySelectorAll('.pswp')[0] as HTMLElement;
        const options: PhotoSwipeUIDefaultType.Options = {
          ...config,
        };
        if (this.usePosition) {
          options.getThumbBoundsFn = (index: number) => {
            const thumbnail = (this.images[index] as ImageItem).el;
            const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            const rect = (thumbnail as Element).getBoundingClientRect();
            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          };
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUIDefault, this.images, options);
        gallery.init();
      },
    },
  });
  vm.$mount();
};

export default {
  install(Vue: VueConstructor) {
    Vue.prototype.$previewImg = showPhoto;
  },
};
