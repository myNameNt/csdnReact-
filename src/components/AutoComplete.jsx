import React from 'react'
import PropTypes from 'prop-types'

class AutoComplete extends React.Component{
    constructor(){
        super()
        this.state = {
            displayValue = '',
            activeItemIndex: -1
        }
    }
    render(){
        const {displayValue,activeItemIndex} = this.state
        const {value,options} = this.props
        return(
            <div>
                <input type="text" value={value} />
                {options.length > 0 && (
                    <ul>
                        {
                            options.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        {item.text || item }
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
                }
            </div>
        )
    }
}

AutoComplete.proptypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onValueChange: Proptypes.func.isRequired
}

export default AutoComplete