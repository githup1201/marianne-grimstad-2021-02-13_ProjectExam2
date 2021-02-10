import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Messages from "../admin/Messages";
import { NavLink } from "react-router-dom";


function ContactList() {
 
    
  return (
      <>
           <Container className="ContactList">
              <Card className="ContactList__item" style={{width: "21rem"}}>
                  <Card.Body className="ContactList__text">
                    <NavLink to="/admin/messages">
                    <h3 className="ContactList__header">Messages</h3></NavLink>
                    <hr />
                   <Messages /> 
                 </Card.Body>
              </Card>
           </Container>
      </>
   );
}


export default ContactList;