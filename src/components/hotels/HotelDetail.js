import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {BASE_URL, headers} from "../../constants/api";


function HotelDetail() {
    const [detail, setDetail] = useState([]);
    
    
    let { id } = useParams();
    let detailArray = [];
    
    const url = BASE_URL + "establishments/" + id;

    const options = { headers };
    
       useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
			.then(json => setDetail(json))
			.catch(error => console.log(error));
	}, [url]);
    
    
    
    return (
        <>
         	
            <Container>
              <Col xs={12} md={12}>
                <Card style={{ width: "38rem" }} className="HotelDetail">
			        <Card.Img variant="top" src={detail.image} className="HotelDetail__image" />
                    <Card.Body className="HotelDetail__item">
                        <Card.Title><h4 className="HotelDetail__header">{detail.name}</h4></Card.Title>
                          <p className="HotelDetail__text">{detail.description}</p>
                          <p className="HotelDetail__text">email: <span className="highlight">{detail.email}</span></p>
                          <p className="HotelDetail__text">max guests: <span className="highlight">{detail.maxGuests}</span></p>
                          <p className="HotelDetail__text">$ {detail.price} <span className="highlight">per night</span></p>
                          <p className="HotelDetail__text"> Google latitude: <span className="highlight">{detail.lat}</span></p>
                          <p className="HotelDetail__text"> Google longitude: <span className="highlight">{detail.lng}</span></p>
                        <Link to="/enquiry">
					      <Button className="HotelDetail__button">Book now</Button>
                        </Link>
                      </Card.Body>
                    </Card>
			       </Col>
                </Container>	                 
			  
        </>
    );
           
}


export default HotelDetail;