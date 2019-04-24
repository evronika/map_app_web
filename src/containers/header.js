import React, { Component } from "react";
import {NavLink } from "react-router-dom"

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <NavLink to="/index/">Jobup</NavLink>
                    <NavLink to="/dashboard/">Dashboard</NavLink>
                    <NavLink to="/history/">History</NavLink>
                </header>
            </div>
            )

    }
}

export default Header;