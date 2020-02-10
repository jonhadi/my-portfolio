import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {

    render() {        

    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container">
                <a className="navbar-brand" href="#top"><img id="logo" alt="" src="/images/logo.png"></img></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a id="home" className="nav-item nav-link" href="#top">Home</a>
                        <a id="story" className="nav-item nav-link" href="#story-container">Story</a>
                        <a id="portfolio" className="nav-item nav-link" href="#project-show">Portfolio</a>
                        <a id="contact" className="nav-item nav-link" href="#footer">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
    }
}

export default NavBar;