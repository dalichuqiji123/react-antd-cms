//引入createStore和combineReducers这两个东西第一个是创建总银行，第二个就是把多个reduces（分银行）给合并
import {createStore , combineReducers, applyMiddleware} from 'redux'
import goodReducer from './reducers/goodReducer'
import todoReducer from './reducers/todoReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'
let reducer = combineReducers({
    todo:todoReducer,
    good:goodReducer,
    user:userReducer
})
let store = createStore(reducer,applyMiddleware(thunk))
export default store