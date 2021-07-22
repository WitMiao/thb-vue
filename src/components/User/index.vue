<template>
  <v-menu bottom min-width="200px" rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon x-large  class="d-none d-lg-flex" v-if="!isUserLogin" @click="openLoginDialog()">
        <v-avatar color="brown" size="48">
          <img :src="headImg" alt="congcong" />
        </v-avatar>
      </v-btn>
      <v-btn icon x-large v-on="on" class="d-none d-lg-flex" v-else>
        <v-avatar color="brown" size="48">
          <img :src="headImg" alt="congcong" />
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <img :src="headImg" alt="congcong" />
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
          <v-btn depressed rounded text @click="toLogout()">
            退出登录
          </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>

<script>
import { mapState } from 'vuex';
import { logout } from '@/api';
export default {
  name: 'User',
  data() {
    return {
      headImg:require('@/assets/img/user/person-icon.png')
    }
  },
  computed: {
    ...mapState({
      isUserLogin: (state) => state.header.isUserLogin,
    }),
  },
  methods: {
    openLoginDialog() {
      this.$store.commit('OPENLOGINDIALOG');
    },
    async toLogout() {
      await logout();
      this.$store.commit('USERLOGOUT');
    },
  },
};
</script>

<style></style>
