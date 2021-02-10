import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import HomeLabels from "./HomeLabels";
import HomeText from "./HomeText";
import HomeShowcase from "./HomeShowcase";
import HotelList from "../hotels/HotelList";




export function Home() {
   return (
       <>
       
          <HomeShowcase /> 
           
            <Container>
              <Row>
                <HomeText />
                <HomeLabels />
              </Row>
            </Container>
            
          <HotelList />
         
      
       </>
   );
}

export default Home;