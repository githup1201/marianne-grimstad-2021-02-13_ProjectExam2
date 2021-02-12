import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Enquiries from "../admin/Enquiries";
import Jumbotron from 'react-bootstrap/Jumbotron';


function Allenquiries() {
   return (
        <>
           <Jumbotron fluid className="Allenquiries__jumbo">
             <Col md={12}>
                <Container className="Allenquiries">
                    <Card className="Allenquiries__item" style={{width: "21rem"}}>
                        <Card.Body className="Allenquiries__text">
                          <h3 className="Allenquiries__header">Enquiries</h3>
                          <hr />
                          <Enquiries />
                        </Card.Body>   
                    </Card>
                </Container>
             </Col>                       
           </Jumbotron>
        </>
    );
}

export default Allenquiries;