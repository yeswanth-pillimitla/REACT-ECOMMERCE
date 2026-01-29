import axios from 'axios';
import {useEffect,useState} from 'react';
import { Header } from '../../components/Header';
// import { products } from '../../starting-code/data/products';
// import { formatMoney } from '../../utils/money';
import {ProductsGrid} from './ProductsGrid';
import './HomePage.css';



export function HomePage({cart=[]}) {
 
 const [products,setProducts] =useState([]);

//  const [cart,setCart]=useState([])

  // useEffect(()=>{
  //   axios.get('/api/products')
  //     .then((response)=>{
  //     setProducts(response.data);
  //   });

  // },[]);
  useEffect(()=>{
    const getHomeData=async()=>{
      const  response=await axios.get('/api/products');
       setProducts(response.data);
    }
    getHomeData()
  },[])

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart}/>

      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}