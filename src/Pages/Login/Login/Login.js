import React, { useRef } from "react";
import './Login.css'
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const pass = passRef.current.value;
    console.log(email, pass);
    
  };
  const handleToSignup=(event)=>{
    navigate('/signup')
}
  return (
    <div  className="container w-50 mx-auto">
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center">Please Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mt-3">Dont have an account? <span  className="text-primary signup" onClick={handleToSignup}>Click here</span></p>
    </div>
  );
};

export default Login;
