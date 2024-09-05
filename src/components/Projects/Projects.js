import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import habitBuddy from '../../Assets/Projects/habit-buddy.png';
import slotify from '../../Assets/Projects/slotify.png';
import snap from '../../Assets/Projects/snap.png';
import ProjectCard from "./ProjectCards";

import Particle from '../Particle';

function Projects() {
    return (
        <Container fluid className="project-section">
        <Particle />
        <Container>
            <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
            </h1>
            <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
                <ProjectCard
                imgPath={slotify}
                isBlog={false}
                title="Slotify"
                description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                ghLink="https://github.com/maniram3112/slotify"
                demoLink="https://slotify-gilt.vercel.app/"
                />
            </Col>

            <Col md={4} className="project-card">
                <ProjectCard
                imgPath={habitBuddy}
                isBlog={false}
                title="Habit Buddy"
                description="Habit-Buddy is a React.js application designed to help users track their newly found habits regularly. With Habit-Buddy, users can easily monitor their progress by maintaining a daily streak, ensuring consistency and motivation in their habit-forming journey."
                ghLink="https://github.com/maniram3112/habit-buddy"
                demoLink="https://habit-buddy.netlify.app/"
                />
            </Col>

            <Col md={4} className="project-card">
                <ProjectCard
                imgPath={snap}
                isBlog={false}
                title="Snap Syndicate"
                description="This website is for Photography Club, created to showcase web development skills using React.js. It features a monthly section for the best shots of the year and a section for upcoming events and workshops."
                ghLink="https://github.com/maniram3112/photography_club"
                demoLink="https://snap-syndicate.netlify.app/"
                />
            </Col>

            {/* <Col md={4} className="project-card">
                <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="Plant AI"
                description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                ghLink="https://github.com/soumyajit4419/Plant_AI"
                demoLink="https://plant49-ai.herokuapp.com/"
                />
            </Col> */}

            {/* <Col md={4} className="project-card">
                <ProjectCard
                imgPath={suicide}
                isBlog={false}
                title="Ai For Social Good"
                description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                />
            </Col> */}

            <Col md={4} className="project-card">
                <ProjectCard
                // imgPath={emotion}
                // isBlog={false}
                // title="Face Recognition and Emotion Detection"
                // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                // // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
                />
            </Col>
            </Row>
        </Container>
        </Container>
    );
}

export default Projects;