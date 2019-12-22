import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ChapterCard from "../ChapterCard/ChapterCard";
import chapters from "../../data/chapters";
import "./style.css";

class StoryContainer extends Component {

    render() {
        const storyComponents = chapters.map(chapter => 
            <ChapterCard
                id={chapter.id}
                key={chapter.id} 
                imgUrl={chapter.image} 
                text={chapter.text} 
            /> 
        )

    return (
        <div id="story-container">
            <Container>
                <Row>
                    {storyComponents}
                </Row>
            </Container>
        </div>
    )
    }
}

export default StoryContainer;