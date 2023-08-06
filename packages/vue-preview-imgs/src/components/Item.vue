<template>
  <a
    v-if="href"
    class="vpis-item"
    :href="href"
    :data-pswp-src="src"
    :data-pswp-width="width"
    :data-pswp-height="height"
    :data-cropped="cropped"
    target="_blank"
  >
    <img :src="thumbnail || href || src" alt="" />
  </a>
</template>
<script setup lang="ts">
import { ItemOptions } from '../config';

defineProps<{
  thumbnail: ItemOptions['thumbnail'];
  href: ItemOptions['href'];
  src: ItemOptions['src'];
  width: ItemOptions['width'];
  height: ItemOptions['height'];
  cropped: ItemOptions['cropped'];
}>()
</script>
