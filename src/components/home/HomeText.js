import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";




export function HomeText() {
   return (
       <>
             <Col md={6} className="HomeText">
                <Container>  
                    <h3 className="HomeText__title">About us</h3>
                    <h2 className="HomeText__header">Holidaze <span className="highlight">Bergen</span></h2>
                    <p className="HomeText__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Container> 
             </Col>     
      
       </>
   );
}

export default HomeText;