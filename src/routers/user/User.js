import React from 'react'
import { getUserList } from '@/store/actions/getuserAction'
import { connect } from 'react-redux'
class User extends React.Component {
    componentDidMount() {
        this.props.init({})
    }
    creatList() {
        let { users } = this.props
        return users.map(ele =>
            <div key={ele._id}>
                <span>{ele._id}</span>
                <span>----</span>
                <span>{ele.username}</span>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.creatList()}
            </div>
        )
    }
}
function mapStateToProps(store) {
    return {
        users: store.user.list
    }
}
function mapActionToProps(dispatch) {
    return {
        init: (params) => dispatch(getUserList(params))
    }
}
export default connect(mapStateToProps, mapActionToProps)(User)