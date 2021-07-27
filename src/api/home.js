//接口请求函数
import request from '@/utils/request';

/**
 * 获取首页信息接口
 * @return {Object} {status, homeinfo}
 */
export const reqHomeInfo = () => {
    return request({
        url: '/homeInfo',
        method: 'get'
    })
}