import axios from 'axios';
import {Routes,Route} from 'react-router';
import {useEffect,useState} from'react';
import {HomePage} from './pages/home/HomePage';
import {CheckoutPage}from './pages/checkout/CheckoutPage';
import {OrderPage} from'./pages/orders/OrderPage';
import {TrackingPage} from './pages/TrackPage';
import './App.css'

function App() {
 const [cart,setCart]=useState([])

    useEffect(()=>{
      axios.get('/api/cart-items?expand=product')
        .then((response)=>{
        setCart(response.data)
        console.log(response.data)
      });
    },[]);
  
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart}/>}/>
      <Route path="checkout" element={<CheckoutPage cart={cart}/>}/>
      <Route path="orders" element={<OrderPage cart={cart}/>}/>
      <Route path="tracking" element={<TrackingPage/>}/>
    </Routes>
    
  )
}

export default App
