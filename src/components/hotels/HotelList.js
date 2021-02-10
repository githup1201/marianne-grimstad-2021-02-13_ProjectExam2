import React,{useState,useEffect} from "react";
import Col from "react-bootstrap/Col";
import HotelItem from "./HotelItem";
import {BASE_URL, headers} from "../../constants/api";
import Search from "./Search";



function HotelList() {
  const [hotel,setHotel]=useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  
   const url = BASE_URL + "establishments";
   const options = { headers };
    
   useEffect(() => {
    fetch(url, options)
      .then(function(response){
        return response.json();
        
      })
      .then(function(hotels) {
        setHotel(hotels);
        console.log(hotels);
        setFilteredHotels(hotels);
      })
      .catch(error => console.log(error));
  },[url]);
    
    
     const filterHotel = function(e) {
        const searchValue = e.target.value.toLocaleLowerCase();
        const filteredArray = hotel.filter(function(hot) {
            const lowerCaseName = hot.name.toLowerCase();
            
            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });
        
        setFilteredHotels(filteredArray);
    };
    
  return (
      <>
            
            <Search conductSearch={filterHotel} />
           
            
              {filteredHotels.map((hotel)=> {
                const {id, name, image, description, email, maxGuests, price} = hotel;
      
                return (
    
                    <Col key={name}>
                       <HotelItem id={id} name={name} image={image} description={description} email={email} maxGuests={maxGuests} price={price} />
                    </Col>
                
                );
            
           } )}         
          
    </>
   );
}

export default HotelList;