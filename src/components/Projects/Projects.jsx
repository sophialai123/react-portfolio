import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import coffeeWorld from "../../Assets/Projects/coffeeWorld.png";
import task from '../../Assets/Projects/task.png';
import filmFinder from '../../Assets/Projects/film-finder.png';
import ravenous from '../../Assets/Projects/ravenous.png';



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
              imgPath={task}
              title="Task Manager"
              description="TaskManager is an Object Oriented Programming web app to help users to organise tasks based on their task status. This project has used JavaScript localStorage, that means user data has been saved on the browser even after refreshing the page."
              ghLink="https://github.com/sophialai123/Task-Planner"
              demoLink='https://sophialai123.github.io/TaskManager/'
            />
          </Col>

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
              imgPath={coffeeWorld}
              title="Coffee Capsules World"
              description="Coffee Capsules World React App allows users to enter quantities input and hit add to cart button,users can view the added items by click shopping cart icon at the right top corner."
              ghLink="https://github.com/sophialai123/shopping-cart-react"
              demoLink="https://coffee-capsules-world.netlify.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ravenous}
              title="Ravenous React App"
              description="Ravenous is Yelp API React App allow users to search according to Best Match, Highest Rated and Most Reviewed on the top of search bar. Simply enter the food or business name and the location, and then press the Let's go button. It will take a few seconds to load the data."
              ghLink="https://github.com/sophialai123/ravenous-react-app"
              demoLink="https://ravenous-app-react.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
