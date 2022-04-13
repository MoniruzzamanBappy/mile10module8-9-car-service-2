import React, { useRef } from "react";
import './Login.css'
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import auth from './../../../firebase.init';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const pass = passRef.current.value;
    signInWithEmailAndPassword(email, pass)
    
  };
  const handleToSignup=(event)=>{
    navigate('/signup')
}
if(user){
    navigate(from, { replace: true });
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
