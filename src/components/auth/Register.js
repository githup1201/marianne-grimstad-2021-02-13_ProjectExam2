import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from "react-bootstrap/Col";

function Register() {
    const { register, handleSubmit } = useForm();
    const { registerUser } = useContext(AuthContext);

    const history = useHistory();

    function onSubmit(data) {
        console.log("data", data);
        registerUser(data.username);
        history.push("/admin");
    }

    return (
        <>
            <Jumbotron fluid className="Register__jumbo">
              <Container>
                <Col md={12} className="Register">
                <Form onSubmit={handleSubmit(onSubmit)} className="Register__form">
                    <h2 className="Register__header">Login<span className="highlight">Form</span></h2>
                    <Form.Group className="Register__item">
                        <Form.Label className="Register__label">Name</Form.Label>
                        <Form.Control className="Register__text" name="username" placeholder="Enter your username" ref={register} />
                    </Form.Group>
                    <Form.Group className="Register__item">
                        <Form.Label className="Register__label">Password</Form.Label>
                        <Form.Control className="Register__text" name="password" placeholder="Enter your password" ref={register} />
                    </Form.Group>
                        <Button type="submit" className="Register__button">Submit</Button>
                </Form>
                </Col>
              </Container>
            </Jumbotron> 
        </>
    );
}

export default Register;