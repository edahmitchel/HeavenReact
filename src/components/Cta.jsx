import React, { useState } from 'react'
import PaymentForm from './PaymentForm';

const Cta = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleDonateClick = () => {
    setShowPaymentForm(true);
  };

  const handleClosePaymentForm = () => {
    setShowPaymentForm(false);
  };
  return (
    <div>
      <section id="cta" className="cta">
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
      {showPaymentForm && <PaymentForm onClose={handleClosePaymentForm} />}
    </div>
  );
};

export default Cta;