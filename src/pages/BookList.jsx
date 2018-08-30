import {connect} from 'react-redux'
import List from '../components/BookList'
import {fetchPosts,requestHandleDel} from '../store/actions.js'

const mapStateToProps = (state)=>{
    return {
        bookList: state.postsBySubreddit.user
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

const BookList = connect(mapStateToProps,mapDispatchToProps)(List)

export default BookList