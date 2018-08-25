import React from 'react'
import HomeLayout from './HomeLayout'
class List extends React.Component{
    constructor(){
        super()
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDel = this.handleDel.bind(this)
    }
    componentDidMount(){
        this.props.getList('user')
    }
    handleEdit(ev){
        this.props.handleEdit()
    }
    handleDel(user){
            this.props.requestHandleDel(user,'user')
    }
    render(){
        const {userList:{items}} = this.props
        console.log(items)
        return(
            <HomeLayout title='用户列表'>
                <table>
                    <thead>
                        <tr>
                            <th>用户ID</th>
                            <th>用户名</th>
                            <th>性别</th>
                            <th>年龄</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item=>{
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <a href="javascript:;" onClick={(ev)=>{this.handleEdit(item)}} >编辑</a>
                                        &nbsp;
                                        <a href="javascript:;" onClick={(ev)=>{this.handleDel(item)}}>删除</a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </HomeLayout>
        )
    }
}

export default List