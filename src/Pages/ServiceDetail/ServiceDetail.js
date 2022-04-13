import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate();
    const handleCheckout = event =>{
        navigate('/checkout')
    }
    return (
        <div>
            <h2>Welcome to detail: {serviceId}</h2>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default ServiceDetail;