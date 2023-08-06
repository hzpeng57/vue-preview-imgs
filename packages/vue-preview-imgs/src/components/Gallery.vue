<template>
   <div ref="galleryRef" class="vpis-gallery">
     <template v-if="list">
       <template v-for="(item, index) in list" :key="index">
         <slot name="item" :data="item">
           <Item v-bind="item" />
         </slot>
       </template>
     </template>
     <slot v-else />
   </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ItemOptions } from '../config';
import { setGallery } from '../core';
import Item from './Item.vue';

type Args = Parameters<typeof setGallery>;

const props = defineProps<{
  list?: ItemOptions[];
  options?: Args[0];
  config?: Args[1];
}>()

const galleryRef = ref();

onMounted(() => {
  setGallery({
    gallery: galleryRef.value,
    children: 'a',
    ...props.options,
  }, props.config);
})
</script>
