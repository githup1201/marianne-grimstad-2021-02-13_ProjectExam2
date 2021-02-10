import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";



function AdminLinks() {
   return (
      <>
       
                <Col md={6} className="AdminLinks">
                    <Container>
                      <Card className="AdminLinks__item" style={{width: "21rem"}}>
                        <Card.Body className="AdminLinks__text">
                            <p><Link className="AdminLinks__link" to="/admin/enquiries">Enquiries</Link></p>
                            <p><Link className="AdminLinks__link" to="/admin/messages">Messages</Link></p>
                            <p><Link className="AdminLinks__link" to="/admin/hotels">Edit Establishments</Link></p>
                            <p><Link className="AdminLinks__link" to="/admin/hotels/add">Create new Establishment</Link></p>
                        </Card.Body>
                        <Card.Img className="AdminLinks__image" src="/images/hotel2.jpg" alt={"hotelroom"}/>
                      </Card>
                    </Container>
                </Col>
       
      </>
    );
}

export default AdminLinks;