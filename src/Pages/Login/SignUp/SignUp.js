import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
//     const emailRef = useRef("");
//   const passRef = useRef("");
//   const nameRef = useRef("");
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    console.log(name, email, pass);
    
  };
  const handleToLogin=(event)=>{
    navigate('/login')
}
  return (
    <div  className="container w-50 mx-auto">
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center mb-3">Please Sign Up</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="pass" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="mt-3">Already have an account? <span  className="text-primary signup" onClick={handleToLogin}>Click here</span></p>
    </div>
  );
};

export default SignUp;
