import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <ul>
                    <li>
                        <Link to="/useradd">添加信息</Link>
                    </li>
                    <li>
                        <Link to="/userlist">查看用户信息</Link>
                    </li>
                    <li>
                        <Link to="/detele">删除信息</Link>
                    </li>
                    <li>
                        <Link to="/examine">查看信息</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home