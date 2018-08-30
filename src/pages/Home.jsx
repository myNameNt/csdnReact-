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
                        <Link to="/booklist">查看书籍列表</Link>
                    </li>
                    <li>
                        <Link to="/bookadd">添加书籍</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home