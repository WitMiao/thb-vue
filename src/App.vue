<template>
  <div id="app">
    <el-container direction="vertical" ref="homepage">
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
      this.changeFixed(this.clientHeight);
    },
  },

  methods: {
    changeFixed(clientHeight) {
      //动态修改样式
      // console.log(clientHeight);
      // console.log(this.$refs.homePage.$el.style.height);
      console.log(this.$refs);
      this.$refs.homePage.$el.style.height = clientHeight - 20 + 'px';
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
