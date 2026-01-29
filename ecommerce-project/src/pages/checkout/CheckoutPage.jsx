import axios from 'axios';
import { useEffect, useState } from 'react';
import './CheckoutPage.css';
import './Checkout-header.css';
import {OrderSummary} from './OrderSummary';
import {PaymentSummary} from './PaymentSummary'
// import dayjs from 'dayjs';
// import { formatMoney } from '../../utils/money';


export function CheckoutPage({ cart = [] }) {
  const [deliveryOptions,setdeliveryOptions] = useState([]);

  const[paymentSummary,setpaymentSummary]=useState(null)

  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
        .then((response) => {
        setdeliveryOptions(response.data);
      })
      axios.get('/api/payment-summary')
        .then((response)=>{
        setpaymentSummary(response.data);
      })
  }, [])
  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<a className="return-to-home-link"
              href="/">3 items</a>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
           <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>

           <PaymentSummary paymentSummary={paymentSummary}/>
        </div>
      </div>
    </>
  );
}