import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://javaguides.net" className="navbar-brand">HOME</a></div>
                        <div><a href="https://javaguides.net" className="navbar-brand">Employees</a></div>
                        <div><a href="https://javaguides.net" className="navbar-brand">Upload</a></div>
                        <div><a href="https://javaguides.net" className="navbar-brand">FireBase</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
