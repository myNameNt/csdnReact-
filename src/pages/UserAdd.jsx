import Add from '../components/Add'
import {connect} from 'react-redux'
import {requestAddUser} from '../store/actions.js'

const mapStateToProps =(state)=>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addUser: (name,age,gender)=>{
            dispatch(requestAddUser(name,age,gender))
        }
    }
}

const UserAdd = connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)

export default UserAdd