
import React from 'react';
import AddtoCart from './AddtoCart';
import style from './CartProuduct.module.css'

const CartProuduct = () => {
  return (
    <div>
      <AddtoCart />
      <p className={style.cart}>name is add to cart </p>
      <p className='p-4 bg-green text-sm'>taildwind</p>
    </div>
  );
}

export default CartProuduct;
