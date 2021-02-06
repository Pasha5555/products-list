import React, { useState } from 'react';
import './App.scss';

import { ViewProductsList } from './components/ViewProductsList/ViewProductsList';

const productsData = [
  {
    id: 1,
    name: 'bread',
    status: true,
    priority: 1,
  },
  {
    id: 2,
    name: 'milk',
    status: false,
    priority: 5,
  },
  {
    id: 3,
    name: 'eggs',
    status: true,
    priority: 4,
  },
  {
    id: 4,
    name: 'sausage',
    status: true,
    priority: 2,
  },
  {
    id: 5,
    name: 'apples',
    status: false,
    priority: 3,
  }
]

function App() {
  const [products, setProducts] = useState(productsData);
  const [productName, setProductName] = useState('');
  const [productPriority, setProductPriority] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);

  const addProduct = (e) => {
    e.preventDefault()

    const newProduct = {
      id: products.length + 1,
      name: productName,
      status: false,
      priority: productPriority,
    }

    if (productName && productPriority) {
      setProducts((availableProducts) => {
        return [...availableProducts, newProduct]
      })

      setProductName('');
      setProductPriority('');
    }
  }

  const removeProduct = (productId) => {
    setProducts(products
      .filter(product => product.id !== productId))
  }

  const selectProduct = (productId) => {
    setSelectedProduct(productId)
  }

  console.log(selectedStatus)

  return (
    <div className="App">
      <form
        onSubmit={addProduct}
      >
        <input
          type="text"
          placeholder="Input product*"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="input-add"
        />
        <select
          value={productPriority}
          onChange={(e) => setProductPriority(e.target.value)}
          className="select-add"
        >
          <option>Choose a priority:</option>
          {
            [1, 2, 3, 4, 5].map(priority => (
              <option key={priority} value={priority}>{priority}</option>
            ))
          }   
        </select>
        <button 
          type="submit"
          className="button-add"
        >
          Add a product
        </button>
      </form>

      Status filter:
      <select 
        value={selectedStatus} 
        onChange={e => setSelectedStatus(e.target.value)}
        className="select-status"
      >
        <option value="">All</option>
        <option value="false">Ran out</option>
        <option value="true">Have</option>
      </select>
      <ViewProductsList 
        products={products} 
        removeProduct={removeProduct}
        selectedStatus={selectedStatus}
        selectProduct={selectProduct}
        selectedProductId={selectedProduct}
      />
    </div>
  );
}

export default App;
