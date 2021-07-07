import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App';
import vuetify from './plugins/vuetify';
import VueCoreVideoPlayer from 'vue-core-video-player';

Vue.use(VueCoreVideoPlayer);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  vuetify,
  store,
}).$mount('#app');
