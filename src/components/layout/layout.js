import React from 'react'
import 'antd/dist/antd.css';
import './style.scss'
import {QfAsider,QfMain,QfHeader} from './index'
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;
export default class QfLayout extends React.Component{
    render(){
        return (
            <div className='qf-layout'>
                <Layout>
                    <Sider>
                        <QfAsider />
                    </Sider>
                    <Layout>
                    <Header>
                        <QfHeader />
                    </Header>
                    <Content>
                        <QfMain />
                    </Content>
                </Layout>
                </Layout>
            </div>
        )
    }
}