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
      <v-col class="d-flex justify-space-around align-center">
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
          <v-dialog v-model="loginDialog" persistent transition="dialog-top-transition" width="320">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text rounded class="text-subtitle-1" v-bind="attrs" v-on="on">登录 / 注册</v-btn>
            </template>
            <Login />
          </v-dialog>
          <v-menu bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon x-large v-on="on">
                <v-avatar color="brown" size="48">
                  <img src="@/assets/img/user/person-icon.png" alt="congcong" />
                </v-avatar>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-avatar color="brown">
                    <img src="@/assets/img/user/person-icon.png" alt="congcong" />
                  </v-avatar>
                  <h3>asd</h3>
                  <p class="text-caption mt-1">
                    ert
                  </p>
                  <v-divider class="my-3"></v-divider>
                  <div class="flex-column">
                    <v-btn depressed rounded text>
                      我的作品
                    </v-btn>
                    <v-btn depressed rounded text>
                      个人主页
                    </v-btn>
                    <v-btn depressed rounded text>
                      账号设置
                    </v-btn>
                  </div>
                  <v-divider class="my-3"></v-divider>
                  <v-btn depressed rounded text>
                    退出登录
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </v-toolbar-items>
      </v-col>
    </v-row>

    <div class="header-bottom-line"></div>
  </v-app-bar>
</template>

<script>
import Login from '@/components/Login';
export default {
  name: 'Header',
  components: {
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
  computed: {
    loginDialog: {
      set(value) {
        this.$store.commit('SETLOGINDIALOG', value);
      },
      get() {
        return this.$store.state.header.loginDialog;
      },
    },
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
