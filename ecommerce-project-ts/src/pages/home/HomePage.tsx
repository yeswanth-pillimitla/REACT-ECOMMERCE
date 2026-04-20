import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import type { CartItem, Product } from '../../types';
import './HomePage.css';

interface HomePageProps {
  cart: CartItem[];
  loadCart: () => Promise<void>;
}

export function HomePage({ cart = [], loadCart }: HomePageProps) {
  const [products, setProducts] = useState<Product[]>([]);

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
        <ProductsGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}