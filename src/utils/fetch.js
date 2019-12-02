import axios from 'axios';
import store from '../store';
import vue from 'vue';
// import router from '../router';
import {mapState,mapGetters} from "vuex";
import cas from '../store/modules/cas';
import Cookies from "js-cookie";


export  function fetch (url, method, params) {
    return new Promise((resolve, reject) => {
        axios({
            method: method || 'get',
            url: process.env.BASE_API + url,
            data: params || {},
            // responseType: 'json',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded'
                "token": Cookies.get("token"),
            },
            transformRequest: [function (data) {
                // Do whatever you want to transform the data
                let ret = ''
                for (const it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }]
        })
            .then(response => {
                if (response.data.code === 401){
                    Cookies.set("token","be deled");
                    localStorage.setItem("token","be deled");
                    window.location.replace(response.data.data+"?service="+encodeURI("http://localhost:9001/topic")); // 12506/set_login
                }
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
  /*headers: {
      'token':  localStorage.getItem("token"),// Cookies.get('token'),// this.GetCasToken(), // cas.casData.token, // process.env.TOKEN
  }*/
});
// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
    config.headers.token = Cookies.get("token");
  return config;
}, error => {
  // Do something with request error
  console.log('req err ',error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(

  response => {
      console.log("here response",response);
      if (response.data.code === 401){
          Cookies.set("token","be deled");
          localStorage.setItem("token","be deled");
          window.location.replace(response.data.data+"?service="+encodeURI("http://localhost:9001/topic")); // 12506/set_login
      }
      return response
  }, //response,
  error => {
    console.log('here is reject',error);// for debug
    vue.$Message.error({
                    message: error.message,
                    duration: 5 * 1000,
                    closable: true
                });
    return Promise.reject(error);
  }
)

export default service;
