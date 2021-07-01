<template>
  
    <v-dialog v-model="loginDialog" persistent transition="dialog-top-transition" width="320">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text rounded class="text-subtitle-1" v-bind="attrs" v-on="on">登录 / 注册</v-btn>
      </template>
      <v-card color="#3dceba" class="rounded-lg">
        <v-card-title class="pa-0">
          <v-col></v-col>
          <v-col class="d-flex justify-center">
            <v-img alt="THB Logo" class="shrink" contain src="@/assets/img/logo/logo2.png" width="120" />
          </v-col>
          <v-col class="d-flex justify-end align-self-start pa-1">
            <v-btn icon>
              <v-icon x-large color="#cefefb" @click="closeLoginDialog">mdi-close-circle</v-icon>
            </v-btn>
          </v-col>
        </v-card-title>
        <v-text-field
          label="账号"
          placeholder="请输入账号"
          filled
          background-color="white"
          class="rounded ma-0 py-0 px-15 "
        ></v-text-field>
        <v-text-field
          label="密码"
          placeholder="请输入密码(不少于6位)"
          filled
          background-color="white"
          class="rounded ma-0 py-0 px-15"
        ></v-text-field>
        <v-card-actions class="justify-center pb-0">
          <v-btn color="warning" large @click="login">
            <span class="mx-15 text-h6 font-weight-black">立即登录</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="justify-center pa-0 pb-16">
          <span>没有账号？</span>
          <v-btn text @click="isRegister = true">
            免费注册
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <v-card v-if="isRegister" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
            <v-card-text class="pb-0">
              <p class="text-h4 text--primary">
                Origin
              </p>
              <p>
                late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin
                eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
              </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn text color="teal accent-4" @click="isRegister = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-dialog>
  
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isRegister: false,
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
  methods: {
    closeLoginDialog() {
      return this.$store.commit('CLOSELOGINDIALOG');
    },
    login() {
      this.closeLoginDialog();
    },
    register() {
      this.closeLoginDialog();
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
