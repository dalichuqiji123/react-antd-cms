import {GET_SHOP_LIST,GET_CATE,GET_DETIAL} from '@/actionType'
let initstate={
    goodlist:[],
    cates:[],
    total:0,
    detial:{}
}
function goodReducer (state=initstate,action){
    let newstate = JSON.parse(JSON.stringify(state))
    
    switch (action.type){
        case GET_SHOP_LIST:
            action.payload.list.map((ele,idx,arr)=>{
                ele.key=ele._id
                return arr
            })
           newstate.goodlist=action.payload.list
           newstate.total=action.payload.total
           return newstate
        case GET_CATE:
            newstate.cates=action.payload.data.list
            return newstate
        case GET_DETIAL:
            console.log(action)
            newstate.detial=action.payload
            return newstate
        default:
            return state
    }
}
export default goodReducer