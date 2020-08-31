import {GET_USER_LIST} from '@/actionType'
const initstate={
    list:[]
}
export default function userReducer(state=initstate,action){
    let newstate=JSON.parse(JSON.stringify(state))
    switch (action.type){
        case GET_USER_LIST:
            newstate.list=action.payload.data.list
            return newstate
        default:
            return state
    }
}