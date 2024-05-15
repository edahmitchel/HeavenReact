import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardPaymentForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(10); // Default amount
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const paymentHandler = async (e) => {
        e.preventDefault();
        setIsProcessingPayment(true);
        const response = await fetch('/.netlify/functions/create-payment-link', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount, name }),
        });

        const data = await response.json();
        setIsProcessingPayment(false);

        if (response.ok) {
            window.location.href = data.url;
        } else {
            toast.error('Failed to create payment link: ' + data.error);
        }
    };

    return (
        <div>
            <h5>Credit Card Payment:</h5>
            <form onSubmit={paymentHandler} className="payment_form">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount:</label>
                    <input type="number" id="amount" className="form-control" min="0" step="1" value={amount} onChange={handleAmountChange} />
                </div>

                <button type="submit" className="btn form_button" disabled={isProcessingPayment}>Generate Payment Link</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CardPaymentForm;
