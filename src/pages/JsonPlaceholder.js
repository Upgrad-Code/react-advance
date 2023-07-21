import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Users from '../components/Users';
import Posts from '../components/Posts';

const JsonPlaceholder = () => {
  return (
    <div className="json-placeholder">
      <p>Json Placeholder</p>
      <Container>
        <Row>
          <Col md={6}>
            <Users />
          </Col>
          <Col md={6}>
            <Posts isActive={true} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JsonPlaceholder;
