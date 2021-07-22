//接口请求函数
import request from './ajax';

/**
 * 用户登录接口
 * @param {string} username 用户名
 * @param {string} userpwd 密码
 * @return {Object} {state,msg}
 */
export const signIn = (username, userpwd) => {
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
 * @param {string} username 用户名
 * @param {string} userpwd 密码
 * @param {string} nickname 昵称
 * @return {Object} {state,msg}
 */
export const register = (username, userpwd, nickname) => {
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
 * 用户登出
 * @returns
 */
export const logout = () => {
  return request({
    url: '/logout',
    method: 'get',
  });
};
