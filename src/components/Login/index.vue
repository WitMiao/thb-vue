<template>
  <v-dialog v-model="mLoginDialog" persistent transition="dialog-top-transition" width="440" v-if="!token">
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex align-center">
        <v-btn text rounded class="text-subtitle-1" v-bind="attrs" v-on="on" color="white">登录</v-btn>
        <div class="d-none d-lg-flex align-center">
          <span class="white--text pt-1">/</span>
        </div>
        <v-btn text rounded class="d-none d-lg-flex text-subtitle-1" @click="firstOpenRegisterDialog" color="white"
          >注册</v-btn
        >
      </div>
    </template>
    <v-card color="#3dceba" class="rounded-lg">
      <Content />
      <v-expand-transition>
        <v-card
          v-if="mRegisterDialog"
          color="#3dceba"
          class="transition-fast-in-fast-out v-card--reveal rounded-lg"
          style="height: 100%;"
        >
          <Content />
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import Content from './content.vue';
export default {
  name: 'Login',
  components: {
    Content,
  },
  computed: {
    ...mapState({
      loginDialog: (state) => state.header.loginDialog,
      registerDialog: (state) => state.header.registerDialog,
      token: (state) => state.user.token,
    }),
    mLoginDialog: {
      set(value) {
        this.$store.commit('SET_LOGIN_DIALOG', value);
      },
      get() {
        return this.loginDialog;
      },
    },
    mRegisterDialog: {
      set(value) {
        this.$store.commit('SET_REGISTER_DIALOG', value);
      },
      get() {
        return this.registerDialog;
      },
    },
  },
  methods: {
    firstOpenRegisterDialog() {
      this.$store.dispatch('firstOpenRegisterDialog');
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
