import React from 'react'
import {
    Router,
    Route,
    Switch
} from 'react-router-dom'
import UserAdd from '../src/pages/UserAdd'
import UserEdit from '../src/pages/UserEdit'
import Home from '../src/pages/Home'
import UserList from '../src/pages/UserList'
class App extends React.Component{

    render(){
        const {history} = this.props
        return(
            <Router history={history}>
                <div>
                    <h3>欢迎来到路由空间</h3>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/useradd" component={UserAdd} />
                        <Route path="/userlist" component={UserList} />
                        <Route path="/useredit" component={UserEdit} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App