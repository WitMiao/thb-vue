<template>
  <div class="home-page">
    <v-carousel hide-delimiters show-arrows-on-hover class="home-page-carousel" v-if="homeInfo.banners">
      <v-carousel-item
        v-for="(carousel, i) in homeInfo.banners"
        :key="i"
        :src="'/apiassets/img/index/banner/' + carousel.src"
        class="home-page-carousel-item"
      >
        <v-container class="home-page-carousel-item-container d-flex flex-column" v-if="carousel.firstdetail">
          <v-lazy
            v-model="isActive[0]"
            :options="{
              threshold: 0.5,
            }"
            transition="fab-transition"
          >
            <div>
              <div class="my-1">
                <span class="home-page-carousel-item-container-span h1">{{ carousel.firstdetail }}</span>
              </div>
              <span class="home-page-carousel-item-container-span h2">{{ carousel.seconddetail }}</span>
            </div>
          </v-lazy>
          <v-lazy
            v-model="isActive[0]"
            :options="{
              threshold: 0.5,
            }"
            transition="fade-transition"
          >
            <div class="mt-10" v-if="carousel.url">
              <v-btn color="warning" x-large class="text-h6 font-weight-bold" depressed :to="carousel.url">
                {{ carousel.title }}
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
                <v-dialog v-model="videoDialog" width="500" @click:outside="closeVideo">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="white" fab v-bind="attrs" v-on="on">
                      <v-icon color="orange" x-large>mdi-play</v-icon>
                    </v-btn>
                  </template>
                  <v-card>
                    <vue-core-video-player :src="videoSrc" ref="thbVideo"></vue-core-video-player>
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
    <template v-if="homeInfo.showlist">
      <div class="miao-container">
        <div class="pt-16 d-flex flex-column align-center">
          <span class="home-page-title">作品展示</span>
          <v-img class="my-5" max-height="13" max-width="293" src="@/assets/img/home/title-line.png"></v-img>
          <span class="home-page-text">这里是特慧编老师和学生创作的优秀作品~</span>
        </div>
      </div>
      <v-sheet class="mx-auto mt-10" max-width="1300">
        <v-slide-group v-model="sheet" class="pa-4" center-active show-arrows>
          <v-slide-item v-for="(work, i) in homeInfo.showlist" :key="i" v-slot="{ active, toggle }">
            <v-card
              class="ma-4"
              height="270"
              width="360"
              @click="toggle"
              :img="'/apiassets/released/covers/' + work.covers"
            >
              <v-row class="fill-height" align="center" justify="center" >
                <v-scale-transition>
                  <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </template>

    <div class="home-page-bg bg3 mt-12">
      <v-carousel cycle hide-delimiters :show-arrows="false" class="d-flex justify-center">
        <v-carousel-item
          v-for="(comment, i) in homeInfo.icomment"
          :key="i"
          src="@/assets/img/carousel/c0.png"
          class=""
          max-width="636"
          max-height="437"
        >
          <v-container
            class="d-flex flex-column justify-center align-center home-page-comment"
            v-if="comment.content"
            px-12
          >
            <div class="my-1">
              <span class="text-h5 white--text">{{ comment.content }}</span>
            </div>
            <span class="white--text font-weight-bold">{{ comment.enname }}</span>
            <div class="my-1">
              <span class="white--text">{{ comment.name }}</span>
            </div>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import { reqHomeInfo } from '@/api/home';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      videoDialog: false,
      videoSrc: require('@/assets/video/v1.mp4'),
      isActive: [false, false, false, false],
      sheet: null,
    };
  },
  computed: {
    ...mapState({
      homeInfo: (state) => state.home.homeInfo,
    }),
  },
  methods: {
    openRegisterDialog() {
      this.$store.dispatch('firstOpenRegisterDialog');
    },
    closeVideo() {
      this.$refs.thbVideo.pause();
    },
    async getHomeInfo() {
      const result = await reqHomeInfo();
      console.log(result);
      this.$store.commit('RECEIVE_HOMEINFO', result.homeinfo);
    },
  },
  mounted() {
    this.getHomeInfo();
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
      background-image: url(~@/assets/img/background/bg1.png);
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
      background-image: url(~@/assets/img/background/bg3.jpg);
    }
  }
}
</style>
