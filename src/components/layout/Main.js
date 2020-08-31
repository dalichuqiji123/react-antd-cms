import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import routes from '@/routers'
// import {fetchGetuser} from '@/utils/api'
export default class Main extends React.Component {
    // componentDidMount(){
    //     fetchGetuser().then(res=>{
    //         console.log(res)
    //     })
    // }
    creatMain() {
        let res = []
        function creat(arr) {
            arr.map(ele =>{
                res.push(
                    <Route
                        exact
                        path={ele.path}
                        component={ele.component}
                        key={ele.id}
                    >
                    </Route>
                )
                if(ele.children){
                    creat(ele.children)
                }
                return false
                
            })
        }
        routes.map(ele => (
            creat(ele.children)
        )
        )
        return res
    }
    render() {
        return (
            <div className='qf-Main'>
                <Switch>
                {this.creatMain()}
                <Redirect path='/*' to='/user'></Redirect>
                </Switch>
            </div>
        )
    }
}