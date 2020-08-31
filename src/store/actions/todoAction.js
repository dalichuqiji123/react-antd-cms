import  {
    CHANGE_MSG,
    TODO_ADD,
    TODO_UPD,
    TODO_DET,
    TODO_CLEAR
} from '@/actionType'
//action 生成器
export function changeMsg(payload){
    return {
        type:CHANGE_MSG,
        payload
    }
}
export function todoAdd(payload){
    return {
        type:TODO_ADD,
        payload
    }
}
export function todoDel(id){
    return {
        type:TODO_DET,
        id
    }
}
export function todoUpd(payload){
    return {
        type:TODO_UPD,
        payload
    }
}
export function todoClear(){
    return {
        type:TODO_CLEAR,
        payload:''
    }
}