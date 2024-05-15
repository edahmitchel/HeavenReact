import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from './utils/stripe.uitisl.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Elements stripe={stripePromise}>

        <App />
      </Elements>
    </BrowserRouter>
  </React.StrictMode>,
)
