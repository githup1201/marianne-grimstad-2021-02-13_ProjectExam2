import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";



function AddMessage() {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    async function onSubmit(data) {
        console.log("data", data);

        const url = BASE_URL + "contacts";

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        await fetch(url, options);

        history.push("/admin/messages");
    }
    
    return (
       <>
        
            <Jumbotron fluid className="AddMessage__jumbo">
              <Container className="AddMessage">
                <Form onSubmit={handleSubmit(onSubmit)} className="AddMessage__form">
                    <h2 className="AddMessage__header">Contact<span className="highlight">Form</span></h2>
                        
                    <Form.Group className="AddMessage__item">
                        <Form.Label className="AddMessage__label">Full name</Form.Label>
                        <Form.Control className="AddMessage__text" name="name" placeholder="Enter your full name" ref={register}/>
                    </Form.Group>

                    <Form.Group className="AddMessage__item">
                        <Form.Label className="AddMessage__label">Email address</Form.Label>
                        <Form.Control className="AddMessage__text" name="email" type="email" placeholder="Enter email" ref={register}/>
                    </Form.Group>

                    <Form.Group className="AddMessage__item">
                        <Form.Label className="AddMessage__label">Message</Form.Label>
                        <textarea className="AddMessage__text form-control" name="message" rows="5" placeholder="Write us a message" ref={register}></textarea>
                    </Form.Group>
                        <Button className="AddMessage__button" type="submit">Submit</Button>
                </Form>
              </Container>
            </Jumbotron> 
       
       </>
    );
}

export default AddMessage;