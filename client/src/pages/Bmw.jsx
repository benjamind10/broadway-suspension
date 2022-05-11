import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ProductList from '../components/product-list/product-list.component';

const Bmw = () => {
  const { id } = useParams();

  return (
    <div className='container camberplates-container'>
      <div className='row justify-content-around'>
        <ProductList id={id} />
      </div>
    </div>
  );
};

export default Bmw;
