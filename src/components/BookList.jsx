import React from 'react'
import HomeLayout from '../HomeLayout/HomeLayout'
class BookList extends React.Component{
    constructor(){
        super()
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDel = this.handleDel.bind(this)
    }
    componentDidMount(){
        this.props.getList('book')
    }
    handleEdit(id){
        this.props.history.push({ pathname: '/bookedit',state:{id}})
    }
    handleDel(user){
        this.props.requestHandleDel(user,'book')
    }
    onShowView(){
        let { items, isFetching} = this.props.bookList
        if (isFetching){
            return (
                <tr>
                    <td>loading。。。。。。</td>
                </tr>
            )
        } else {
            return items.map((book)=>
                (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.name}</td>
                        <td>&yen;{book.price / 100}</td>
                        <td>{book.owner_id}</td>
                        <td>
                            <a href="javascript:void(0)" onClick={() => this.handleEdit(book)}>编辑</a>
                            &nbsp;
                            <a href="javascript:void(0)" onClick={() => this.handleDel(book)}>删除</a>
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

export default BookList