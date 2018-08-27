import React from 'react'
import AutoComplete from './AutoComplete'

class BookEdit extends React.Component{
    constructor(){
        super()
    }
    render(){
        const {form: {name, price, owner_id}, onFormChange} = this.props
        return(
            <div></div>
        )
    }
}