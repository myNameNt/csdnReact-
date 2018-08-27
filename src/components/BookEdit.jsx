import React from 'react'
import style from '../pages/mystyle.sass'
import formProvider from './FormProvider'
import FormItem from './FormItem'
import AutoComplete from './AutoComplete'

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
                <FormItem label="书名：" valid={name.valid} error={name.error}>
                    <input type="text" value={name.value || ''} onChange={(ev) => onFormChange('name', ev.target.value)} />
                </FormItem>
                <FormItem label="价格：" valid={age.valid} error={age.error}>
                    <input type="number" value={age.value || ''} onChange={(ev) => onFormChange('age', ev.target.value)} />
                </FormItem>
                <FormItem label="所有者：" valid={gender.valid} error={gender.error}>
                    <select onChange={(ev) => { onFormChange('gender', ev.target.value) }} value={gender.value}>
                        <option value="">请选择</option>
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>
                </FormItem>
                <FormItem label="所有者：" valid={owner_id.valid} error={owner_id.error}>
                    <AutoComplete
                        value={owner_id.value ? owner_id.value + '' : ''}
                        options={['10000（一韬）', '10001（张三）']}
                        onValueChange={value => onFormChange('owner_id', value)}
                    />
                </FormItem>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

EditUser = formProvider(formData)(EditUser)

export default EditUser