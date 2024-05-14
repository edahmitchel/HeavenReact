import React, { useState } from 'react'
import PaymentForm from './PaymentForm';
import {  toast, ToastContainer } from 'react-toastify';
import { FaCreditCard, FaEthereum } from 'react-icons/fa6';
import 'react-toastify/dist/ReactToastify.css';
import { FaCopy } from "react-icons/fa";

const Cta = () => {
  const [showPaymentFormCard, setShowPaymentFormCard] = useState(false);
  const [showPaymentFormCypto, setShowPaymentFormCypto] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleDonateClick = () => {
    setShowPaymentForm(true);
  };
  const handleCardClick = () => {
    setShowPaymentFormCard(true);
    setShowPaymentForm(false);
  };
  const handleCyptoClick = () => {
    setShowPaymentFormCypto(true);
    setShowPaymentForm(false);
  };

  const handleClosePaymentForm = () => {
    setShowPaymentForm(false);
  };
  const handleClosePaymentFormCard = () => {
    setShowPaymentFormCard(false);
  };
  const handleClosePaymentFormCypto = () => {
    setShowPaymentFormCypto(false);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('0x0D818F0759d1650018b235eaA45bb82cea4c0EE2'); // Copy the Ethereum address to clipboard
    toast.success('Address copied to clipboard!', {
      // position: toast.POSITION.TOP_CENTER,
        autoClose: 2000 // Close toast after 2 seconds
    });
};
  return (
    <div>
      <section id="donate" className="cta">
        <div className="container">
          <div className="row" data-aos="zoom-out">
            <div className="col-lg-9 text-center text-lg-start">
              <h3>Make a Difference Today</h3>
              <p>Your financial support enables us to continue our vital work in preventing child abuse and neglect, providing support to families in need, and advocating for policy change. Every donation, no matter the size, makes a difference in the lives of children and families.</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <button className="cta-btn align-middle" onClick={handleDonateClick}>Donate</button>
            </div>
          </div>
        </div>
      </section>
      {/* {showPaymentForm && <PaymentForm onClose={handleClosePaymentForm} />} */}
      {showPaymentForm && 
      <>
           <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Pick a payment method to use:</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClosePaymentForm}></button>
                    </div>
                    <div className="modal-body payment">
                      <button onClick={handleCardClick}> <FaCreditCard />  Card Payment</button>
                      <button onClick={handleCyptoClick}><FaEthereum /> Cypto Payment</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
      </>
      }

      {showPaymentFormCard && <>
        <PaymentForm onClose={handleClosePaymentFormCard} />
      </>}
      {showPaymentFormCypto && <>
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Credit Cypto Payment:</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClosePaymentFormCypto}></button>
                    </div>
                    <div className="modal-body">
                     <div className='eth_text'>
                     Ethereum Address <FaEthereum />
                     </div>
                     <p className='eth' onClick={handleCopyAddress}>0x0D818F0759d1650018b235eaA45bb82cea4c0EE2 <FaCopy /></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
      </>}
    </div>
  );
};

export default Cta;