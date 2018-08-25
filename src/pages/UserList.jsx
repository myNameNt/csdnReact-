import {connect} from 'react-redux'
import List from '../components/List'
import {fetchPosts,requestHandleDel} from '../store/actions.js'

const mapStateToProps = (state)=>{
    return {
        userList: state.postsBySubreddit.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getList: (subreddit)=>{
            dispatch(fetchPosts(subreddit))
        },
        requestHandleDel: (user,subreddit)=>{
            dispatch(requestHandleDel(user,subreddit))
        }
    }
}

const UserList = connect(mapStateToProps,mapDispatchToProps)(List)

export default UserList