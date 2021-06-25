<template>

  <el-main class="wrapper" id="wrapper">
    <!-- Strat Slider Area -->
    <div class="slide__carosel owl-carousel owl-theme">
      <div
        class="
          slider__area
          bg-pngimage
          d-flex
          fullscreen
          justify-content-start
          align-items-center
        "
        style="background-image: url('/img/index/banner/<%- banners[i].src %>')"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="slider__activation">
                <!-- Start Single Slide -->
                <div class="slide">
                  <div class="slide__inner">
                    <h1></h1>
                    <div class="slider__text">
                      <h2></h2>
                    </div>
                    <div class="slider__btn">
                      <a class="dcare__btn" href="<%- banners[i].url %>"> </a>
                    </div>
                  </div>
                </div>
                <!-- End Single Slide -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start Welcame Area -->
    <section class="junior__welcome__area section-padding--md bg-pngimage--2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section__title text-center">
              <h2 class="title__line">欢迎来到特慧编</h2>
              <p>
                特慧编俱乐部更注重引导孩子主动思考，
                不仅要教会孩子编程知识，还要教会孩子如何竞争与合作。
              </p>
            </div>
          </div>
        </div>
        <div class="row jn__welcome__wrapper align-items-center">
          <div class="col-md-12 col-lg-6 col-sm-12">
            <div class="welcome__juniro__inner">
              <h3>
                欢迎<span class="theme-color">加入</span><span>我们</span>~
              </h3>
              <p class="wow flipInX">
                我们的教师来自于一线IT企业，不仅拥有多年IT行业经验，了解行业发展现状，
                有的还拥有多年海外工作经验，可以更好地带领学员开阔视野，掌握真知。
              </p>
              <div class="wel__btn">
                <a class="dcare__btn" href="/aboutus">联系我们</a>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-sm-12 md-mt-40 sm-mt-40">
            <div class="jnr__Welcome__thumb wow fadeInRight">
              <img src="/index/images/wel-come/1.png" alt="images" />
              <div class="video-btn-block">
                <a
                  class="play__btn"
                  href=""
                  data-toggle="modal"
                  data-target="#video-modal"
                  ><i class="fa fa-play"></i
                ></a>
              </div>
              <div
                class="modal fade welcom-modal"
                id="video-modal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div class="modal-body">
                      <div
                        style="text-align: center"
                        class="embed-responsive embed-responsive-16by9"
                      >
                        <video
                          id="video-source"
                          controls
                          class="embed-responsive-item"
                        >
                          <source src="" type="video/mp4" />
                          你的游览器不支持此视频播放
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Welcame Area -->

    <!-- Start Call To Action -->
    <section class="jnr__call__to__action bg-pngimage--3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-md-12">
            <div
              class="
                jnr__call__action__wrap
                d-flex
                flex-wrap flex-md-nowrap flex-lg-nowrap
                justify-content-between
                align-items-center
              "
            >
              <div class="callto__action__inner">
                <h2 class="wow flipInX" data-wow-delay="0.95s">
                  如何让您的孩子快速上手少儿编程？
                </h2>
                <p>特慧编，让您的孩子先人一步，引领未来</p>
              </div>
              <div class="callto__action__btn">
                <a class="dcare__btn btn__white" href="/aboutus">联系我们</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Call To Action -->

    <!-- Start our Class Area -->
    <section
      class="
        junior__classes__area
        section-lg-padding--top
        section-padding--md--bottom
        bg--white
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="section__title text-center">
              <h2 class="title__line">作品展示</h2>
              <p>这里是特慧编老师和学生创作的优秀作品~</p>
            </div>
          </div>
        </div>
        <div
          class="
            row
            classes__wrap
            activation__one
            owl-carousel owl-theme
            clearfix
            mt--40
          "
        >
          <!-- Start Single Classes -->
          <div class="col-lg-4 col-sm-6">
            <div class="gallery wow fadeInUp">
              <div class="gallery__thumb">
                <a href="/works/content/1/<%- showlist[i]._id %>">
                  <img
                    src="/released/covers/<%- showlist[i].covers%>"
                    alt="<%- showlist[i].title %>"
                  />
                </a>
              </div>
              <div class="gallery__hover__inner">
                <div class="gallery__hover__action">
                  <ul class="gallery__zoom">
                    <li>
                      <a href="/works/content/1/<%- showlist[i]._id %>"
                        ><i class="fa fa-link"></i
                      ></a>
                    </li>
                  </ul>
                  <h4 class="gallery__title"><a></a></h4>
                  <h5 class="gallery__title"><a>作者：</a></h5>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Classes -->
        </div>
      </div>
    </section>
    <!-- End our Class Area -->

    <!-- Start Testimonial Area -->
    <section class="junior__testimonial__area bg-image--2 section-padding--lg">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8 col-md-12 col-sm-12">
            <div class="testimonial__container">
              <div class="tes__activation--1 owl-carousel owl-theme">
                <div class="testimonial__bg">
                  <!-- Start Single Testimonial -->
                  <div class="testimonial text-center">
                    <div class="testimonial__inner">
                      <div class="test__icon">
                        <img
                          src="/index/images/testimonial/icon/1.png"
                          alt="icon images"
                        />
                      </div>
                      <div class="client__details">
                        <p></p>
                        <div class="client__info">
                          <h6></h6>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Single Testimonial -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Testimonial Area -->
     <div class="slide__carosel owl-carousel owl-theme">
      <div
        class="
          slider__area
          bg-pngimage
          d-flex
          fullscreen
          justify-content-start
          align-items-center
        "
        style="background-image: url('/img/index/banner/<%- banners[i].src %>')"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="slider__activation">
                <!-- Start Single Slide -->
                <div class="slide">
                  <div class="slide__inner">
                    <h1></h1>
                    <div class="slider__text">
                      <h2></h2>
                    </div>
                    <div class="slider__btn">
                      <a class="dcare__btn" href="<%- banners[i].url %>"> </a>
                    </div>
                  </div>
                </div>
                <!-- End Single Slide -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start Welcame Area -->
    <section class="junior__welcome__area section-padding--md bg-pngimage--2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section__title text-center">
              <h2 class="title__line">欢迎来到特慧编</h2>
              <p>
                特慧编俱乐部更注重引导孩子主动思考，
                不仅要教会孩子编程知识，还要教会孩子如何竞争与合作。
              </p>
            </div>
          </div>
        </div>
        <div class="row jn__welcome__wrapper align-items-center">
          <div class="col-md-12 col-lg-6 col-sm-12">
            <div class="welcome__juniro__inner">
              <h3>
                欢迎<span class="theme-color">加入</span><span>我们</span>~
              </h3>
              <p class="wow flipInX">
                我们的教师来自于一线IT企业，不仅拥有多年IT行业经验，了解行业发展现状，
                有的还拥有多年海外工作经验，可以更好地带领学员开阔视野，掌握真知。
              </p>
              <div class="wel__btn">
                <a class="dcare__btn" href="/aboutus">联系我们</a>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-sm-12 md-mt-40 sm-mt-40">
            <div class="jnr__Welcome__thumb wow fadeInRight">
              <img src="/index/images/wel-come/1.png" alt="images" />
              <div class="video-btn-block">
                <a
                  class="play__btn"
                  href=""
                  data-toggle="modal"
                  data-target="#video-modal"
                  ><i class="fa fa-play"></i
                ></a>
              </div>
              <div
                class="modal fade welcom-modal"
                id="video-modal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div class="modal-body">
                      <div
                        style="text-align: center"
                        class="embed-responsive embed-responsive-16by9"
                      >
                        <video
                          id="video-source"
                          controls
                          class="embed-responsive-item"
                        >
                          <source src="" type="video/mp4" />
                          你的游览器不支持此视频播放
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Welcame Area -->

    <!-- Start Call To Action -->
    <section class="jnr__call__to__action bg-pngimage--3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-md-12">
            <div
              class="
                jnr__call__action__wrap
                d-flex
                flex-wrap flex-md-nowrap flex-lg-nowrap
                justify-content-between
                align-items-center
              "
            >
              <div class="callto__action__inner">
                <h2 class="wow flipInX" data-wow-delay="0.95s">
                  如何让您的孩子快速上手少儿编程？
                </h2>
                <p>特慧编，让您的孩子先人一步，引领未来</p>
              </div>
              <div class="callto__action__btn">
                <a class="dcare__btn btn__white" href="/aboutus">联系我们</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Call To Action -->

    <!-- Start our Class Area -->
    <section
      class="
        junior__classes__area
        section-lg-padding--top
        section-padding--md--bottom
        bg--white
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="section__title text-center">
              <h2 class="title__line">作品展示</h2>
              <p>这里是特慧编老师和学生创作的优秀作品~</p>
            </div>
          </div>
        </div>
        <div
          class="
            row
            classes__wrap
            activation__one
            owl-carousel owl-theme
            clearfix
            mt--40
          "
        >
          <!-- Start Single Classes -->
          <div class="col-lg-4 col-sm-6">
            <div class="gallery wow fadeInUp">
              <div class="gallery__thumb">
                <a href="/works/content/1/<%- showlist[i]._id %>">
                  <img
                    src="/released/covers/<%- showlist[i].covers%>"
                    alt="<%- showlist[i].title %>"
                  />
                </a>
              </div>
              <div class="gallery__hover__inner">
                <div class="gallery__hover__action">
                  <ul class="gallery__zoom">
                    <li>
                      <a href="/works/content/1/<%- showlist[i]._id %>"
                        ><i class="fa fa-link"></i
                      ></a>
                    </li>
                  </ul>
                  <h4 class="gallery__title"><a></a></h4>
                  <h5 class="gallery__title"><a>作者：</a></h5>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Classes -->
        </div>
      </div>
    </section>
    <!-- End our Class Area -->

    <!-- Start Testimonial Area -->
    <section class="junior__testimonial__area bg-image--2 section-padding--lg">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8 col-md-12 col-sm-12">
            <div class="testimonial__container">
              <div class="tes__activation--1 owl-carousel owl-theme">
                <div class="testimonial__bg">
                  <!-- Start Single Testimonial -->
                  <div class="testimonial text-center">
                    <div class="testimonial__inner">
                      <div class="test__icon">
                        <img
                          src="/index/images/testimonial/icon/1.png"
                          alt="icon images"
                        />
                      </div>
                      <div class="client__details">
                        <p></p>
                        <div class="client__info">
                          <h6></h6>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Single Testimonial -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Testimonial Area -->
     <div class="slide__carosel owl-carousel owl-theme">
      <div
        class="
          slider__area
          bg-pngimage
          d-flex
          fullscreen
          justify-content-start
          align-items-center
        "
        style="background-image: url('/img/index/banner/<%- banners[i].src %>')"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="slider__activation">
                <!-- Start Single Slide -->
                <div class="slide">
                  <div class="slide__inner">
                    <h1></h1>
                    <div class="slider__text">
                      <h2></h2>
                    </div>
                    <div class="slider__btn">
                      <a class="dcare__btn" href="<%- banners[i].url %>"> </a>
                    </div>
                  </div>
                </div>
                <!-- End Single Slide -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start Welcame Area -->
    <section class="junior__welcome__area section-padding--md bg-pngimage--2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section__title text-center">
              <h2 class="title__line">欢迎来到特慧编</h2>
              <p>
                特慧编俱乐部更注重引导孩子主动思考，
                不仅要教会孩子编程知识，还要教会孩子如何竞争与合作。
              </p>
            </div>
          </div>
        </div>
        <div class="row jn__welcome__wrapper align-items-center">
          <div class="col-md-12 col-lg-6 col-sm-12">
            <div class="welcome__juniro__inner">
              <h3>
                欢迎<span class="theme-color">加入</span><span>我们</span>~
              </h3>
              <p class="wow flipInX">
                我们的教师来自于一线IT企业，不仅拥有多年IT行业经验，了解行业发展现状，
                有的还拥有多年海外工作经验，可以更好地带领学员开阔视野，掌握真知。
              </p>
              <div class="wel__btn">
                <a class="dcare__btn" href="/aboutus">联系我们</a>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-sm-12 md-mt-40 sm-mt-40">
            <div class="jnr__Welcome__thumb wow fadeInRight">
              <img src="/index/images/wel-come/1.png" alt="images" />
              <div class="video-btn-block">
                <a
                  class="play__btn"
                  href=""
                  data-toggle="modal"
                  data-target="#video-modal"
                  ><i class="fa fa-play"></i
                ></a>
              </div>
              <div
                class="modal fade welcom-modal"
                id="video-modal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div class="modal-body">
                      <div
                        style="text-align: center"
                        class="embed-responsive embed-responsive-16by9"
                      >
                        <video
                          id="video-source"
                          controls
                          class="embed-responsive-item"
                        >
                          <source src="" type="video/mp4" />
                          你的游览器不支持此视频播放
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Welcame Area -->

    <!-- Start Call To Action -->
    <section class="jnr__call__to__action bg-pngimage--3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-md-12">
            <div
              class="
                jnr__call__action__wrap
                d-flex
                flex-wrap flex-md-nowrap flex-lg-nowrap
                justify-content-between
                align-items-center
              "
            >
              <div class="callto__action__inner">
                <h2 class="wow flipInX" data-wow-delay="0.95s">
                  如何让您的孩子快速上手少儿编程？
                </h2>
                <p>特慧编，让您的孩子先人一步，引领未来</p>
              </div>
              <div class="callto__action__btn">
                <a class="dcare__btn btn__white" href="/aboutus">联系我们</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Call To Action -->

    <!-- Start our Class Area -->
    <section
      class="
        junior__classes__area
        section-lg-padding--top
        section-padding--md--bottom
        bg--white
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="section__title text-center">
              <h2 class="title__line">作品展示</h2>
              <p>这里是特慧编老师和学生创作的优秀作品~</p>
            </div>
          </div>
        </div>
        <div
          class="
            row
            classes__wrap
            activation__one
            owl-carousel owl-theme
            clearfix
            mt--40
          "
        >
          <!-- Start Single Classes -->
          <div class="col-lg-4 col-sm-6">
            <div class="gallery wow fadeInUp">
              <div class="gallery__thumb">
                <a href="/works/content/1/<%- showlist[i]._id %>">
                  <img
                    src="/released/covers/<%- showlist[i].covers%>"
                    alt="<%- showlist[i].title %>"
                  />
                </a>
              </div>
              <div class="gallery__hover__inner">
                <div class="gallery__hover__action">
                  <ul class="gallery__zoom">
                    <li>
                      <a href="/works/content/1/<%- showlist[i]._id %>"
                        ><i class="fa fa-link"></i
                      ></a>
                    </li>
                  </ul>
                  <h4 class="gallery__title"><a></a></h4>
                  <h5 class="gallery__title"><a>作者：</a></h5>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Classes -->
        </div>
      </div>
    </section>
    <!-- End our Class Area -->

    <!-- Start Testimonial Area -->
    <section class="junior__testimonial__area bg-image--2 section-padding--lg">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8 col-md-12 col-sm-12">
            <div class="testimonial__container">
              <div class="tes__activation--1 owl-carousel owl-theme">
                <div class="testimonial__bg">
                  <!-- Start Single Testimonial -->
                  <div class="testimonial text-center">
                    <div class="testimonial__inner">
                      <div class="test__icon">
                        <img
                          src="/index/images/testimonial/icon/1.png"
                          alt="icon images"
                        />
                      </div>
                      <div class="client__details">
                        <p></p>
                        <div class="client__info">
                          <h6></h6>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Single Testimonial -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Testimonial Area -->
  </el-main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style></style>
