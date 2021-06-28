<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/img/logo/logo1.png"
        transition="scale-transition"
        width="170"
      />
    </div>
  </v-app-bar>

  <!-- <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/creation">创作平台</el-menu-item>
    <el-menu-item index="/pythonide">Python编辑器</el-menu-item>
    <el-menu-item index="/works">作品展示</el-menu-item>
    <el-menu-item index="/lessons">视频资源</el-menu-item>
    <el-menu-item index="/aboutus">联系我们</el-menu-item> -->
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '/',
      isRouter: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-logo {
  max-width: 170px;
  float: left;
}

.header-nav-bar {
  .el-menu-item {
    font-size: 16px;
    font-weight: bold;
  }
}
.header-bottom-line {
  position: absolute;
  top: 100%;
  left: 0;
  background: url(../../assets/img/header/line-2.png) no-repeat scroll center
    top;
  height: 17px;
  width: 100%;
}
</style>
