import {GET_CATE} from '@/actionType'
import {fetchGetcate} from '@/utils/api'
export function getcateAction(params){
    return function(dispatch){
        fetchGetcate(params).then(res=>{
            dispatch({
                type:GET_CATE,
                payload:res
            })
        }).catch(err=>{
            dispatch({
                type:GET_CATE,
                payload:''
            })
        })
    }
}