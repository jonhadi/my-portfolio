import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardHover from "./CardHover";
import "./style.css";

class PortfolioCard extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }

      render() {
            return (
                <Col 
                className="dropdown"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover} >
                <span>
                    <img className="grid-pic" src={this.props.imgUrl} alt="" />
                </span>
                <Row>
                {this.state.isHovering && <CardHover id={this.props.id} name={this.props.name} description={this.props.description} />}
                </Row>
                </Col>       
            )
        }
}

export default PortfolioCard;