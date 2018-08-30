import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/auto-complete.sass'

class AutoComplete extends React.Component{
    constructor(){
        super()
        this.state = {
            displayValue :'',
            activeItemIndex: -1
        }
    }
    render(){
        const {displayValue,activeItemIndex} = this.state
        const {value,options} = this.props
        return(
            <div className={style.wrapper}>
                <input type="text" value={value} />
                {options.length > 0 && (
                    <ul className={style.options}>
                        {
                            options.map((item,index)=>{
                                return (
                                    <li key={index} className={activeItemIndex === index ? style.active : ''}>
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

AutoComplete.propTypes  = {
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onValueChange: PropTypes.func.isRequired
}

export default AutoComplete