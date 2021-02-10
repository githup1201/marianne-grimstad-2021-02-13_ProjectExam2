import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { BASE_URL, headers } from "../../constants/api";



function AddEnquiry() {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    async function onSubmit(data) {
        console.log("data", data);

        const url = BASE_URL + "enquiries";

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        await fetch(url, options);

        history.push("/admin/enquiries");
    }
    
    
    return (
       <>
        
            <Jumbotron fluid>
              <Container className="AddEnquiry">
                <Form onSubmit={handleSubmit(onSubmit)} className="AddEnquiry__form">
                    <h2 className="AddEnquiry__header">Enquiry<span className="highlight">Form</span></h2>
                        
                    <Form.Group className="AddEnquiry__item">
                        <Form.Label className="AddEnquiry__label">Name</Form.Label>
                        <Form.Control className="AddEnquiry__text" name="establishmentId" placeholder="Enter a name for the hotel" ref={register} />
                    </Form.Group>

                    <Form.Group className="AddEnquiry__item">
                        <Form.Label className="AddEnquiry__label">Full name</Form.Label>
                        <Form.Control className="AddEnquiry__text" name="name" placeholder="Enter your full name" ref={register}/>
                    </Form.Group>

                    <Form.Group className="AddEnquiry__item">
                        <Form.Label className="AddEnquiry__label">Email address</Form.Label>
                        <Form.Control className="AddEnquiry__text" name="email" type="email" placeholder="Enter email" ref={register}/>
                    </Form.Group>

                    <Form.Group className="AddEnquiry__item">   
                    <Row>
                      <Col>
                        <Form.Label className="AddEnquiry__label">Check-in</Form.Label>
                        <Form.Control className="AddEnquiry__text" name="checkIn" placeholder="Enter date" ref={register}/>
                      </Col>
                      <Col>
                        <Form.Label className="AddEnquiry__label">Check-out</Form.Label>
                        <Form.Control className="AddEnquiry__text" name="checkOut" placeholder="Enter date" ref={register}/>
                      </Col>
                    </Row>   
                    </Form.Group>
                        <Button className="AddEnquiry__button" type="submit">Submit</Button>
                </Form> 
              </Container>
            </Jumbotron> 
       </>
    );
}

export default AddEnquiry;