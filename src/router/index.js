import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
//修改原型的push,让原型的push指向另外一个函数
VueRouter.prototype.push = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    //证明调用的时候只传递了个匹配路由对象，传递成功或者失败的回调
    return originPush.call(this, location).catch(() => {});
  } else {
    //证明调用的时候传递了成功或者失败的回调，或者都有
    return originPush.call(this, location, onResolved, onRejected);
  }
};

const originReplace = VueRouter.prototype.replace;
//修改原型的replace,让原型的replace指向另外一个函数
VueRouter.prototype.replace = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    //证明调用的时候只传递了个匹配路由对象，传递成功或者失败的回调
    return originReplace.call(this, location).catch(() => {});
  } else {
    //证明调用的时候传递了成功或者失败的回调，或者都有
    return originReplace.call(this, location, onResolved, onRejected);
  }
};
import Home from '@/pages/Home';
import Lessons from '@/pages/Lessons';
import Users from '@/pages/Users';
import Works from '@/pages/Works';
import Aboutus from '@/pages/Aboutus';

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/lessons',
      component: Lessons,
    },
    {
      path: '/users',
      component: Users,
    },
    {
      path: '/works',
      component: Works,
    },
    {
      path: '/aboutus',
      component: Aboutus,
    },
    {
      path: '/',
      redirect: '/home',
    },
  ],
});

//全局前置守卫
router.beforeEach(async (to, from, next) => {
  const token = store.state.user.token;
  const userInfo = store.state.user.userInfo.username;
  if (token) {
    // console.log(userInfo);
    if (userInfo) {
      next();
    } else {
      const result = await store.dispatch('getUserInfo');
      if (result.status !== 'success') {
        store.dispatch('userLogout');
        alert(result.msg);
      }
      next();
    }
  } else {
    next();
  }
});

export default router;
