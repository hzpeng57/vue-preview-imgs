# vue-preview-imgs

## Photoswipe for vue3 / vue 2.7

[example](https://github.com/hzpeng57/vue-preview-imgs/tree/master/packages/example)

[live code](https://stackblitz.com/edit/vue-preview-imgs-example)

## Install

```
pnpm add vue-preview-imgs
```

## Usage

script:
```ts 
import { Gallery } from "vue-preview-imgs";

const list = [
  {
    href: 'xxx',
    thumbnail: 'xxx',
    width: 900,
    height: 1200,
    cropped: true,
  },
  ...
]
```

template:
```html
<Gallery :list="list" />
```

You can use `slot` to customize the display of each picture.

You also can use `setGallery` to show the picture without `Gallery` component.

```ts
import { setGallery } from "vue-preview-imgs";

const images = [
  {
    src: 'xxx',
    msrc: 'xxx',
    w: 900,
    h: 1200,
  },
  ...
];

const lightbox = setGallery({
  dataSource: images,
});

lightbox.loadAndOpen(0);
```

## API

### `setGallery`

This method is used to create a PhotoSwipeLightbox instance.

`setGallery(options, config)`

* options

The options of the PhotoSwipeLightbox instance. [detail](https://photoswipe.com/options/)

* config

```ts
{
  immediate?: boolean; // Whether to load the picture immediately after the instance is created
  beforeInit?: (lightbox: PhotoSwipeLightbox) => void; // Called before the instance is initialized. You can call `addFilter` `on`.. in this function
}
```

### `Gallery` component

Is the Container of the picture preview.

```html
<Gallery :list="list" :options=":options" :config="config" />
```

* list

```ts
const list: {
  thumbnail: string;
  href?: string;
  src?: string; // data-pswp-src
  width: number; // data-pswp-width
  height: number; // data-pswp-height
  cropped?: boolean; // data-pswp-cropped
}[]
```

* options

Is same as `setGallery` options

* config

Is same as `setGallery` config

### `Item` component

It's should be used in `Gallery` component.

```html
<Gallery :list="list">
    <template #item="{ data }">
        <Item v-bind="data"/>
    </template>
</Gallery>
```
or
```html
<Gallery>
    <Item v-for="item in list" v-bind="item" />
</Gallery>
```
