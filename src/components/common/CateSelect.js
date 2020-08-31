import React from 'react'
import {connect} from 'react-redux'
import {Select} from 'antd'
import {getcateAction} from '@/store/actions/getcatesAction'
class CateSelect extends React.Component{
    componentDidMount(){
        this.props.cate()
    }
    creactlist(){
        let {cates} = this.props
        return cates.map(ele=>(
                <Select.Option value={ele.cate}
                key={ele._id}
                >{ele.cate_zh}</Select.Option>
        )) 
    }
    render(){
        return(
            <Select
            placeholder='请选择商品品类'
            value={this.props.value}
            onChange={(val)=>this.props.onChange(val)}
            allowClear='true'
            >
                {this.creactlist()}
            </Select>
        )
    }
}
function mapStateToProps(store){
    return {
        cates:store.good.cates
    }
}
function mapActionToProps(dispatch){
    return {
        cate:(params)=>dispatch(getcateAction(params))
    }
}
export default connect(mapStateToProps,mapActionToProps)(CateSelect)




