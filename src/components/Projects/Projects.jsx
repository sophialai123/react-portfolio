import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coffeeWorld from "../../Assets/Projects/coffeeWorld.png";
import task from '../../Assets/Projects/task.png';
import filmFinder from '../../Assets/Projects/film-finder.png';
import healthyfood from '../../Assets/Projects/healthyfood.png';



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={filmFinder}
              title="Film Finder"
              description=" Film Finder is TMDb API movie discovery app that will recommend random movies by genre. It allow users to fillter genre at search bar, and then press let's play button to view the result."
              ghLink="https://github.com/sophialai123/film-finder"
              demoLink="https://sophialai123.github.io/film-finder/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={healthyfood}
              title="Super Healthy Shopping Cart"
              description="Super Healthy Shopping Cart is built using TypeScript React,React Bootstrap and localStorage."
              ghLink="https://github.com/sophialai123/typeScript-shopping-cart"
              demoLink="https://super-healthy.netlify.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={coffeeWorld}
              title="Coffee Capsules World"
              description="Coffee Capsules World React App allows users to enter quantities input and press add to cart button,users can view the added items by click shopping cart icon at the right top corner."
              ghLink="https://github.com/sophialai123/shopping-cart-react"
              demoLink="https://coffee-capsules-world.netlify.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={task}
              title="Task Manager"
              description="TaskManager is an Object Oriented Programming web app to help users to organise tasks based on their task status. This project has used JavaScript localStorage, that means user data has been saved on the browser even after refreshing the page. Tasks can be edited, delelted and also changed base on task status."
              ghLink="https://github.com/sophialai123/TaskManager"
              demoLink='https://sophialai123.github.io/TaskManager/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
