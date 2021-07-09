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
          <v-lazy
            v-model="isActive[0]"
            :options="{
              threshold: 0.5,
            }"
            transition="fab-transition"
          >
            <div>
              <div class="my-1">
                <span class="home-page-carousel-item-container-span h1">{{ carousel.text1 }}</span>
              </div>
              <span class="home-page-carousel-item-container-span h2">{{ carousel.text2 }}</span>
            </div>
          </v-lazy>
          <v-lazy
            v-model="isActive[0]"
            :options="{
              threshold: 0.5,
            }"
            transition="fade-transition"
          >
            <div class="mt-10">
              <v-btn color="warning" x-large class="text-h6 font-weight-bold" depressed>
                {{ carousel.btnText }}
              </v-btn>
            </div>
          </v-lazy>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <div class="home-page-bg bg1">
      <div class="miao-container">
        <div class="pt-16 d-flex flex-column align-center">
          <span class="home-page-title">欢迎来到特慧编</span>
          <v-img class="my-5" max-height="13" max-width="293" src="@/assets/img/home/title-line.png"></v-img>
          <span class="home-page-text"
            >特慧编俱乐部更注重引导孩子主动思考， 不仅要教会孩子编程知识，还要教会孩子如何竞争与合作。</span
          >
        </div>
        <v-row class="align-center pt-12">
          <v-col>
            <v-lazy
              v-model="isActive[1]"
              :options="{
                threshold: 0.5,
              }"
              transition="fab-transition"
            >
              <div class="home-page-title2">
                <span>欢迎</span>
                <span class="orange--text text--lighten-1">加入</span>
                <span class="yellow--text text--darken-1">我们</span>
                <span>~</span>
              </div>
            </v-lazy>
            <v-lazy
              v-model="isActive[1]"
              :options="{
                threshold: 0.5,
              }"
              transition="fade-transition"
            >
              <div>
                <p class="home-page-p">
                  我们的教师来自于一线IT企业，不仅拥有多年IT行业经验，了解行业发展现状，
                  有的还拥有多年海外工作经验，可以更好地带领学员开阔视野，掌握真知。
                </p>

                <div class="mt-10">
                  <v-btn color="warning" x-large class="text-h6 font-weight-bold" depressed>
                    联系我们
                  </v-btn>
                </div>
              </div>
            </v-lazy>
          </v-col>
          <v-col>
            <v-lazy
              v-model="isActive[2]"
              :options="{
                threshold: 0.5,
              }"
              transition="fab-transition"
            >
              <v-img
                src="@/assets/img/home/video-bg.png"
                max-width="514"
                max-height="464"
                class="d-flex align-center text-center"
              >
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
            </v-lazy>
          </v-col>
        </v-row>
      </div>
    </div>

    <v-parallax src="@/assets/img/background/bg2.png" height="300">
      <div class="miao-container d-flex justify-space-between flex-column flex-md-row align-center">
        <v-lazy
          v-model="isActive[3]"
          :options="{
            threshold: 0.5,
          }"
          transition="fab-transition"
        >
          <div class="d-flex flex-column">
            <span class="text-h4 text-md-h3 white--text">如何让您的孩子快速上手少儿编程？</span>
            <span class="font-weight-bold white--text">特慧编，让您的孩子先人一步，引领未来</span>
          </div>
        </v-lazy>
        <v-lazy
          v-model="isActive[3]"
          :options="{
            threshold: 0.5,
          }"
          transition="fade-transition"
        >
          <div>
            <v-btn color="white" x-large class="text-h6 font-weight-bold" depressed>
              联系我们
            </v-btn>
          </div>
        </v-lazy>
      </div>
    </v-parallax>
    <div class="miao-container">
      <div class="pt-16 d-flex flex-column align-center">
        <span class="home-page-title">作品展示</span>
        <v-img class="my-5" max-height="13" max-width="293" src="@/assets/img/home/title-line.png"></v-img>
        <span class="home-page-text">这里是特慧编老师和学生创作的优秀作品~</span>
      </div>
    </div>
    <v-sheet class="mx-auto mt-10" max-width="1300">
      <v-slide-group v-model="sheet" class="pa-4" center-active show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card :color="active ? 'primary' : 'grey lighten-1'" class="ma-4" height="270" width="360" @click="toggle">
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <div class="home-page-bg bg3 mt-12">
      <v-carousel cycle hide-delimiters :show-arrows="false" class="d-flex justify-center">
        <v-carousel-item
          v-for="(comment, i) in thComment"
          :key="i"
          :src="comment.src"
          class=""
          max-width="636"
          max-height="437"
        >
          <v-container
            class="d-flex flex-column justify-center align-center home-page-comment"
            v-if="comment.isShowText"
            px-12
          >
              <div class="my-1">
                <span class="text-h5 white--text">{{ comment.text1 }}</span>
              </div>
              <span class="white--text font-weight-bold">{{ comment.text2 }}</span>
              <div class="my-1">
                <span class="white--text">{{ comment.text3 }}</span>
              </div>
          </v-container>
        </v-carousel-item>
      </v-carousel>
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
          src: require('@/assets/img/carousel/c1.png'),
          isShowText: true,
          text1: '创作故事，游戏和动画',
          text2: '与世界上的其他人分享',
          btnText: '开始创作',
        },
        {
          src: require('@/assets/img/carousel/c2.png'),
          isShowText: false,
          text1: '创作故事，游戏和动画2',
          text2: '与世界上的其他人分享2',
          btnText: '开始创作2',
        },
      ],
      thComment: [
        {
          src: require('@/assets/img/carousel/c0.png'),
          isShowText: true,
          text1:
            '我们为学员提供充足的时间发表自己创作的作品，学习编程知识的同时， 锻炼好自己的口才，为日后将要面对的激烈竞争，储备足够的实力。',
          text2: 'Kohinur miao',
          text3: '特慧编助教',
        },
        {
          src: require('@/assets/img/carousel/c0.png'),
          isShowText: true,
          text1:
            '我们的教师来自于一线IT企业，不仅拥有多年IT行业经验，了解行业发展现状，有的还拥有多年海外工作经验，可以更好地带领学员开阔视野，掌握真知。',
          text2: 'Najnin miao',
          text3: '特慧编CEO',
        },
        {
          src: require('@/assets/img/carousel/c0.png'),
          isShowText: true,
          text1:
            '信息技术日新月异，人工智能、大数据、物联网、自动驾驶，这些新兴领域 无一不对未来的人才提出了更高的要求。而且随着技术的不断成熟，机器人、自动算法逐步取代人力已经成为不可逆转的趋势。',
          text2: 'Lora miao',
          text3: '特慧编讲师',
        },
      ],
      videoDialog: false,
      videoSrc: require('@/assets/video/v1.mp4'),
      isActive: [false, false, false, false, false, false, false, false, false, false],
      sheet: null,
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
  &-comment {
    height: 100%;
  }
  &-bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 140px 0;
    &.bg1 {
      background-image: url(../../assets/img/background/bg1.png);
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      &.bg1 {
        padding: 85px 0;
      }
    }
    @media only screen and (max-width: 767px) {
      &.bg1 {
        padding: 60px 0;
      }
    }
    &.bg3 {
      background-image: url(../../assets/img/background/bg3.jpg);
    }
  }
}
</style>
