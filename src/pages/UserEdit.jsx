import React from 'react'
import EditUser from '../components/EditUser'
import HomeLayout from '../components/HomeLayout'
import axios from '../util/request.js'

import {connect} from 'react-redux'
import {requestEditUser} from '../store/actions.js'

class UserEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            user: null
        }
        this.onEditUser = this.onEditUser.bind(this)
    }
    componentDidMount(){
        const {id} = this.props.location.state
        if(id){
            axios({
                url:`/user/${id}`
            }).then( res=>{
                console.log(res)
                this.setState({
                    user: res.data
                })
            } ).catch(err=>{
                console.log(err)
            })
        } else{
            this.props.history.push('/userlist')
        }
    }
    onEditUser(name,age,gender,id){
        this.props.editUser(name,age,gender,id, 'user')
    }
    render(){
        const {user} = this.state
        return(
            <HomeLayout title='编辑用户'>
                {
                    user ? <EditUser onEditUser={this.onEditUser} editTarget={user} /> : '获取该用户信息中......'
                }
            </HomeLayout>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        editUser: (name,age,gender,id,subreddit)=>{
            dispatch(requestEditUser(name,age,gender,id,subreddit))
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        userList: state
    }
}


UserEdit = connect(mapStateToProps,mapDispatchToProps)(UserEdit)  //dispatch 必须放在第二个参数
export default UserEdit