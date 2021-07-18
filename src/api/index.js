//接口请求函数
import request from "./ajax"
export const signIn = (username,password) => {
    return request({
        url:'/signin',
        method:'post',
        data:{
            "username":username,
            "userpwd":password,
        }
    })
}