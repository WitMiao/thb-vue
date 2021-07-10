<template>
  <v-btn
      v-scroll="onScroll"
      v-show="btnShow"
      fab
      dark
      fixed
      bottom
      right
      color="orange"
      @click="toTop"
  >
    <v-icon large>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ToTop',
  data() {
    return {
      btnShow: false
    }
  },
  methods:{
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.btnShow = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
};
</script>

<style></style>
