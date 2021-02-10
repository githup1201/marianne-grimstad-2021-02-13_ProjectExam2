import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import { BASE_URL, headers } from "../../constants/api";

function AddHotel() {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    async function onSubmit(data) {
        console.log("data", data);

        const url = BASE_URL + "establishments";

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        await fetch(url, options);

        history.push("/admin/hotels");
    }

    return (
      <>
       
          <Container className="AddHotel">        
            <Form onSubmit={handleSubmit(onSubmit)} className="Addhotel__form">
                <h3 className="AddHotel__header">Create new establishment</h3>
                <hr className="AddHotel__hr" />
                
                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">Establishment name</Form.Label>
                    <Form.Control className="AddHotel__text" name="name" placeholder="Enter a name for the hotel" ref={register} />
                </Form.Group>

                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">Establisment email</Form.Label>
                    <Form.Control className="AddHotel__text" name="email" placeholder="Enter an email address" ref={register} />
                </Form.Group>

                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">Image URL</Form.Label>
                    <Form.Control className="AddHotel__text" name="image" placeholder="Enter an image for the hotel" ref={register} />
                </Form.Group>

                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">Price per person per night ($)</Form.Label>
                    <Form.Control className="AddHotel__text" name="price" placeholder="Enter a price per person per night" ref={register} />
                </Form.Group>

                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">Max guests</Form.Label>
                    <Form.Control className="AddHotel__text" name="maxguests" placeholder="Enter max guests" ref={register} />
                </Form.Group>

                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">Google Cordinates Latitude</Form.Label>
                    <Form.Control className="AddHotel__text" name="latitude" placeholder="Enter latitude" ref={register} />
                </Form.Group>

                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">Google Cordinates Longitude</Form.Label>
                    <Form.Control className="AddHotel__text" name="longitude" placeholder="Enter longitude" ref={register} />
                </Form.Group>

                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">Description</Form.Label>
                    <textarea className=" AddHotel__text form-control" name="description" rows="5" placeholder="Enter a description of the hotel" ref={register}></textarea>
                </Form.Group>

                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">Self-Catering</Form.Label>
                  <Row>
                   <Col>
                    <Form.Control className="AddHotel__text" name="selfcatering" ref={register} />
                   </Col>
                   <Col>
                    <Form.Check className="AddHotel__label" type="radio" inline label="true" />
                    <Form.Check className="AddHotel__label" type="radio" inline label="false" />
                   </Col>
                 </Row>
                </Form.Group>

                <Form.Group className="AddHotel__item">
                    <Form.Label className="AddHotel__label">ID</Form.Label>
                    <Form.Control className="AddHotel__text" name="id" ref={register} />
                </Form.Group>
                    <Button className="AddHotel__button" type="submit">Submit</Button>
            </Form>
          </Container>
 
      </>
    );
}

export default AddHotel;