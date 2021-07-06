<template>
  <div class="home-page">
    <v-carousel hide-delimiters show-arrows-on-hover class="home-page-carousel">
      <v-carousel-item
        v-for="(carousel, i) in carouselPics"
        :key="i"
        :src="carousel.src"
        class="home-page-carousel-item"
      >
        <v-container class="home-page-carousel-item-container d-flex flex-column" v-if="carousel.isShowText">
          <div>
            <span class="home-page-carousel-item-container-span h1">{{ carousel.text1 }}</span>
          </div>
          <div>
            <span class="home-page-carousel-item-container-span h2">{{ carousel.text2 }}</span>
          </div>
          <div class="my-2">
            <v-btn color="warning" x-large class="text-h6 font-weight-bold" depressed>
              {{ carousel.btnText }}
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
          src: require('@/assets/img/background/bg1.png'),
          isShowText: true,
          text1: '创作故事，游戏和动画',
          text2: '与世界上的其他人分享',
          btnText: '开始创作',
        },
        {
          src: require('@/assets/img/background/bg2.png'),
          isShowText: false,
          text1: '创作故事，游戏和动画2',
          text2: '与世界上的其他人分享2',
          btnText: '开始创作2',
        },
      ],
    };
  },
  methods: {
    openRegisterDialog() {
      this.$store.dispatch('firstOpenRegisterDialog');
    },
  },
};
</script>

<style lang="scss">
.home-page {
  height: 100vh;
  &-carousel {
    height: 100% !important;
    &-item {
      .v-image {
        height: 100% !important;
      }
      &-container {
        height: 100%;
        place-content: center;
        margin-left: 20vw !important;

        &-span {
          background: #0000002c;
          color: #fff;
          display: inline-block;
          font-family: 'Bubblegum Sans', cursive;
          font-weight: 400;
          padding: 10px 30px;
          &.h1 {
            font-size: 60px;
          }
          &.h2 {
            font-size: 40px;
          }
        }
      }
    }
  }
}
</style>
