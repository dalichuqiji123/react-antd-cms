import {fetchGetshop,fetchgetDetial} from '@/utils/api'
import {GET_SHOP_LIST,GET_DETIAL} from '@/actionType'
//action生成器
export function getShop(data){
    return function (dispatch){
        fetchGetshop(data).then(res=>{
            dispatch({
                type:GET_SHOP_LIST,
                payload:res.data
            })
        }).catch(err=>{
            dispatch({
                type:GET_SHOP_LIST,
                payload:''
            })
        })
    }
}
export function getDetial(params){
    return function (dispatch){
        fetchgetDetial(params).then(res=>{
            console.log(res)
            dispatch({
                type:GET_DETIAL,
                payload:res.data.list
            })
        }).catch(err=>{
            dispatch({
                type:GET_DETIAL,
                payload:''
            })
        })
    }
}