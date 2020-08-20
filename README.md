# vue-preview-imgs

> 一个Vue的图片预览插件
>
>A picture preview plugin for the Vue

## install

```
npm install vue-preview-imgs --save
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
// template

const options =  {
    share: false,
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

this.$PreviewImg(options)
```
## or

```
import { showPhoto } from 'vue-preview-imgs'

showPhoto(options)
```
## options

```
options = {
    index: 0, // 当前预览图片的序号，默认0
    share: false,   // 是否显示分享按钮
    fullscreen: false,   // 是否显示全屏按钮
    showArrow: false,   // 是否显示左右箭头
    images: [], // 要预览图片信息组成的数组，参考上面示例。更多信息参考https://photoswipe.com/
}
```

有用的话可以给个 **star** 哦，有问题或者建议欢迎提出！！！
