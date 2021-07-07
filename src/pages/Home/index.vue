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
          <div class="my-1">
            <span class="home-page-carousel-item-container-span h1">{{ carousel.text1 }}</span>
          </div>
          <div>
            <span class="home-page-carousel-item-container-span h2">{{ carousel.text2 }}</span>
          </div>
          <div class="mt-10">
            <v-btn color="warning" x-large class="text-h6 font-weight-bold" depressed>
              {{ carousel.btnText }}
            </v-btn>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <div class="miao-container">
      <div class="pt-16 d-flex flex-column align-center">
        <span class="home-page-title">欢迎来到特慧编</span>
        <v-img class="my-5" height="13" width="293" src="@/assets/img/home/title-line.png"></v-img>
        <span class="home-page-text"
          >特慧编俱乐部更注重引导孩子主动思考， 不仅要教会孩子编程知识，还要教会孩子如何竞争与合作。</span
        >
      </div>
      <v-row class="align-center pt-12">
        <v-col>
          <div class="home-page-title2">
            <span>欢迎</span>
            <span class="orange--text text--lighten-1">加入</span>
            <span class="yellow--text text--darken-1">我们</span>
            <span>~</span>
          </div>
          <div>
            <p class="home-page-p">
              我们的教师来自于一线IT企业，不仅拥有多年IT行业经验，了解行业发展现状，
              有的还拥有多年海外工作经验，可以更好地带领学员开阔视野，掌握真知。
            </p>
          </div>
          <div class="mt-10">
            <v-btn color="warning" x-large class="text-h6 font-weight-bold" depressed>
              联系我们
            </v-btn>
          </div>
        </v-col>
        <v-col>
          <v-img src="@/assets/img/home/video-bg.png" width="514" height="464" class="align-center text-align-center">
            <v-dialog v-model="videoDialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="white" fab v-bind="attrs" v-on="on">
                  <v-icon color="orange" x-large>mdi-play</v-icon>
                </v-btn>
              </template>
              <v-card>
                <vue-core-video-player :src="videoSrc"></vue-core-video-player>
              </v-card>
            </v-dialog>
          </v-img>
        </v-col>
      </v-row>
    </div>
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
      videoDialog: false,
      videoSrc:require('@/assets/video/v1.mp4')
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
  &-title {
    font-size: 48px;
    @extend .font-lobster-two;
  }
  &-title2 {
    font-size: 36px;
    @extend .font-lobster-two;
  }
  &-text {
    color: #666666;
    font-size: 16px;
    font-weight: 300;
  }
  &-p {
    padding-right: 24%;
  }
  &-carousel {
    height: 100vh !important;
    &-item {
      .v-image {
        height: 100% !important;
      }
      &-container {
        height: 100%;
        place-content: center;
        margin-left: 20vw !important;

        &-span {
          @extend .font-bubblegum-sans;
          background: #0000002c;
          color: #fff;
          display: inline-block;
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
