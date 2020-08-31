import React from 'react'
import {getShop} from '@/store/actions/getgoodAction'
import {connect} from 'react-redux'
import {fetchDelshop} from '@/utils/api'
import { Table ,Row, Col,DatePicker,Modal,message,Button} from 'antd';
import './style.scss'
import {CateSelect} from '@/components/common'

class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            columns:[
                {
                    title:"商品名称",
                    dataIndex:"goodsName",
                    align:'center',
                    width:'50px'
                },
                {
                    title:"商品图片",
                    dataIndex:"goodsImg",
                    align:'center',
                    render:(dataIndex,record,index)=>{
                        return (
                            <img src={dataIndex} alt='' style={{width:'100px',height:'100px',textAlign:"center"}} />
                        )  
                    },
                    width:'120px'
                },
                {
                    title:"商品价格",
                    dataIndex:"goodsPrice",
                    align:'center',
                    width:'50px'
                },
                {
                    title:"商品详情",
                    dataIndex:"goodsDetail",
                    align:'center',
                    width:'200px'
                },
                {
                    title:"商品类型",
                    dataIndex:"goodsType",
                    align:'center',
                    width:'50px'
                },
                {
                    title:"操作",
                    dataIndex:"handle",
                    align:'center',
                    width:'100px',
                    render:(dateIndex,row,idx)=>{
                        return (
                            <div className='row-handle'>
                                <span onClick={this.delShop.bind(this,row)}>删除</span>
                                <span onClick={this.skipEdit.bind(this,row)}>编辑</span>
                            </div>
                        )
                    }
                },
            ],
            info:{
                goodsType:'',
                page:1,
                size:3,
                hot:false,
            },
            visible:false,
            currow:null
        }
    } 
    componentDidMount(){
        let {info}=this.state
        this.props.getshop(info)
    }
    //封装一个改变info的东西
    infoChange(key,val){
        let {info} = this.state
        if(key!='page'){
            info.page=1
        }
        info[key]=val

        this.setState({info})
        this.props.getshop(info)
    }
    //品类改变
    cateChange(val){
        this.infoChange("goodsType",val)
    }
    //日期改变
    dataChange(e){
        console.log(e)
        let startTime= e[0].format('YY-M-DD HH-MM-ss')
        let endTime = e[1].valueOf()
        console.log(startTime,endTime)
    }
    //分页改变
    pageChange(page){
        this.infoChange('page',page)
    }
    //删除
    delShop(row){
        this.setState({visible:true,currow:row})
    }
    //确认删除
    handleOk(){
        let data={
            id:this.state.currow._id
        }
        fetchDelshop(data).then(res=>{
            message.success('删除成功！！！')
            this.setState({visible:false})
            this.infoChange(this.state.info)
        })
    }
    //编辑
    skipEdit(row){
        this.props.history.replace('/addshop/'+row._id)
    }
    //取消删除
    handleCancel(row){
        this.setState({visible:false,currow:row})
    }
    //新增商品
    addshop(){
        this.props.history.push('/addshop/0')
    }
    render(){
        const { RangePicker } = DatePicker;
        let {info} =this.state
        return (
            <div className='shopList'>
                <h1>商品列表</h1>
                <div className='shop-cate'>
                    <Row align='middle'>
                        <Col span={2} >
                            商品品类：
                        </Col>
                        <Col span={4} >
                            <CateSelect value={info.goodsType} onChange={this.cateChange.bind(this)} />
                        </Col>
                        <Col span={2} offset={2}>
                            时间日期：
                        </Col>
                        <Col span={8}>
                            <RangePicker showTime onChange={this.dataChange.bind(this)} />
                        </Col>
                        <Col span={4} offset={2}>
                            <Button type="primary" onClick={this.addshop.bind(this)}>商品新增</Button>
                        </Col>
                    </Row>
                </div>
                <Table 
                    dataSource={this.props.shoplist} 
                    columns={this.state.columns} 
                    pagination={
                        {
                            pageSize:3,//每页条数
                            total:this.props.total,
                            onChange:this.pageChange.bind(this),
                            current:this.state.info.page
                        }
                    }
                />;
                <Modal
                    title="提示"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    okText='确定'
                    cancelText='取消'
                    >
                    <p>你确定要删掉吗？</p>
                </Modal>
            </div>
        )
    }
}
function mapStateToProps(store){
    return {
        shoplist:store.good.goodlist,
        total:store.good.total
    }
}
function mapActionToProps(dispatch){
    return {
        getshop:(params)=>dispatch(getShop(params))
    }
}
export default connect(mapStateToProps,mapActionToProps)(Shop)