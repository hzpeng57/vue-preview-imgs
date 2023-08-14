<script setup lang="ts">
import { setGallery, Gallery, ItemOptions } from "vue-preview-imgs";

const images = [
  {
    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
    alt: 'picture2',
    w: 1024,
    h: 683,
  },
  {
    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
    msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
    alt: 'picture1',
    w: 1023,
    h: 683,
  },
];

const lightbox = setGallery({
  dataSource: images,
}, {
  immediate: false,
  beforeInit(lightbox) {
    lightbox.addFilter('thumbEl', (thumbEl, data, index) => {
      const el = document.querySelectorAll('.open-btn')[index];
      if (el) {
        return el;
      }
      return thumbEl;
    });
  }
})

const handleOpen = (index: number) => {
  lightbox.loadAndOpen(index);
};

const list:ItemOptions[] = [
  {
    href: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
    thumbnail: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
    width: 1024,
    height: 683,
    cropped: true,
  },
  {
    href: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
    thumbnail: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
    width: 1023,
    height: 683,
  }
]
</script>

<template>
  <h3>Open with setGallery method</h3>
  <button class="open-btn" @click="handleOpen(0)">open first</button>
  <button class="open-btn" @click="handleOpen(1)">open second</button>

  <h3>Open with vue component</h3>
  <div class="gallery-container">
    <Gallery :list="list" :config="{immediate: false}" />
  </div>
</template>

<style>
.open-btn + .open-btn {
  margin-left: 20px;
}
.gallery-container {
  padding: 20px 0;
  height: 100px;
}
.vpis-gallery {
  display: flex;
}
.vpis-item img {
  width: 180px;
  margin-right: 10px;
}
</style>
