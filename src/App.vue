<template>
  <div id="app">
    <el-container direction="vertical" ref="homepage" :style="{height:$store.state.header.headHeight}">
      <el-header class="header">
        <Header></Header>
      </el-header>
      <router-view></router-view>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      clientHeight: '',
    }
  },
  mounted() {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`;
    //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function() {
      this.$store.commit('CHANGEFIXED',this.clientHeight)
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.header{
  padding: 0;
}
</style>
