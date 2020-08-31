import {GET_USER_LIST} from '@/actionType'
import {fetchGetuser} from '@/utils/api'
export  function getUserList(params){
    return function(dispatch){
        fetchGetuser(params).then(res=>{
            dispatch({
                type:GET_USER_LIST,
                payload:res
            })
        }).catch(err=>{
            dispatch({
                type:GET_USER_LIST,
                payload:err
            })
        })
    }
}