import React from 'react'
import style from '../styles/mystyle.sass'
import formProvider from './FormProvider'
import FormItem from './FormItem'
import AutoComplete from './AutoComplete'

const formData = {
    name: {
      defaultValue: '',
      rules: [
        {
          pattern (value) {
            return value.length > 0;
          },
          error: '请输入书名'
        }
      ]
    },
    price: {
      defaultValue: 0,
      rules: [
        {
          pattern: /^\d+$/,
          error: '请输入一个整数'
        },
        {
          pattern (value) {
            return value > 0;
          },
          error: '价格必须大于0'
        }
      ]
    },
    owner_id: {
      defaultValue: 0,
      rules: [
        {
          pattern: /^\d+$/,
          error: '请输入合法的用户ID'
        },
        {
          pattern (value) {
            return value !== 0;
          },
          error: '请输入用户ID'
        }
      ]
    }
  }

class BookEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            recommendUsers: []
        }
        this.onSubmit = this.onSubmit.bind(this)
        const {onSetFormValues,editTarget} = this.props
        if(editTarget){
            onSetFormValues(editTarget)
        }
        
    }
    componentDidMount(){
        
    }
    onSubmit(ev) {
        ev.preventDefault()
        const {form: {name, price, owner_id}, formValid, editTarget} = this.props
        if (!formValid) {
            alert('信息填写错误')
            return
        }
        if(editTarget){
            const {id} = editTarget
            this.props.onEditBook(name.value, price.value, owner_id.value,id, 'book')
        } else{
            this.props.addBook(name.value, price.value, owner_id.value, 'book')
        }
        
    }
    render() {
        const {recommendUsers} = this.state
        const { form: { name, price, owner_id }, onFormChange } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <FormItem label="书名：" valid={name.valid} error={name.error}>
                    <input type="text" value={name.value} onChange={e => onFormChange('name', e.target.value)}/>
                </FormItem>
        
                <FormItem label="价格：" valid={price.valid} error={price.error}>
                    <input type="number" value={price.value || ''} onChange={e => onFormChange('price', +e.target.value)}/>
                </FormItem>
        
                <FormItem label="所有者：" valid={owner_id.valid} error={owner_id.error}>
                  <AutoComplete
                      value={owner_id.value ? owner_id.value + '' : ''}
                      options={recommendUsers}
                      onValueChange={value => this.handleOwnerIdChange(value)}
                  />
                </FormItem>
                <br/>
                <input type="submit" value="提交"/>
          </form>
        )
    }
}

BookEdit = formProvider(formData)(BookEdit)

export default BookEdit