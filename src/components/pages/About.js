import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

const style = {
    skills: {
        "text-align": "center",
        "align-items": "center",
        "color": "white",
        "padding": "15px"
    },
    container: {
        "background-color": "gray",
        "margin": "0 auto",
        "padding": "25px"
    }
}
export default function About() {
    return (
        <Container style={style.container} fluid="md">
            <Row style={style.skills}>
                <Col xs={12} md={6}>
            <Image fluid width={400} src={process.env.PUBLIC_URL + "/portfolio-photo.jpg"} rounded/>
                </Col>
                <Col style={style.skills} xs={12} md={6}>
                <p style={style.skills}>Ambitious and methodical Full Stack web developer a strong foundation in programming languages such as Java, JavaScript, C++, and  Python. I have experience in developing and testing software applications, as well as collaborating with cross-functional teams to achieve project goals. My educational background in Coding Boot Camp has provided me with the skills and knowledge necessary to excel in software development. I am focused on producing high-quality code that meets user requirements. With a dedication to continuous learning and a desire to contribute to a team of talented software engineers, I am excited to contribute my skills to a dynamic team focused on delivering innovative software solutions.</p>
                </Col>
                <Col style={style.skills} md={12}>
                    <h3>Technical Skills</h3>
                    <p>
                    Data Structure and Algorithms, Git, and GitHub, VSCode, Databases: MySQL and MongoDB<br/>Object-Oriented Programming: C++, Python, Java, JavaScript, Computer Networks, Shell Scripting<br/>MERN Stack (MongoDB, Express.js, React.js, Node.js).

                    </p>
                </Col>
            </Row>
        </Container>
    );
};