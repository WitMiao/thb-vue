<template>
  <div>
    <v-card-title class="pa-0">
      <v-col></v-col>
      <v-col class="d-flex justify-center">
        <v-img alt="THB Logo" class="shrink" contain src="@/assets/img/logo/logo2.png" width="120" />
      </v-col>
      <v-col class="d-flex justify-end align-self-start pa-1">
        <v-btn icon>
          <v-icon x-large color="#cefefb" @click="closeAllDialog">mdi-close-circle</v-icon>
        </v-btn>
      </v-col>
    </v-card-title>
    <v-col>
      <v-input class="pb-0 text-h4" color="#cefefb" v-if="!showMod.isLogin">
        {{ showMod.title }}
      </v-input>
    </v-col>

    <v-form>
      <v-text-field
        v-for="(item, i) in showMod.form"
        :key="i"
        :label="item.label"
        :append-icon="item.isText ? '' : item.pwdShow ? 'mdi-eye' : 'mdi-eye-off'"
        :type="item.isText || item.pwdShow ? 'text' : 'password'"
        :placeholder="item.placeholder"
        filled
        background-color="white"
        class="rounded ma-0 py-0 px-15"
        @click:append="item.pwdShow = !item.pwdShow"
      ></v-text-field>
    </v-form>
    <v-card-actions class="justify-center pb-0">
      <v-btn color="warning" large @click="showMod.isLogin ? login() : register()" width="320">
        <span class="text-h6 font-weight-black">{{ showMod.btnStr }}</span>
      </v-btn>
    </v-card-actions>
    <v-card-actions class="justify-center pa-0 pb-16">
      <span>{{ showMod.spanStr }}</span>
      <v-btn text @click="showMod.isLogin ? openRegisterDialog() : closeRegisterDialog()">
        {{ showMod.toggleBtnStr }}
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'LoginContent',
  data() {
    return {
      loginMod: {
        isLogin: true,
        form: [
          { label: '账号', placeholder: '请输入账号', isText: true },
          { label: '密码', placeholder: '请输入密码(不少于6位)', isText: false, pwdShow: false },
        ],
        btnStr: '立即登录',
        spanStr: '没有账号？',
        toggleBtnStr: '免费注册',
      },
      registerMod: {
        isLogin: false,
        title: '注册账号',
        form: [
          { label: '账号', placeholder: '(字母+数字组合，6位含以上)', isText: true },
          { label: '昵称', placeholder: '(给自己创建一个昵称)', isText: true },
          { label: '密码', placeholder: '(6位含以上，不能包含特殊字符)', isText: false, pwdShow: false },
          { label: '确认密码', placeholder: '(再次确认密码)', isText: false, pwdShow: false },
        ],
        btnStr: '立即注册',
        spanStr: '已有账号？',
        toggleBtnStr: '立即登录',
      },
    };
  },
  computed: {
    ...mapState({
      registerDialog: (state) => state.header.registerDialog,
    }),
    showMod() {
      return this.registerDialog ? this.registerMod : this.loginMod;
    },
  },
  methods: {
    closeLoginDialog() {
      this.$store.commit('CLOSELOGINDIALOG');
    },
    closeRegisterDialog() {
      this.$store.commit('CLOSEREGISTERDIALOG');
    },
    openRegisterDialog() {
      this.$store.commit('OPENREGISTERDIALOG');
    },
    closeAllDialog() {
      this.$store.dispatch('closeAllDialog');
    },
    login() {
      this.closeAllDialog();
    },
    register() {
      this.closeRegisterDialog();
    },
  },
};
</script>

<style></style>
