import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import { BASE_URL, headers, PATCH } from "../../constants/api";
import DeleteHotel from "./DeleteHotel";

function EditHotel() {
    const defaultState = {
        name: "",
        email: "",
        image: "",
        price: "",
        maxGuests: "",
        lat: "",
        lng: "",
        description: "",
        selfCatering: "",
    };

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [hotel, setHotel] = useState(defaultState);

    let { id } = useParams();

    const options = { headers };
    const fetchUrl = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setHotel(json))
            .catch((error) => console.log(error));
    }, []);

    async function onSubmit(data) {
        console.log("data", data);

        const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
        await fetch(fetchUrl, updateOptions);
        history.push("/admin/hotels");
    }

    return (
        <>
           <Container className="EditHotel">
             <Form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="EditHotel__header">Edit Hotel</h3>
                    <Form.Group className="EditHotel__item">
                        <Form.Label className="EditHotel__label">Name</Form.Label>
                        <Form.Control className="EditHotel__text"name="name" defaultValue={hotel.name} placeholder="Enter a name for the hotel" ref={register} />
                    </Form.Group>
                    <Form.Group className="EditHotel__item">
                        <Form.Label className="EditHotel__label">Email</Form.Label>
                        <Form.Control className="EditHotel__text" name="email" defaultValue={hotel.email} placeholder="Enter an email address" ref={register} />
                    </Form.Group>
                    <Form.Group className="EditHotel__item">
                        <Form.Label className="EditHotel__label">Image URL</Form.Label>
                        <Form.Control className="EditHotel__text"  defaultValue={hotel.image} name="image" placeholder="" ref={register} />
                    </Form.Group>
                    <Form.Group className="EditHotel__item">
                        <Form.Label className="EditHotel__label">Price per person per night ($)</Form.Label>
                        <Form.Control className="EditHotel__text" defaultValue={hotel.price} name="price" placeholder="" ref={register} />
                    </Form.Group>
                    <Form.Group className="EditHotel__item">
                        <Form.Label className="EditHotel__label">Max guests</Form.Label>
                        <Form.Control className="EditHotel__text"  defaultValue={hotel.maxGuests} name="maxGuests" placeholder="" ref={register} />
                    </Form.Group>
                    <Form.Group className="EditHotel__item">
                        <Form.Label className="EditHotel__label">Google Cordinates Latitude</Form.Label>
                        <Form.Control className="EditHotel__text" defaultValue={hotel.lat} name="latitude" placeholder="" ref={register} />
                    </Form.Group>
                    <Form.Group className="EditHotel__item">
                        <Form.Label className="EditHotel__label">Google Cordinates Longitude</Form.Label>
                        <Form.Control className="EditHotel__text"  defaultValue={hotel.lng}name="longitude" placeholder="" ref={register} />
                    </Form.Group>
                    <Form.Group className="EditHotel__item">
                        <Form.Label className="EditHotel__label">Description</Form.Label>
                        <textarea className="EditHotel__text form-control" defaultValue={hotel.description} name="description" rows="5" placeholder="" ref={register}></textarea>
                    </Form.Group>
                    <Form.Group className="EditHotel__item">
                        <Form.Label className="EditHotel__label">Self-Catering</Form.Label>
                    <Row>
                     <Col>
                        <Form.Control className="EditHotel__text" name="selfCatering" defaultValue={hotel.selfCatering} ref={register} />
                     </Col>
                    </Row>
                    </Form.Group>
                        <Button className="EditHotel__button" type="submit">Update</Button>     
             </Form>
             <Container className="EditHotel__delete">
                 <DeleteHotel id={id} />
             </Container>
           </Container>
        </>
    );
}

export default EditHotel;