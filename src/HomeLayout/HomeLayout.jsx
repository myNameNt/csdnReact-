import React from 'react'

class HomeLayout extends React.Component{
    render(){
        const {title,children,className} = this.props
        return(
            <div className={className}>
                <header>
                    <h1>{title}</h1>
                </header>
                <main>
                    {children}
                </main>
            </div>
        )
    }
}
export default HomeLayout