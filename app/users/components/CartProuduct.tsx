
import React from 'react';
import AddtoCart from './AddtoCart';
import style from './CartProuduct.module.css'

const CartProuduct = () => {
  return (
    <div>
      <AddtoCart />
      <p className={style.cart}>name is add to cart </p>
      <p className='p-4 bg-green text-sm'>taildwind</p>
      <button className='btn btn-success'>dasiUi Btn</button>

<div className='p-3'>
  <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</div>
   
   <figure className="diff aspect-16/9" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </div>
  <div className="diff-item-2" role="img">
    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </div>
  <div className="diff-resizer"></div>
</figure>

    </div>
  );
}

export default CartProuduct;
