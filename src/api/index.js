//接口请求函数
import request from './ajax';

/**
 * 用户登录接口
 * @param {{string, string}} {username, userpwd} 用户名,密码
 * @return {Object} {state, msg}
 */
export const reqSignIn = ({ username, userpwd }) => {
  return request({
    url: '/signin',
    method: 'post',
    data: {
      username,
      userpwd,
    },
  });
};

/**
 * 用户注册接口
 * @param {{string, string, string}} {username, userpwd, nickname} 用户名,密码,昵称
 * @return {Object} {state, msg}
 */
export const reqRegister = ({ username, userpwd, nickname }) => {
  return request({
    url: '/register',
    method: 'post',
    data: {
      username,
      userpwd,
      nickname,
    },
  });
};

/**
 * 用户登出接口
 * @returns
 */
export const reqLogout = () => {
  return request({
    url: '/logout',
    method: 'get',
  });
};

/**
 * 获取用户信息接口
 * @return {Object} {state, userinfo}
 */
export const reqGetUserInfo = () => {
  return request({
    url: '/users/getUserInfo',
    method: 'get',
  });
};
