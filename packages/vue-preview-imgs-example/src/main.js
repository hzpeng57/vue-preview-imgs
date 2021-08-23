import Vue from 'vue';
import App from './App.vue';
import preview from 'vue-preview-imgs';

Vue.config.productionTip = false;
Vue.use(preview);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
