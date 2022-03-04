# vue-preview-imgs

一个 Vue 的图片预览插件

A picture preview plugin for the Vue

## install

```shell
npm install ---save vue-preview-imgs
npm install --save vue-preview-imgs ^0.2.2 # vue2
```

## example

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import preview from 'vue-preview-imgs';

const app = createApp(App);
app.use(preview);
app.mount('#app');
```

```vue
<script setup>
import { getCurrentInstance } from 'vue';

const vm = getCurrentInstance().proxy;

const options = {
  images: [
    {
      src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
      msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
      alt: 'picture1',
      title: 'Image Caption 1',
      w: 600,
      h: 400,
    },
    {
      src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
      msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
      alt: 'picture2',
      title: 'Image Caption 2',
      w: 900,
      h: 1200,
    },
  ],
};
const handleClick = () => {
  vm.$previewImg(options);
};
</script>
```
## or

```js
import { showPhoto } from 'vue-preview-imgs'

showPhoto(options)
```
## options

```js
options = {
    images: [], // 要预览图片信息组成的数组，参考上面示例。更多信息参考https://photoswipe.com/
    usePosition: false, // 设置为true时，参数images的每一项都要加上el参数，值为对应图片的DOM元素，开始和结束时从DOM元素的位置开始缩放
}
```

[使用示例（example）](https://github.com/hzpeng57/vue-preview-imgs/tree/master/packages/example)
