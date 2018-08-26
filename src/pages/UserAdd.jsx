import EditUser from '../components/EditUser'
import {connect} from 'react-redux'
import { requestAddUser, requestEditUser} from '../store/actions.js'

const mapStateToProps =(state)=>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addUser: (name,age,gender,subreddit)=>{
            dispatch(requestAddUser(name,age,gender,subreddit))
        },
        editUser: (name,age,gender,id,subreddit)=>{
            dispatch(requestEditUser(name, age, gender, id, subreddit))
        }
    }
}

const UserAdd = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditUser)

export default UserAdd