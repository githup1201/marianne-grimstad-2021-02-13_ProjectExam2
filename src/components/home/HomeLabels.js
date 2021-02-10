import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



export function HomeLabels() {
   return (
       <>
            <Col md={6}>
                    <Container>
                      <Row className="HomeLabels">
                        <Col xs={12} md={6} className="HomeLabels__item">
                         <Jumbotron className="HomeLabels__image" style={{ backgroundImage: "url(images/hotel1.jpg)"}}>
                            <Container>
                              <Link to="/hotel">
                                <Button className="HomeLabels__button HomeLabels__button--link" variant="primary">Hotels</Button>
                              </Link>
                            </Container>
                         </Jumbotron>
                        </Col>
                        <Col xs={12} md={6} className="HomeLabels__item">
                         <Jumbotron className="HomeLabels__image" style={{ backgroundImage: "url(images/hotel2.jpg)"}}>
                            <Container>
                                <Button className="HomeLabels__button" variant="primary">B&Bs</Button>
                            </Container>
                         </Jumbotron>
                        </Col>
                        <Col xs={12} md={12} className="HomeLabels__item">
                         <Jumbotron className="HomeLabels__image" style={{ backgroundImage: "url(images/hotel3.jpg)"}}>
                            <Container>
                                <Button className="HomeLabels__button" variant="primary">Guesthouses</Button> 
                            </Container>
                         </Jumbotron>
                        </Col>
                      </Row>
                    </Container>
                 </Col> 
         
       </>
   );
}

export default HomeLabels;