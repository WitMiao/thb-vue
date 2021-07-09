<template>
  <v-app-bar app color="#2595e7" dark>
    <v-row>
      <v-col class="d-flex justify-space-around">
        <router-link to="/">
          <v-img
            alt="THB Logo"
            class="shrink mr-10"
            contain
            src="@/assets/img/logo/logo1.png"
            transition="scale-transition"
            width="170"
            to="/"
          />
        </router-link>
      </v-col>
      <v-col class="d-none d-lg-flex justify-space-around align-center">
        <v-btn
          text
          rounded
          v-for="(item, i) in barTitle"
          :key="i"
          :to="item.link"
          class="text-subtitle-1 font-weight-bold"
          >{{ item.text }}</v-btn
        >
      </v-col>
      <v-col class="d-flex justify-space-around">
        <v-toolbar-items>
          <User />
          <Login />
        </v-toolbar-items>
      </v-col>
    </v-row>

    <div class="header-bottom-line"></div>
  </v-app-bar>
</template>

<script>
import User from '@/components/User';
import Login from '@/components/Login';
export default {
  name: 'Header',
  components: {
    User,
    Login,
  },
  data() {
    return {
      activeIndex: '/',
      isRouter: true,
      selectedItem: 0,
      barTitle: [
        { text: '首页', link: '/' },
        { text: '创作平台', link: '/creation' },
        { text: 'Python编辑器', link: '/pythonide' },
        { text: '作品展示', link: '/works' },
        { text: '视频资源', link: '/lessons' },
        { text: '联系我们', link: '/aboutus' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header-bottom-line {
  position: absolute;
  top: 100%;
  left: 0;
  background: url(../../assets/img/header/line-2.png) no-repeat scroll center top;
  height: 16px;
  width: 100%;
}
</style>
