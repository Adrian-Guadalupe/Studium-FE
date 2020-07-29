import React, { Component } from "react";
import "./NavBarDashStyles.css";

class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                className={visibility}>
                <div id="close"><img src={require("../../images/close.svg")} onMouseDown={this.props.handleMouseDown} /></div>
                <div id="linkWrapper">
                    <div className="iconWrapper">
                        <img src={require("../../images/home.svg")} className="icon" /><a href="/dashboard">Home</a>
                    </div>
                    <div className="iconWrapper">
                        <img src={require("../../images/user.svg")} className="icon" /><a href="/account">Account</a>
                    </div>
                    <div className="iconWrapper">
                        <img src={require("../../images/logout.svg")} className="icon" /><a href="/logout">Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;