import EditUser from '../components/EditUser'
import {connect} from 'react-redux'
import { requestAddUser } from '../store/actions.js'

const mapStateToProps =(state)=>{
    return {
        title: '添加用户'
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addUser: (name,age,gender,subreddit)=>{
            dispatch(requestAddUser(name,age,gender,subreddit))
        }
    }
}

const UserAdd = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditUser)

export default UserAdd