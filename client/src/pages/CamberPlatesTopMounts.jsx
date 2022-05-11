import React from 'react';
import { useParams } from 'react-router-dom';

import ProductList from '../components/product-list/product-list.component';
import Cart from '../components/cart/cart.component';

const CamberPlatesTopMounts = () => {
  const { id } = useParams();

  return (
    <div className='container'>
      <ProductList id={id} />
      <Cart />
    </div>
  );
};

export default CamberPlatesTopMounts;
