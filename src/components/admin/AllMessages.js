import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Messages from "../admin/Messages";


function Allmessages() {
   return (
        <>
      
           <Jumbotron fluid>
             <Col md={12}>
                <Container className="Allmessages">
                    <Card className="Allmessages__item" style={{width: "21rem"}}>
                        <Card.Body className="Allmessages__text">
                          <h3 className="Allmessages__header">Messages</h3>
                          <hr />
                          <Messages />
                        </Card.Body>   
                    </Card>
                </Container>
             </Col>                       
           </Jumbotron>
        </>
    );
}

export default Allmessages;