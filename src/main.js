import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App';
import vuetify from './plugins/vuetify';
import VueCoreVideoPlayer from 'vue-core-video-player';
import Vuelidate from 'vuelidate';

Vue.use(VueCoreVideoPlayer, {
  lang: 'zh-CN',
});
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  vuetify,
  store,
}).$mount('#app');
