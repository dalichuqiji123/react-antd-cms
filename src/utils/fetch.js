import axios from 'axios'
let baseurl="http://localhost:8888"
const instance =axios.create({
    baseURL:baseurl,
    timeout:7000,
    headers:{}
})
//请求拦截器：发送请求时的验证
instance.interceptors.request.use(function(config){
    //token是用户鉴权的作用
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
},function(error){
    return Promise.reject(error)
})
//接收响应数据时过滤一些不需要的东西
instance.interceptors.response.use(function(response){
    if(response.status===200){
        if(response.data&&response.data.msg){
            return response.data
        }else{
            alert('网络异常')
        }
    }
},function(error){
        return Promise.reject(error)
})
export default instance
