import loadable from '@loadable/component'
import React from 'react'
import {
    AppstoreOutlined,
    AppleOutlined,
    IeOutlined,
    AndroidOutlined
  } from '@ant-design/icons';
const Home=loadable(()=>import ('./user/Home'))
const Shoplist=loadable(()=>import ('./shop/shopList'))
const User=loadable(()=>import ('./user/User'))
const Addshop=loadable(()=>import ('./shop/addShop'))
const routes =[
    {
        id:1,
        title:'个人中心',
        icon:<IeOutlined/>,
        children:[
            {
                id:11,
                title:'注册用户',
                path:'/reg',
                component:Home,
                icon:<AppstoreOutlined/>
            },
            {
                id:12,
                title:'关于我的',
                path:'/user',
                component:User,
                icon:<AppleOutlined/>
            }
        ]
    },
    {
        id:2,
        icon:<AndroidOutlined/>,
        title:'商品管理',
        children:[
            {
                id:21,
                icon:<AndroidOutlined/>,
                component:Shoplist,
                path:'/shoplist',
                title:'商品列表',
                children:[
                    {
                        id:211,
                        icon:<AndroidOutlined/>,
                        component:Addshop,
                        path:'/addshop/:id',
                        title:'添加商品',
                    },
                ]
            }
        ]

    }
]
export default routes