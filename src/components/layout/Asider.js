import React from 'react'
//从antd中引入menu这个导航栏的组件
import { Menu } from 'antd';
//从routers路由文件中引入routes这个路由数组
import routes from '@/routers'
//Link就是路由url的地址
import { Link } from 'react-router-dom'
//这张图片里面的美女好漂亮
import {logo} from '@/utils/imgs'
const { SubMenu } = Menu;
export default class Asider extends React.Component {
    creatMenuItem(children){
        if(children){
            return children.map(ele=>
                <Menu.Item key={ele.id} icon={ele.icon}>
                    <Link
                    to={ele.path}
                        
                    >
                        {ele.title}
                    </Link>
                    </Menu.Item>
            )
        }  
    }
    creatNav() {
        let arr=[]
        routes.map(ele=>{
            arr.push(
                <SubMenu key={ele.id} title={ele.title} icon={ele.icon}>
                    {this.creatMenuItem(ele.children)}
                </SubMenu>
            )
            return false
        })
        return arr
    }
    render() {
        return (
            <div className='qf-Asider'>
                <img src={logo} alt=''/>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    {/* <SubMenu key="sub1" title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                    </SubMenu> */}
                    {this.creatNav()}
                </Menu>
            </div>
        )
    }
}