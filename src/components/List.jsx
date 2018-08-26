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
    handleEdit(id){
        console.log(this.props,'list---')
        this.props.history.push({ pathname: '/useradd',state:{id}})
        // this.props.handleEdit(id,'user')
    }
    handleDel(user){
        this.props.requestHandleDel(user,'user')
    }
    onShowView(){
        console.log(this.props,'---show')
        let { items, isFetching} = this.props.userList

        if (isFetching){
            return (
                <tr>
                    <td>loading。。。。。。。</td>
                </tr>
            )
        } else {
            return items.map((item)=>
                (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                        <td>
                            <a href="javascript:;" onClick={(ev) => { this.handleEdit(item.id)}} >编辑</a>
                            &nbsp;
                            <a href="javascript:;" onClick={(ev) => { this.handleDel(item)}}>删除</a>
                        </td>
                    </tr>
                )
            )
        }

    }
    render(){
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
                        {this.onShowView()}
                    </tbody>
                </table>
            </HomeLayout>
        )
    }
}

export default List