<template>
  <header id="header" class="jnr__header header--one clearfix">
    <!-- Start Mainmenu Area -->
    <div
      class="
        mainmenu__wrapper
        bg__cat--1
        poss-relative
        header_top_line
        sticky__header
      "
    >
      <div class="container">
        <div class="row d-none d-lg-flex">
          <div class="col-sm-4 col-md-6 col-lg-2 order-2 order-lg-1">
            <div class="logo">
              <router-link to="/">
                <img src="/index/images/logo/2.png" alt="logo images" />
              </router-link>
            </div>
          </div>
          <div class="col-sm-4 col-md-2 col-lg-8 order-1 order-lg-2">
            <div class="mainmenu__wrap">
              <nav class="mainmenu__nav">
                <ul class="mainmenu">
                  <li class="drop"><router-link to="/">首页</router-link></li>
                  <li class="drop">
                    <a href="/creation" target="_blank">创作平台</a>
                  </li>
                  <li class="drop">
                    <a href="/pythonide" target="_blank">python编辑器</a>
                  </li>
                  <li class="drop">
                    <router-link to="/works">作品展示</router-link>
                  </li>
                  <li class="drop">
                    <router-link to="/lessons">视频资源</router-link>
                  </li>
                  <li><router-link to="/aboutus">联系我们</router-link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            class="col-lg-2 col-sm-4 col-md-4 order-3 order-lg-3"
            id="userModule"
          >
            <ul class="head-login-nav">
              <li>
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#login"
                  class="user-pa-btn"
                  >登录</a
                >
              </li>
              <li>/</li>
              <li>
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#register"
                  class="user-pa-btn"
                  >注册</a
                >
              </li>
            </ul>

            <!-- <div class="user-logined">
              <div class="dropdown">
                <a
                  href="javascript:;"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="user-nav-img row"
                >
                  <div class="user-head-icon">
                    <img
                      src="<%- locals.user.headimg %>"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <span class="caret"></span>
                </a>

                <ul
                  class="dropdown-menu pull-right userdrop"
                  aria-labelledby="dLabel"
                  id="user-dropdown-menu"
                >
                  <li class="color-1">
                    <a href="/users/userworks/unreleased"
                      ><i class="fa fa-folder-open"></i> 我的作品</a
                    >
                  </li>
                  <li class="color-2">
                    <a href="/users/userindex/<%- locals.user._id %>"
                      ><i class="fa fa-user-circle"></i> 个人主页</a
                    >
                  </li>
                  <li class="color-3">
                    <a href="/users/usercenter"
                      ><i class="fa fa-cogs"></i> 账号设置</a
                    >
                  </li>
                  <li role="separator" class="divider"></li>
                  <li class="color-4">
                    <a class="button-logout"
                      ><i class="fa fa-sign-out-alt"></i> 退出登录</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="shopbox d-flex justify-content-end align-items-center">
              <a class="user-ts" href="/users/ts"
                ><i class="far fa-bell"></i
              ></a>

              <a class="user-ts" href="/users/ts"><i class="far fa-bell"></i></a
              ><span class="tsnum" href="/users/ts"></span>
            </div> -->
          </div>
        </div>
        <!-- Mobile Menu -->
        <!-- <div class="mobile-menu d-block d-lg-none">
          <div class="logo" id="mobile-logo">
            <a href="/"><img src="/index/images/logo/2.png" alt="logo" /></a>
          </div>
          <a
            href="javascript:;"
            data-toggle="modal"
            data-target="#login"
            class="minicart-trigger"
            id="login-mobile"
            >登录</a
          >

          <a
            href="javascript:;"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            class="minicart-trigger"
            id="userHead"
          >
            <div class="user-head-icon">
              <img
                src="<%- locals.user.headimg %>"
                width="100%"
                height="100%"
              />
            </div>
            <span class="caret"></span>
          </a>
          <ul
            class="dropdown-menu pull-right userdrop"
            aria-labelledby="dLabel"
            id="user-dropdown-menu-mobile"
          >
            <li class="color-1">
              <a href="/users/userworks/unreleased"
                ><i class="fa fa-folder-open"></i> 我的作品</a
              >
            </li>
            <li class="color-2">
              <a href="/users/userindex/<%- locals.user._id %>"
                ><i class="fa fa-user-circle"></i> 个人主页</a
              >
            </li>
            <li class="color-3">
              <a href="/users/usercenter"
                ><i class="fa fa-cogs"></i> 账号设置</a
              >
            </li>
            <li role="separator" class="divider"></li>
            <li class="color-4">
              <a class="button-logout"
                ><i class="fa fa-sign-out-alt"></i> 退出登录</a
              >
            </li>
          </ul>
          <div
            class="shopbox d-flex justify-content-end align-items-center mobile"
          >
            <a class="user-ts" href="/users/ts"><i class="far fa-bell"></i></a>

            <a class="user-ts" href="/users/ts"><i class="far fa-bell"></i></a
            ><span class="tsnum" href="/users/ts"></span>
          </div>
        </div> -->
        <!-- Mobile Menu -->
      </div>
    </div>
    <!-- End Mainmenu Area -->
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style></style>
