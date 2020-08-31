import  {
    CHANGE_MSG,
    TODO_ADD,
    TODO_UPD,
    TODO_DET,
    TODO_CLEAR
} from '@/actionType'
let initstate = {
    msg:'我知道我很强',
    list:[{id:1,title:'读书'},{id:2,title:'看报'}],
}
//深复制方法：es6方法{...state}，Object.assign({state}),json.parse(json.stringify(state))
//前面两种只能复制一层，最后一种可以复制好几层。
export default  function todoReducer(state=initstate,action){
    let newstate=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case CHANGE_MSG:
            newstate.msg=action.payload
            return newstate
        case TODO_ADD:
            newstate.list.push(action.payload)
            return newstate
        case TODO_UPD:
            newstate.list.map((ele,idx,arr)=>{
                if(ele.id===action.payload.id){
                    arr[idx].title=action.payload.title
                }
                return false
            })
            return newstate
        case TODO_DET:
            newstate.list=newstate.list.filter(ele=>ele.id!==action.id)
            return newstate
        case TODO_CLEAR:
            newstate.list=[]
            return newstate
        default:
            return state
    }
}