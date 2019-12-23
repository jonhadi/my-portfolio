import React, { Component } from "react";
import "./styles.css";

class NavBar extends Component {

    render() {

    return (
        <nav className="navbar navbar-expand-sm">

                <a className="navbar-brand" href="#top"> <b>Jon Hadi</b> </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a id="home" className="nav-item nav-link active" href="#top">Home</a>
                    <a id="learn" className="nav-item nav-link" href="#story-container">Story</a>
                    <a id="events" className="nav-item nav-link" href="#project-show">Portfolio</a>
                    <a id="test" className="nav-item nav-link" href="#game-container">Contact</a>
                </div>
            </div>
        
        </nav>
    )
    }
}

export default NavBar;