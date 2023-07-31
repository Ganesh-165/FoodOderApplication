import React from 'react'
import Header from './Components/Layouts/Header';
import Meals from './Components/Meals/MealsItems';
import CartItem from './Components/Cart/CartItem';
import CartProvider from './store/CartProvider';
import { useState } from 'react';

const Home = () => {
  return (
    <CartProvider>
      {showCart && <CartItem onClick={onCloseCart}/>}
      <Header onClick={onShowCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}

export default Home
