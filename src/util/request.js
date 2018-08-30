import axios from 'axios'
const newAxios = axios.create({
    baseURL:'http://localhost:3000',
    timeout:1000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'access-token': sessionStorage.getItem('access_token') || ''
    }
})

newAxios.interceptors.request.use(
    config=>{
        console.log(config,'config---t')
        return config
    },
    err=>{
        console.log(err)
        Promise.reject(err)
    }
)

newAxios.interceptors.response.use(
    response=>{
        console.log(response,'回复的撒胡菊')
        window.history.push('/')
        return response
    },
    error=>{
        if(error && error.response){
            console.log(error.response.status)
            switch(error.response.status){
                case 401:
                window.location.href = '/login'
                    break
                default:
                    return
            }
        }
        return Promise.reject(error)
    }
)

function request(method,url,body){
    method = method.toUpperCase()
    if(method === 'GET'){
        body = undefined
    }

    return  new Promise((resolve,reject)=>{
        newAxios({
            url,
            method,
            data: body
        }).then(res=>{
            if (res.status === 401) {
                //history.push('/login');
                return Promise.reject('Unauthorized.');
              } else {
                const token = res.headers.get('access-token');
                if (token) {
                  sessionStorage.setItem('access_token', token);
                }
                resolve(res)
            }
        }).catch(err=>{
            reject(err)
        })
    })
}

export const get = (url) => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);

export default newAxios