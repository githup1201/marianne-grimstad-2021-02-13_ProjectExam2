import React from "react";
import HotelList from "./HotelList";
import Showcase from "../layout/Showcase";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";




function Hotel() {
   return (
        <>
       
                <Showcase />
                    <Container> 
                      <Col md={12} className="Hotel">
                        <h3 className="Hotel__header">Hotels</h3>   
                      </Col>
                     </Container>
                     <Container className="Hotel__item">
                        <HotelList /> 
                     </Container>
       
            
        </>
    );
}

export default Hotel;