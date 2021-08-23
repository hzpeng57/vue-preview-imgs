# vue-preview-imgs

> 一个Vue的图片预览插件
>
>A picture preview plugin for the Vue

## install

```
npm install vue-preview-imgs --save
```
or
```
yarn add vue-preview-imgs
```

## example

```
// main.js
import Vue from 'vue'
import VuePreviewImgs from 'vue-preview-imgs'

Vue.use(VuePreviewImgs)
...
```

```
// vue

const options =  {
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
            h: 1200
        }
    ]
}

this.$previewImg(options)
```
## or

```
import { showPhoto } from 'vue-preview-imgs'

showPhoto(options)
```
## options

```
options = {
    images: [], // 要预览图片信息组成的数组，参考上面示例。更多信息参考https://photoswipe.com/
    usePosition: false, // 设置为true时，参数images的每一项都要加上el参数，值为对应图片的DOM元素，开始和结束时从DOM元素的位置开始缩放
}
```

有用的话可以给个 **star** 哦，有问题或者建议欢迎提出！！！
