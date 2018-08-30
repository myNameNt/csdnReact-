import React from 'react'
import style from '../styles/mystyle.sass'
import formProvider from './FormProvider'
import FormItem from './FormItem'

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

class EditUser extends React.Component {
    constructor(){
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount(){
        const {onSetFormValues,editTarget} = this.props
        if(editTarget){
            onSetFormValues(editTarget)
        }
    }
    onSubmit(ev) {
        ev.preventDefault()
        const { form: { name, age, gender}, formValid,editTarget} = this.props
        if (!formValid) {
            alert('信息填写错误')
            return
        }
        if(editTarget){
            const {id} = editTarget
            this.props.onEditUser(name.value, age.value, gender.value,id, 'user')
        } else{
            this.props.addUser(name.value, age.value, gender.value, 'user')
        }
        
    }
    render() {
        const { form: { name, age, gender }, onFormChange } = this.props
        return (
            <form onSubmit={this.onSubmit} className={style.form}>
                <FormItem label="用户名：" valid={name.valid} error={name.error}>
                    <input type="text" value={name.value || ''} onChange={(ev) => onFormChange('name', ev.target.value)} />
                </FormItem>
                <FormItem label="年龄：" valid={age.valid} error={age.error}>
                    <input type="number" value={age.value || ''} onChange={(ev) => onFormChange('age', ev.target.value)} />
                </FormItem>
                <FormItem label="性别：" valid={gender.valid} error={gender.error}>
                    <select onChange={(ev) => { onFormChange('gender', ev.target.value) }} value={gender.value}>
                        <option value="">请选择</option>
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>
                </FormItem>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

EditUser = formProvider(formData)(EditUser)

export default EditUser