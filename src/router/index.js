import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
//修改原型的push,让原型的push指向另外一个函数
VueRouter.prototype.push = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        //证明调用的时候只传递了个匹配路由对象，传递成功或者失败的回调
        return originPush.call(this, location).catch(() => {
        });
    } else {
        //证明调用的时候传递了成功或者失败的回调，或者都有
        return originPush.call(this, location, onResolved, onRejected);
    }
};

const originReplace = VueRouter.prototype.replace;
//修改原型的replace,让原型的replace指向另外一个函数
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        //证明调用的时候只传递了个匹配路由对象，传递成功或者失败的回调
        return originReplace.call(this, location).catch(() => {
        });
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

export default new VueRouter({
    routes: [
        {
            path: '/',
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
    ],
});
