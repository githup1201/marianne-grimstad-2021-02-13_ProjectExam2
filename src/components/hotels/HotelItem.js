import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";



function HotelItem({ id, name, image, description, email, maxGuests, price}) {
	return (
      
		   
            <Row className="HotelItem">
               <Col xs={12} md={6} className="HotelItem__item">
			     <Card.Img variant="top" src={image} className="HotelItem__image" alt={"Hotelroom"} />
               </Col>
               <Col xs={12} md={6} className="HotelItem__description">
				<h4 className="HotelItem__header">{name}</h4>
                    <p className="HotelItem__text"> {description}</p>
                    <p className="HotelItem__text">max guests: {maxGuests}</p>
                    <p className="HotelItem__text">$ {price} per night</p>
				    <Link to={"hotels/hotel/" +id}>
					   <Button className="HotelItem__button">View</Button>
				    </Link>
			   </Col>
            </Row>     
       
	);
}

HotelItem.propTypes = {
    id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, 
    maxGuests: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired, 
};

export default HotelItem;