/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaCreditCard, FaEthereum, FaCopy } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import CardPaymentForm from './CardPaymentForm';

function PaymentForm({ onClose }) {
    const [paymentInfo, setPaymentInfo] = useState({
        fullName: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: '',
        paymentMethod: 'creditCard'
    });


    const handlePaymentMethodChange = (method) => {
        setPaymentInfo({
            ...paymentInfo,
            paymentMethod: method
        });
    };

    const handleCopyAddress = () => {
        navigator.clipboard.writeText('0x0D818F0759d1650018b235eaA45bb82cea4c0EE2');
        toast.success('Address copied to clipboard!', {
            autoClose: 2000
        });
    };
    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="card modal-content h-490">
                    <div className="modal-header">
                        <h5 className="modal-title">Pick a payment method to use:</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="card-body">
                        <div className="payment bg-light nav-pills rounded nav-fill mb-3">

                            <button
                                className={`${paymentInfo.paymentMethod === 'creditCard' ? 'active' : ''}`}
                                onClick={() => handlePaymentMethodChange('creditCard')}
                            >
                                <FaCreditCard /> Card Payment
                            </button>


                            <button
                                className={`payment ${paymentInfo.paymentMethod === 'crypto' ? 'active' : ''}`}
                                onClick={() => handlePaymentMethodChange('crypto')}
                            >
                                <FaEthereum />Crypto Payment
                            </button>
                        </div>

                        <div>
                            {paymentInfo.paymentMethod === 'creditCard' && (
                                <CardPaymentForm />
                            )}

                            {paymentInfo.paymentMethod === 'crypto' && (
                                <div>
                                    <h5 className="my-4">Credit Cypto Payment:</h5>
                                    <div className='eth_text'>
                                        Ethereum Address <FaEthereum />
                                    </div>
                                    <p className='eth' onClick={handleCopyAddress}>0x0D818F0759d1650018b235eaA45bb82cea4c0EE2 <FaCopy /></p>
                                </div>
                            )}
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PaymentForm;