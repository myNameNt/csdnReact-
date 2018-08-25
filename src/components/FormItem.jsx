import React from 'react'

class FormItem extends React.Component{
    render(){
        const {valid,error,label,children} = this.props
        return(
            <div>
                <label className="useradd-item" >{label}</label>
                {children}
                {!valid && <span>{error}</span>}
            </div>
        )
    }
}

export default FormItem