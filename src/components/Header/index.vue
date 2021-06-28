<template>
  <v-app-bar app color="#2595e7" dark>
    <div class="d-flex justify-space-around">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-10"
          contain
          src="@/assets/img/logo/logo1.png"
          transition="scale-transition"
          width="170"
      />
      <v-toolbar-items>
        <v-btn text v-for="item in barTitle" :key="item.text" :to="item.link">{{ item.text }}</v-btn>
      </v-toolbar-items>
    </div>

    <div class="header-bottom-line"></div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '/',
      isRouter: true,
      selectedItem: 0,
      barTitle: [
        {text: '首页', link: '/'},
        {text: '创作平台', link: '/creation'},
        {text: 'Python编辑器', link: '/pythonide'},
        {text: '作品展示', link: '/works'},
        {text: '视频资源', link: '/lessons'},
        {text: '联系我们', link: '/aboutus'},
      ]
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
