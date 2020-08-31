import axios from './fetch'
//获取所有用户
function fetchGetuser(params){
    return axios ({
        url:'/api/v1/users/all',
        method:'GET',
        params
    })
}
//获取所有的商品
function fetchGetshop(data){
    return axios ({
        url:'/api/v1/goods/getgoodslist',
        method:"POST",
        data
    })
}
//添加商品
function fetchAddgood(data){
    return axios ({
        url:"/api/v1/goods/addgoods",
        method:"POST",
        data
    })
}
//获取商品种类
function fetchGetcate(params){
    return axios ({
        url:'/api/v1/cates/getshopType',
        method:"GET",
        params
    })
}
//删除商品
function fetchDelshop(data){
    return axios ({
        url:"/api/v1/goods/deletegood",
        method:"POST",
        data
    })
}
//登录
function fetchLogin(data){
    return axios ({
        url:'api/v1/users/cms/login',
        method:"POST",
        data
    })
}
//获取商品详情
function fetchgetDetial(params){
    return axios({
        url:'api/v1/goods/getgooddetail',
        method:'GET',
        params
    })
}
export {
    fetchGetuser,
    fetchGetshop,
    fetchAddgood,
    fetchGetcate,
    fetchDelshop,
    fetchLogin,
    fetchgetDetial
}