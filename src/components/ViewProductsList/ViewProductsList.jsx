import React, {useState} from 'react';
import './ViewProductsList.scss';

import { ProductItem } from '../ProductItem/ProductItem';
import { SelectedProduct } from '../SelectedProduct/SelectedProduct';

export const ViewProductsList = ({
  products, 
  removeProduct, 
  selectedStatus,
  selectProduct,
  selectedProductId
}) => {
  
  let sortedProducts = products
    .sort((a, b) => a.priority - b.priority)

  if(selectedStatus) {
    sortedProducts = sortedProducts
      .filter(product => product.status.toString() === selectedStatus)
  }

  const selected = sortedProducts
    .find(product => product.id === selectedProductId)

  return (
    <div className="products">
      <ul className="products-list">
        {
          sortedProducts.map(product => (
              <ProductItem 
                key={product.id} 
                {...product} 
                removeProduct={removeProduct}
                selected={selected}
                selectProduct={selectProduct}
              />
          ))
        }
      </ul>
      <div className="selected-product__container">
        <SelectedProduct 
          selected={selected} 
          removeProduct={removeProduct} 
        />
      </div>
    </div>
  )
}