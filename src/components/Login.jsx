import React from 'react'
import HomeLayout from '../HomeLayout/HomeLayout'
import FormItem from '../components/FormItem'
import formProvider from '../components/FormProvider'
import PropTypes from 'prop-types'

const rules = {
    account: {
      defaultValue: '',
      rules: [
        {
          pattern (value) {
            return value.length > 0;
          },
          error: '请输入账号'
        }
      ]
    },
    password: {
      defaultValue: '',
      rules: [
        {
          pattern (value) {
            return value.length > 0;
          },
          error: '请输入密码'
        }
      ]
    }
  }

class Login extends React.Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(ev){
        ev.preventDefault()
        const {formValid, form: {account, password}} = this.props
        if(formValid){
            this.props.login(account.value, password.value)
        } else {
            console.log('填写信息不正确')
        }
    }
    render(){
        console.log(this.props)
        const {form: {account, password}, onFormChange} = this.props
        return(
            <HomeLayout title="请登录">
                <form onSubmit={this.handleSubmit}>
                <FormItem label="账号：" valid={account.valid} error={account.error}>
                    <input type="text" value={account.value} onChange={e => onFormChange('account', e.target.value)}/>
                </FormItem>
                <FormItem label="密码：" valid={password.valid} error={password.error}>
                    <input type="password" value={password.value} onChange={e => onFormChange('password', e.target.value)}/>
                </FormItem>
                <br/>
                <input type="submit" value="登录"/>
                </form>
            </HomeLayout>
        )
    }
}

Login.contextTypes = {
    router: PropTypes.object.isRequired
}

Login = formProvider(rules)(Login)

export default Login