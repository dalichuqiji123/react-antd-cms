import React from 'react'
import { 
    Form ,
    Input,
    Button,
    InputNumber,
    Switch,
    Upload,
    message
    } from 'antd'
import './style.scss'
import { UploadOutlined } from '@ant-design/icons';
import {fetchAddgood} from '@/utils/api'
import {CateSelect} from '@/components/common'
import { connect } from 'react-redux';
import {getDetial} from '@/store/actions/getgoodAction'
class addShop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            layout: {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 10,
                },
            },
            tailLayout: {
                wrapperCol: {
                    offset: 4,
                    span:10 ,
                },
            },
            imageUrl:"",
            goodsType:"",
            info:{
                name:'',
                price:'',
                detail:'',
                img:'',
            }
        }
    }
    componentDidMount(){
        let id=this.props.match.params.id
        if(id!=0){
            this.props.Detail({id})
            console.log(id)
        }else {
            let {info}=this.state
            info={}
            this.setState(info)
        }
        
    }
    shouldComponentUpdate(props){
        console.log(props.detial)
        let id=props.match.params.id
        if(id!=0){
            this.refs.form.setFieldsValue({
                goodsName:props.detial.goodsName,
                goodsDetail:props.detial.goodsDetail,
                goodsPrice:props.detial.goodsPrice,
                goodsType:props.detial.goodsType,
                goodsHot:props.detial.goodsHot
            })
            this.state.imageUrl=props.detial.goodsImg
        }
        return true;
    }
    imgChange(url){
        this.setState({imageUrl:url})
    }
    cateChange(e){
        this.setState({goodsType:e})
    }
    render() {
        let id=this.props.match.params.id
        let {info} = this.state
        const normFile = e => {
            
            console.log('Upload event:', e);
            if(e.file.response&&e.file&&e.file.response.data){
                this.setState({imageUrl:e.file.response.data.url})
                return
            }
            if (Array.isArray(e)) {
              return e;
            }
          
            return e && e.fileList;
          };
            const onFinish = values => {
                if(id==0){
                    let {goodsName,goodsType,goodsPrice,goodsHot,goodsDetail}=values
                    let data={
                        goodsName,
                        goodsType,
                        goodsPrice,
                        goodsHot,
                        goodsDetail,
                        goodsImg:this.state.imageUrl
                    }
                fetchAddgood(data).then(res=>{
                    message.success('添加成功！！！')
                    info={}
                    this.setState(info)
                })
                }else{
                    let {goodsName,goodsType,goodsPrice,goodsHot,goodsDetail}=values
                    let data={
                        goodsName,
                        goodsType,
                        goodsPrice,
                        goodsHot,
                        goodsDetail,
                        goodsImg:this.state.imageUrl,
                        id
                    }
                    fetchAddgood(data).then(res=>{
                        message.success('修改成功！！！')
                        this.props.history.push('/shoplist')
                    })
                }
            };
            const onFinishFailed = errorInfo => {
                console.log('Failed:', errorInfo);
            };
            const { TextArea } = Input;
            
          
    
        return (
            <div className='addgood'>
                <h1>
                    {id==0? '商品新增':'商品修改'}
                </h1>
                <Form
            {...this.state.layout}
            ref='form'
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            hideRequiredMark='false'
        >
            <Form.Item
                label="商品名称"
                name="goodsName"
                rules={[
                    {
                        required: true,
                        message: '请输入商品名称！！！',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="商品描述"
                name="goodsDetail"
                rules={[
                    {
                        required: true,
                        message: '请输入商品描述！！！',
                    },
                ]}
            >
                <TextArea rows={4}/>
            </Form.Item>
            <Form.Item
                label="商品价格"
                name="goodsPrice"
                rules={[
                    {
                        required: true,
                        message: '请输入商品价格！！！',
                    },
                ]}
            >
                <InputNumber/>
            </Form.Item>
            <Form.Item
                label="商品种类"
                name="goodsType"
                rules={[
                    {
                        required: true,
                        message: '请选择商品种类',
                    },
                ]}
            >
                <CateSelect  />
            </Form.Item>
            <Form.Item
                name="goodsImg"
                label="商品图片"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra="请上传小于2MB的图片"
            >
                <Upload name="file"
                    listType="picture"
                    // showUploadList={false}
                    action='http://localhost:8888/api/v1/upload/img' >
                    {this.state.imageUrl?<img  src={this.state.imageUrl}  />:<Button>  <UploadOutlined  /> 上传图片
                </Button>
               }
                   </Upload>
            </Form.Item>
            <Form.Item
                label="是否热销"
                name="goodsHot"
                valuePropName="checked"
            >
                <Switch />
            </Form.Item>
            <Form.Item {...this.state.tailLayout}>
                <Button type="primary" htmlType="submit">
                    {
                        id==0?'添加商品':'确认修改'
                    }
                </Button>
            </Form.Item>
        </Form>
            </div>
        )
    }
}
function mapStateToProps(store){
    return {
        detial:store.good.detial
    }
}
function mapActionToprops(dispatch){
    return {
        Detail:(params)=>dispatch(getDetial(params))
    }
}
export default connect(mapStateToProps,mapActionToprops)(addShop)