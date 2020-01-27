import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import projects from "../../data/projects";
import "./style.css";

class PortfolioContainer extends Component {

    render() {
        const storyComponents = projects.map(project => 
            <PortfolioCard
                id={project.id}
                key={project.id} 
                name={project.name}
                imgUrl={project.image} 
                link={project.url}
                description={project.description} 
            /> 
        )

    return (
        <div id="portfolio-container" className="container">
            <header id="project-show">Projects</header>
            <p id="statement"> Currently refactoring old projects.</p>

            <Container>
                <Row>
                    {storyComponents}
                </Row>
            </Container>
        </div>
    )
    }
}

export default PortfolioContainer;