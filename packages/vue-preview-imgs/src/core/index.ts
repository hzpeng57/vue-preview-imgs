// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { PhotoSwipeOptions } from 'photoswipe';
import 'photoswipe/style.css';

export const setGallery = (
  options: PhotoSwipeOptions = {},
  config: {
    immediate?: boolean;
    beforeInit?: (lightbox: PhotoSwipeLightbox) => void;
  } = {
    immediate: false,
  },
) => {
  const lightbox = new PhotoSwipeLightbox({
    pswpModule: () => import('photoswipe'),
    ...options,
  });

  const { immediate, beforeInit } = config;

  beforeInit?.(lightbox);
  lightbox.init();

  if (immediate) {
    lightbox.loadAndOpen(
      options?.index ?? 0,
      options?.dataSource ?? {
        gallery: options.gallery,
      },
    );
  }
  return lightbox;
};
