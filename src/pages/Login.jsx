import {connect} from 'react-redux'
import Login from '../components/Login'
import {fetchLogin} from '../store/actions'

const mapStateToProps = (state)=>{
    return {
        token: state.token
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        login: (account,password)=>{
            dispatch(fetchLogin(account,password))
        }
    }
}

const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login)

export default LoginContainer