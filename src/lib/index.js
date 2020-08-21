import Vue from 'vue';
import PreviewImgs from './PreviewImgs';
import PhotoSwipe from 'photoswipe/dist/photoswipe';
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';

let vm, gallery;

export function showPhoto(config) {
    vm = new (Vue.extend(PreviewImgs, {}))({
        data: () => (Object.assign({
            share: false,
            fullscreen: false,
            showArrow: false,
            usePosition: false,
            showHideOpacity: false,
            index: 0,
        }, config)),
        mounted() {
            document.body.appendChild(this.$el);
            this.init();
        },
        beforeDestroy() {
            document.body.removeChild(this.$el);
        },
        methods: {
            init() {
                let pswpElement = document.querySelectorAll('.pswp')[0];
                let options = {
                    index: this.index, // 一开始展示第几张图片
                    escKey: true, // esc退出
                    bgOpacity: 0.9, // 背景透明度
                    allowPanToNext: true, // 当前项目缩放时，允许滑动到下一个/上一个项目。
                    loop: true, // 是否可以从最后一张滑动到第一张
                    pinchToClose: false, // 手势缩小关闭
                    closeOnScroll: true, // 滚动页面关闭
                    closeOnVerticalDrag: true, // 垂直拖动未缩放的图片时关闭
                    history: false, // 使用url历史记录
                    fullscreenEl: this.fullscreen, // 显示全屏按钮
                    closeEl: true, // 显示关闭按钮
                    captionEl: true, // 是否显示标题
                    shareEl: this.share, // 显示分析按钮
                    arrowEl: this.showArrow, // 显示左右箭头（移动端都不显示）
                    counterEl: true, // 显示图片数量
                    tapToClose: true, // 点击关闭预览
                    preloaderEl: true,
                    tapToToggleControls: true, // 点击切换显示控制栏
                    clickToCloseNonZoomable: true, // 点击关闭预览（只有图片小于视口大小有效）
                    showHideOpacity: this.showHideOpacity, // 开始和结束时是否使用opacity过渡
                    // 动画开始和结束位置
                    // getThumbBoundsFn: (index) => {
                    //   let thumbnail = this.images[index].el;
                    //   let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                    //   let rect = thumbnail.getBoundingClientRect();
                    //   return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                    // },
                };
                if (this.usePosition) {
                    options.getThumbBoundsFn = (index) => {
                        let thumbnail = this.images[index].el;
                        let pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                        let rect = thumbnail.getBoundingClientRect();
                        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
                    }
                }
                gallery = new PhotoSwipe(pswpElement, PhotoSwipeUIDefault, this.images, options);
                gallery.init();
                // gallery.listen('resize', function() {
                //   gallery.updateSize(true);
                // });
                // gallery.listen('close', function() {
                // });
            },
        },
    });
    vm.$mount();
}

export default {
    install(vue) {
        vue.prototype.$PreviewImg = showPhoto;
        vue.mixin({
            beforeRouteLeave(to, from, next) {
                gallery && gallery.close();
                next();
            },
        });
    },
};
