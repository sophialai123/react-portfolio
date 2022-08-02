
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import { MdAttachEmail } from 'react-icons/md';

import { BsMessenger } from 'react-icons/bs'

export default function Contact() {
  return (
    <Container fluid className="contact-section">
      <h1 style={{ textAlign: "center" }}>Get In Touch
        <span className="wave" role="img" aria-labelledby="wave">
          🤝
        </span></h1>
      <Row className='contact-options'>
        <Col className='contact-option'>
          <a href='mailto:sophia852686@gmail.com' target="_blank" rel="noopener noreferrer"> <MdAttachEmail className='contact-icon' /></a>
          <h4>Email</h4>
          <a href='mailto:sophia852686@gmail.com' target="_blank" rel="noopener noreferrer">Send Email</a>
        </Col>
        <Col className='contact-option'>
          <a href='https://m.me/pingping.lai2' target="_blank" rel="noopener noreferrer"><BsMessenger className='contact-icon' /></a>
          <h4>Messenger</h4>
          <a href='https://m.me/pingping.lai2' target="_blank" rel="noopener noreferrer">Send Messages</a>
        </Col>
      </Row>
      <Form>
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" className="mb-3" />
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter messages...." />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" className='mb-4' size="lg">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}
