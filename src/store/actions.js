import {ADD_USER,REQUEST_POSTS,RECEIVE_POSTS,SELECT_SUBREDDIT,INVALIDATE_SUBREDDIT,DEL_USER,CHANGE_TOKEN,CLEAR_TOKEN} from './actionTypes'
import {push} from 'react-router-redux' // 需要在action 里面做路由跳转 需要引入该 reducer ！！！
import axios from '../util/request'

export function addUser(name,age,gender,id,subreddit){
    return {
        type: ADD_USER,
        name,
        age,
        gender,
        id,
        subreddit
    }
}

export function handleDel(id,subreddit){
    return {
        type: DEL_USER,
        id,
        subreddit
    }
}


export function selectSubreddit(subreddit){
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidateSubreddit(subreddit){
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

export function requestPosts(subreddit){
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export function receivePosts(subreddit,json){
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data,
        receivedAt: Date.now()
    }
}

//登录action
export function changeToken(token){
    return {
        type: CHANGE_TOKEN,
        token: Number(token),
    }
}

export function clearToken(){
    return {
        type: CLEAR_TOKEN
    }
}
// end--
export function fetchLogin(account,password){
    return function(dispatch){
        axios({
            method: 'post',
            url:'/login',
            data: {
                account,
                password
            }
        }).then(res=>{
            console.log(res,'---登录成功')
            dispatch(changeToken(res.headers['access-token']))
            sessionStorage.setItem('access_token',res.headers['access-token'])
            window.location.href = '/'
        }).catch(err=>{
            dispatch(clearToken())
        })
    }
}

export function fetchPosts(subreddit){
    return function(dispatch){
        dispatch(requestPosts(subreddit))

        return axios({
            method:'get',
            url:`/${subreddit}`,
        }).then(res=>{
            dispatch(receivePosts(subreddit,res))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export function requestAddUser(name,age,gender,subreddit){
    return function(dispatch){
        axios({
            url:'/user',
            method: 'post',
            data: {name,age,gender}
        }).then((res)=>res.data)
        .then(res=>{
            if(res.id){
                const {name,age,gender,id} = res
                dispatch(addUser(name,age,gender,id,subreddit))
                dispatch(push('/userlist'))
            } else {
                alert('添加失败')
            }
        }).catch(err=>{
             debugger
            console.log(err)
        })
    }
}

export function requestEditUser(name, age, gender, id,subreddit) {
    return function(dispatch){
        axios({
            url: `user/${id}`,
            method: 'put',
            data: {name, age, gender}
        }).then(res=>res.data)
        .then(res=>{
            console.log('修改成功！',res)
            dispatch(push('/userlist'))
        }).catch(err=>{
            alert('修改失败')
        })
    }
}

export function requestHandleDel(user,subreddit){
    return function(dispatch){
        axios({
            url:`/user/${user.id}`,
            method: 'delete'
        }).then(res=>{
            console.log(res)
            dispatch(handleDel(user.id,subreddit))
        }).catch(err=>{
            console.log(err)
        })
    }
}