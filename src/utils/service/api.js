/*
 * @Author: Lisa 
 * @Date: 2018-12-12 10:53:11 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-02 14:15:34
 */
const api = {
    
    //获取手机验证码
    getVcode : {
        url: `/auth/get_vcode`,
        method: 'post',
        notoken: true
    },
    //用户登录
    login: {
      url: `/auth/login`,
      method: 'post',
      notoken: true
    },
    me: {
        url: `/me`,
        method: 'post'
    },
    getMe: {
        url: `/me`,
        method: 'get'
    },

    //群组
    getMyGroups: {
        url: '/me/groups',
        method: 'get'
    }

};
export default api;