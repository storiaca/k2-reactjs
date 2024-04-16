import React from 'react';
import { useSelector } from 'react-redux';
import CartItemComponent from '../components/CartItemComponent';

function CartPage() {
  const { cart, totalPrice } = useSelector((state) => state.cartStore);

  console.log(cart);
  return (
    <div>
      {cart.length > 0 ? (
        <div className="mt-5 lg:mt-12">
          <div className="container mx-auto flex flex-col lg:flex-row gap-4">
            {/* Left side */}
            <div className="w-full lg:w-[70%]">
              <div className="grid grid-cols-4 bg-lightBlue h-[60x] place-items-center">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
              {/* Body content */}
              <div className="">
                {cart.map((item, index) => {
                  return <CartItemComponent key={item.id} item={item} />;
                })}
              </div>
            </div>
            {/* Right side */}
          </div>
        </div>
      ) : (
        <div className="mt-5 lg:mt-12">
          <h1 className="text-center text-mainBlue text-xl lg:text-4xl">
            Nema proizvoda
          </h1>
        </div>
      )}
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default CartPage;
