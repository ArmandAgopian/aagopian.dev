'use client';
import {Button, Col, Container, Row} from '@nextui-org/react';

export default function App() {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <Button>Github</Button>
        </Col>
        <Col>
          <Button>Linkedin</Button>
        </Col>
        <Col>
          <Button>Resume</Button>
        </Col>
      </Row>
    </Container>
  );
}
