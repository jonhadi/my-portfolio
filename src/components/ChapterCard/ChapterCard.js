import React, { Component } from "react";
import "./style.css";

class ChapterCard extends Component {

    render() {
        return (
            <div className="chapter" id={this.props.id}>
                
                <p><img className="grid-pic" src={this.props.imgUrl} alt="" /> {this.props.text}</p>
            </div>
        )
    }
}

export default ChapterCard;