import React from "react";
import Enquiries from "../admin/Enquiries";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";



function EnquiryList() {
  
    
   return (
      <>
            <Container className="EnquiryList" >
                   <Card className="EnquiryList__item" style={{width: "21rem"}}>
                    <Card.Body className="EnquiryList__text">
                       <NavLink to="/admin/enquiries">
                       <h3 className="EnquiryList__header">Enquiries</h3></NavLink>
                       <hr />
                      <Enquiries />
                    </Card.Body>   
                   </Card>
                 </Container>
       
      </>
   );
}
  

export default EnquiryList;