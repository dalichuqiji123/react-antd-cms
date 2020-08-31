import React from 'react'
import { Form, Input, Button, Checkbox,message } from 'antd';
import './style.scss'
import {fetchLogin} from '@/utils/api'
import {withRouter} from 'react-router-dom'
class Login extends React.Component{
    componentDidMount(){
        this.props.history.replace('/login')
    }
    render(){
    
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const Demo = () => {
        const onFinish = values => {
            console.log(values)
            let {username,password} =values
            let data={
                username,
                password
            }
            fetchLogin(data).then(res=>{
                message.success('登录成功')//提示框
                this.props.history.push('/')//跳转页面
                localStorage.setItem('token' , res.data.token)//设置token
                this.props.onLogin()//刷新页面
            })
        };
      
        const onFinishFailed = errorInfo => {
          console.log('Failed:', errorInfo);
        };
      
        return (
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>记住用户名</Checkbox>
            </Form.Item>
      
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" >
                登录
              </Button>
            </Form.Item>
          </Form>
        );
      }; 
        return (
            <div className='login'>
                <Demo/>
            </div>
        )
    }
}
export default withRouter(Login)