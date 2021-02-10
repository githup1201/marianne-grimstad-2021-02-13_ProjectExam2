import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



export function HomeShowcase() {
   return (
       <>
           <Jumbotron className="HomeShowcase" style={{ backgroundImage: "url(images/showcase.jpg)"}}>
              <Container className="HomeShowcase__item">
                <h1 className="HomeShowcase__header">Welcome to Bergen</h1>
                  <p className="HomeShowcase__text">Hotels - B&B & Guesthouses</p>
                  <Link to="/enquiry">
                     <Button className="HomeShowcase__button" variant="primary">Book now</Button>
                  </Link>
              </Container>
           </Jumbotron> 
       </>
   );
}

export default HomeShowcase;