import React from 'react';
import { useSelector } from 'react-redux';

function CartPage() {
  const { cart } = useSelector((state) => state.cartStore);
  return (
    <div className="container mx-auto">
      <h2>{cart.title}</h2>
    </div>
  );
}

export default CartPage;
