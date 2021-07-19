<template>
  <v-app-bar app color="#2595e7" extension-height="auto" class="height-auto">
    <v-app-bar-nav-icon class="d-flex d-lg-none mt-5" @click="navIconClick">
      <v-icon large color="white">mdi-{{ navIcon }}</v-icon>
    </v-app-bar-nav-icon>
    <v-row>
      <v-col class="d-flex justify-space-around">
        <router-link to="/">
          <v-img
            alt="THB Logo"
            class="shrink mr-10 mt-5"
            contain
            src="@/assets/img/logo/logo1.png"
            transition="scale-transition"
            width="150"
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
          color="white"
          class="text-subtitle-1 font-weight-bold mt-5"
          >{{ item.text }}</v-btn
        >
      </v-col>
      <v-col class="d-flex justify-space-around mt-5">
        <v-toolbar-items>
          <User />
          <Login />
        </v-toolbar-items>
      </v-col>
    </v-row>
    <v-col class="d-flex py-1" slot="extension">
      <v-expand-transition>
        <v-card class="mx-auto mt-5" width="100%" tile v-show="navListExpand">
          <v-list-item v-for="(item, i) in barTitle" :key="i" :to="item.link">
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-expand-transition>
    </v-col>
    <div class="header-bottom-line" :style="{ top: headerBottomLineTop }"></div>
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
      navListExpand: false,
      navIcon: 'menu',
    };
  },
  methods: {
    navIconClick() {
      this.navListExpand = !this.navListExpand;
      this.navIcon = this.navIcon === 'menu' ? 'chevron-down' : 'menu';
    },
  },
  computed: {
    headerBottomLineTop() {
      return this.navListExpand ? '678%' : '124%';
    },
  },
};
</script>

<style lang="scss" scoped>
.height-auto {
  height: auto !important;
}
.header-bottom-line {
  position: absolute;
  left: 0;
  background: url(../../assets/img/header/line-2.png) no-repeat scroll center top;
  height: 16px;
  width: 100%;
}
</style>
