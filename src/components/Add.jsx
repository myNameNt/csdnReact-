import React from 'react'
import style from '../pages/mystyle.sass'
import formProvider from './FormProvider'
import FormItem from './FormItem'
import HomeLayout from '../HomeLayout/HomeLayout'

const formData = {
    name: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return value.length > 0;
          },
          error: '请输入用户名'
        },
        {
          pattern: /^.{1,4}$/,
          error: '用户名最多4个字符'
        }
      ]
    },
    age: {
      defaultValue: 0,
      rules: [
        {
          pattern: function (value) {
            return value >= 1 && value <= 100;
          },
          error: '请输入1~100的年龄'
        }
      ]
    },
    gender: {
      defaultValue: '',
      rules: [
        {
          pattern: function (value) {
            return !!value;
          },
          error: '请选择性别'
        }
      ]
    }
  }

class Add extends React.Component{
    
    onSubmit(ev){
        ev.preventDefault()
        const { form:{name,age,gender},formValid } = this.props
        if(!formValid){
            alert('信息填写错误')
            return
        }
        console.log(this.props)
        this.props.addUser(name.value,age.value,gender.value,'user')
    }
    render(){
        const {form:{name,age,gender},onFormChange} = this.props
        return(
            <HomeLayout className={style.useradd} title='添加用户' >
                <form onSubmit={(e)=>this.onSubmit(e)} className={style.form}>
                    <FormItem label="用户名：" valid={name.valid} error={name.error}>
                        <input type="text" value={name.value || ''} onChange={(ev)=>onFormChange('name',ev.target.value)} />
                    </FormItem>
                    <FormItem label="年龄：" valid={age.valid} error={age.error}>
                        <input type="number" value={age.value || ''} onChange={(ev)=>onFormChange('age',ev.target.value)} />
                    </FormItem>
                    <FormItem label="性别：" valid={gender.valid} error={gender.error}>
                        <select onChange={(ev)=>{onFormChange('gender',ev.target.value)}} value={gender.value}>
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                    </FormItem>
                    <input type="submit" value="提交" />
                </form>
            </HomeLayout>
        )
    }
}

Add = formProvider(formData)(Add)

export default Add