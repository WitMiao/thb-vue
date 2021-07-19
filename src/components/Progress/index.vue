<template>
  <v-progress-linear class="miao-progress-linear" indeterminate color="yellow darken-2" top :active="progressLinearActive"></v-progress-linear>
</template>

<script>
export default {
  name: 'Progress',
  computed:{
      progressLinearActive(){
          return this.$store.state.header.isLoading;
      }
  }
};
</script>

<style lang="scss" scoped>
.miao-progress-linear{
    position: fixed;
    z-index: 100;
}
</style>
