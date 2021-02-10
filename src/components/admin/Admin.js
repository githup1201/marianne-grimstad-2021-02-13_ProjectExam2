import React from "react";
import ContactList from "../contact/ContactList";
import EnquiryList from "../enquiry/EnquiryList";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import AddHotel from "./AddHotel";
import Showcase from "../layout/Showcase";
import AdminLinks from "./AdminLinks";
import Jumbotron from 'react-bootstrap/Jumbotron';


function Admin() {
   return (
        <>
       
              <Showcase />
                 <Container className="Admin"> 
                    <Col  xs={12} md={6}>
                        <Container className="Admin__heading">  
                            <h3 className="Admin__title">Admin</h3>
                            <h2 className="Admin__title">Holidaze <span className="highlight">Bergen</span></h2>
                        </Container> 
                    </Col>
                 </Container>
                 <Container>
                    <Row>
                      <AdminLinks />
                        <Col xs={12} md={6} className="Admin__lists">
                           <EnquiryList />
                           <ContactList />
                        </Col> 
                    </Row>
                 </Container>
                
                <Jumbotron fluid>
                  <Col xs={12} md={12} className="Admin__addhotel">
                    <AddHotel />
                  </Col> 
                </Jumbotron>
        </>
    );
}

export default Admin;