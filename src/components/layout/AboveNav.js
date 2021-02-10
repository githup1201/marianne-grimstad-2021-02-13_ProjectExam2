import React from "react";
import Col from "react-bootstrap/Col";




function AboveNav() {
   return (
        <>
       
              <div className="AboveNav">
                <Col md={10}>
                     <img className="AboveNav__icons AboveNav__icons--envelope" src="/icons/envelope.svg" width="100%" height="auto" alt={"envelope icon"} />
                     <img className="AboveNav__icons" src="/icons/instagram.svg" width="100%" height="auto" alt={"instagram icon"}/>
                     <img className="AboveNav__icons AboveNav__icons--facebook" src="/icons/facebook.svg" width="100%" height="auto" alt={"facebook icon"}/>
                     <img className="AboveNav__icons" src="/icons/twitter.svg" width="100%" height="auto" alt={"twitter icon"}/>
                </Col>   
              </div>
                 
       
        </>
    );
}

export default AboveNav;