import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/SophiaLai.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              I have just graduated from an intensive full-time bootcamp course at <b className="purple"> Generation Australia </b> delivered in collaboration with  <b className="purple"> Academy Xi. </b>
              <br />
              <br /> I have completed an internship for a start-up company that is creating an <b className="purple"> animation series.</b> The series is unique and promotes <b className="purple"> Australian culture,</b> and also promotes <b className="purple"> environmental sustainability.</b>
              <br />
              <br />
              I am a fast learner, a team player and hard worker. I enjoy identifying and <b className="purple">solving problems</b> and developing solutions. I am willing to learn <b className="purple"> new skills </b> and to take on <b className="purple">new challenges.</b> &nbsp;
              <br />
              <br />
              I am passionate about  <b className="purple"> technologies. </b> I am currently undertaking a
              <i>
                <b className="purple">
                  {" "}
                  Google UX Design Course.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt={myImg} style={{ borderRadius: "50%" }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
