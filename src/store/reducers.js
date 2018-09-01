import {ADD_USER,DEL_USER,REQUEST_POSTS,RECEIVE_POSTS,SELECT_SUBREDDIT,INVALIDATE_SUBREDDIT,CHANGE_TOKEN,CLEAR_TOKEN} from './actionTypes'
import {combineReducers} from 'redux'

function selectsubreddit(state='user',action){
    switch(action.type){
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

const invalidata = {
    isFetching: false,
    didInvalidate: false,
    items:[]
}

function posts(state=invalidata,action){
    switch(action.type){
        case INVALIDATE_SUBREDDIT:
            return Object.assign({},state,{didInvalidate: true})
        case REQUEST_POSTS:
            return Object.assign({},state,{
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({},state,{
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

const initialData = {
      user: {
        isFetching: true,
        didInvalidate: false,
        items: [
            {
                name:'nt',
                age:23,
                gender: '男',
                id:666666
            }
        ]
      },
      book:{
        isFetching: true,
        didInvalidate: false,
        items: []
      }
  }

function postsBySubreddit(state=initialData,action){
    switch(action.type){
        case ADD_USER:
            const nowItems = state[action.subreddit].items
            nowItems.push({
                name: action.name,
                age: action.age,
                gender: action.gender,
                id: action.id
            })
            return {...state,[action.subreddit]:{...state[action.subreddit],items:nowItems}}
        case DEL_USER:
            const newItem = state[action.subreddit].items
            const myitem = newItem.filter((item)=>{
                return item.id !== action.id
            })
            return {...state,[action.subreddit]:{...state[action.subreddit],items:myitem}}
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({},state,{
                [action.subreddit]: posts(state[action.subreddit],action)
            })
        default: return state
    }
}


function login(state=0,action){
    switch(action.type){
        case CHANGE_TOKEN:
            return action.token
        case CLEAR_TOKEN:
            return state
        default:
            return state
    }
}

const rootReducers = combineReducers({
    postsBySubreddit,
    selectsubreddit,
    token:login
})

export default rootReducers