import axios from 'axios'

// 1. 创建axios对象
const instance = axios.create({
    timeout: 5000,
});

// https://www.axios-http.cn/docs/interceptors
// 2. 请求拦截器  ===> 前端给后端的参数（还没到后端响应）
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    /**
     * 登录的判断，例如用户的登陆状态检查，会在headers中吧用户的token传递给后端
     */
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 3. 响应拦截器  ===> 后端返回前端的响应
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 4. 最终返回的axios对象
export default instance
