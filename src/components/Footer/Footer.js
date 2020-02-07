import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {

    render() {

    return (
        <div id="footer">
            <div className="container clear">
                <div className="row">
                    <div className="col-6">
                        <a href="mailto:hadijonathan@gmail.com"> <img id="mail-button" src="/images/mail.png" alt=""></img>Email</a></div>
                    <div className="col-6">
                        <a href="https://www.github.com/jonhadi"> <img id="github-button" src="/images/github.png" alt=""></img>Github</a>
                    </div>   
                </div>
                <div className="row">
                    <div className="col-6">
                        <a href="https://www.linkedin.com/in/jonhadi"> <img id="linkedin-button" src="/images/linkedin.png" alt=""></img>LinkedIn</a>
                    </div>
                    <div className="col-6">
                        <a href="https://www.instagram.com/jonflamo/"> <img id="instagram-button" src="/images/instagram.png" alt=""></img>Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default NavBar;