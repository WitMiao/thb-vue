<template>
  <div>
    <v-carousel hide-delimiters show-arrows-on-hover>
      <v-carousel-item v-for="(pic, i) in carouselPics" :key="i" :src="pic.src">
        <v-container>
          123
          <div class="my-2">
            <v-btn
              color="warning"
            >
              开始创作
            </v-btn>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      carouselPics: [
        {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        { src: '@/assets/img/background/bg1.png' },
        { src: '@/assets/img/background/bg2.png' },
      ],
    };
  },
  methods: {
    testLogin() {
      this.$store.commit('OPENLOGINDIALOG');
      this.$store.commit('OPENREGISTERDIALOG');
    },
  },
};
</script>

<style></style>
