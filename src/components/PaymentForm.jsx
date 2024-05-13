import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const PaymentForm = ({ onClose }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(10); // Default amount
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then((res) => {
            return res.json();
        });

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: name,
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            toast.error(paymentResult.error.message); // Display error message using toast
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                toast.success('Payment Successful!'); // Display success message using toast
                onClose(); // Close the payment form modal after successful payment
            }
        }
    };

    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Credit Card Payment:</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={paymentHandler}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="amount" className="form-label">Amount:</label>
                                <input type="number" id="amount" className="form-control" min="0" step="1" value={amount} onChange={handleAmountChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="card-element" className="form-label">Card Information:</label>
                                <CardElement id="card-element" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isProcessingPayment}>Pay Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PaymentForm;