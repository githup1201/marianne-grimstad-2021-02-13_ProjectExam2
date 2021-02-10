import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";






function Footer() {
   return (
      <>
       
            <Jumbotron fluid className="Footer">
              <Container>
                <Col md={12} className="Footer__item">
                 <h3 className="Footer__header">Holidaze</h3>
                  <p className="Footer__links">Home</p>
                  <p className="Footer__links">Contact</p>
                  <p className="Footer__links">Admin</p>
                </Col>     
              </Container>
                <hr className="Footer__hr" />
              <Container>
                <Col md={12} className="Footer__item Footer__item--center">
                    <img className="Footer__icons"src="/icons/twitter.svg" width="100%" height="auto"alt={"twitter icon"} />
                    <img className="Footer__icons"src="/icons/facebook.svg" width="100%" height="auto" alt={"facebook icon"}/>
                    <img className="Footer__icons"src="/icons/instagram.svg" width="100%" height="auto" alt={"instagram icon"}/> 
                </Col>     
              </Container>
              <Container>
                <Col md={12} className="Footer__item">
                  <p className="Footer__copy">&copy;2021Holidaze</p>
                </Col>     
              </Container>
            </Jumbotron>          
         
       
      </>
    );
}

export default Footer;