import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import UserAdd from '../src/pages/UserAdd'
import Home from '../src/pages/Home'
import UserList from '../src/pages/UserList'
class App extends React.Component{

    render(){
        return(
            <Router>
                <div>
                    <h3>欢迎来到路由空间</h3>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/useradd" component={UserAdd} />
                        <Route path="/userlist" component={UserList} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App