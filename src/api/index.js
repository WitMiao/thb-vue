//接口请求函数
import request from './ajax';

/**
 * 用户登录接口
 * @param {用户名} username
 * @param {密码} password
 * @returns
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
 * @param {用户名} username
 * @param {密码} password
 * @param {昵称} nickname
 * @returns
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
