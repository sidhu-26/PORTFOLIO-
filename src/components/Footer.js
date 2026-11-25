import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "./Common/SocialLinks";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
        <Row className="align-items-center">
          <Col md="4" className="footer-copywright">
            <h3>Siddaarth PT — AI Engineer</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} SID</h3>
          </Col>
          <Col md="4" className="footer-body">
            <SocialLinks iconClassName="home-social-icons" />
          </Col>
        </Row>
    </Container>
  );
}

export default Footer;
