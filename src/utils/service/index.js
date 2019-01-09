/*
 * @Author: Lisa 
 * @Date: 2018-12-31 17:14:50 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-01 23:50:09
 */

import axios from 'axios';
import errMsgConfig from './errMsgConfig';
import httpParams from './api'; 


axios.defaults.baseURL = 'http://localhost:3000/';

// axios拦截器
axios.interceptors.request.use(
      async (config) => {  
            if(config.method === "get"){
                  config.params = {
                        ...config.data
                  };
                  delete config.data;
            }
           
            return config;
      },
      error => {
            return Promise.reject(error);
      }
)
axios.interceptors.response.use(
      response => {
            return response.data;
      },
      error => {
            const err = new Error();
            err.code = error.response && error.response.data && error.response.data.errno && errMsgConfig[error.response.data.errno]? error.response.data.errno : "default";
            err.type = errMsgConfig[err.code].type;
            err.message = errMsgConfig[err.code].message;
            return Promise.reject(error);
      }    
);
const httpReqDatas =  (apiName, reqDatas = {}) => {
      return axios({...httpParams[apiName], data:reqDatas}); 
};
export default httpReqDatas;
