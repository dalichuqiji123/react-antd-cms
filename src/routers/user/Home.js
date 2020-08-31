import React from 'react'
//引入connect：是一个高阶函数，只要用于引入外部的方法。
import {connect} from 'react-redux'
import {changeMsg,
        todoAdd,
        todoDel,
        todoUpd,
        todoClear,
} from '@/store/actions/todoAction'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            task:''
        }
    }
    ChangeMsg(){
        this.props.change('你放屁！')
    }
    todoAdd(e){
        if(e.keyCode===13){
            this.props.add({
                id:Date.now(),
                title:this.state.task
            })
            this.setState({task:''})
        }
    }
    delTodo(id){
        this.props.del(id)
    }
    upTodo(id){
        this.props.up({
            id,
            title:'打王者'
        })
    }
    clearTodo(){
        this.props.clear()
    }
    creatList(){
        let {list}=this.props
        return  list.map(ele=>(
            <div  key={ele.id}>
                <span>{ele.id}</span>
                <span>---</span>
                <span onClick={this.upTodo.bind(this,ele.id)}>{ele.title}</span>
                <button onClick={this.delTodo.bind(this,ele.id)}>删除</button>
            </div>
        ))  
        // return false
    }
    taskChange(e){
        this.setState({task:e.target.value})
    }
    render(){
        return (
            <div>
                <h1>我是注册页面</h1>
                <h2>{this.props.msg}</h2>
                <button onClick={this.ChangeMsg.bind(this)}>更改msg</button>
                <hr></hr>
                <input value={this.state.task} 
                onChange={this.taskChange.bind(this)}
                onKeyUp={this.todoAdd.bind(this)}
                ></input>
                {this.creatList()}
                <br/>
                <button onClick={this.clearTodo.bind(this)}>清除</button>
                
            </div>
        )
    }
}
//就是用于数据state的管理。然后在react组件通过this.props可以访问里面的数据。
function mapStateToProps(store){
    return {
        msg:store.todo.msg,
        list:store.todo.list,
    }
}
//mapActionToProps这个函数用于返回一个函数，一个通过dispatch向store发送action的函数。然后store交给reducer进行一系列的业务操作。
//只要向reducer里面传递了action那么就可以在this.props里面见到这个函数了。
function mapActionToProps(dispatch){
    return {
        change:(payload)=>{dispatch(changeMsg(payload))},
        add:(payload)=>{dispatch(todoAdd(payload))},
        del:(payload)=>{dispatch(todoDel(payload))},
        up:(payload)=>{dispatch(todoUpd(payload))},
        clear:(payload)=>{dispatch(todoClear(payload))},
    }
}
export default connect(mapStateToProps,mapActionToProps)(Home)
//connect把外部的方法就像上面的mapStateToProps,mapActionToProps或者state映射进来
