<template>
  <v-dialog v-model="loginDialog" persistent transition="dialog-top-transition" width="440">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text rounded class="d-none d-lg-flex text-subtitle-1" @click="firstOpenRegisterDialog" color="white">注册</v-btn>
      <div class="d-none d-lg-flex align-center">
        <span class="white--text pt-1">/</span>
      </div>
      <v-btn text rounded class="text-subtitle-1" v-bind="attrs" v-on="on" color="white">登录</v-btn>
    </template>
    <v-card color="#3dceba" class="rounded-lg">
      <Content />
      <v-expand-transition>
        <v-card
          v-if="registerDialog"
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
import Content from './content.vue';
export default {
  name: 'Login',
  components: {
    Content,
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
    registerDialog: {
      set(value) {
        this.$store.commit('SETREGISTERDIALOG', value);
      },
      get() {
        return this.$store.state.header.registerDialog;
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
