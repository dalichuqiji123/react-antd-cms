import React from 'react';
import '@/assets/css/app.scss';
import {HashRouter} from 'react-router-dom'
import {Layout} from '@/components'
import {Provider} from 'react-redux'
import store from '@/store'
// import {fetchGetuser} from '@/utils/api.js'
import {Login} from '@/components/login'
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      token:localStorage.getItem('token')//初始化token
    }
  }
  onLogin(){
    this.setState({token:localStorage.getItem('token')})//更新token
  }
  render(){
    let {token} = this.state
    return ( 
      <HashRouter>
        <Provider store={store}>
          {token?<Layout />:<Login onLogin={this.onLogin.bind(this)} />}
        </Provider>
      </HashRouter>
  );
  }
}

