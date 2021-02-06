import React, { useState } from 'react';
import classNames from 'classnames';

import '../ProductItem/ProductItem.scss';

export const SelectedProduct = ({ selected, removeProduct }) => {
  const [selectedProductStatus, setSelectedProductStatus] = useState(true)
  const [selectedProductTime, setSelectedProductTime] = useState(''); 

  const changeSelectedStatus = () => {
    const currDate = new Date();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDay();
    const hours = currDate.getHours();
    const minutes = currDate.getMinutes();

    setSelectedProductTime(`${day < 10 ? `0${day}` : day}/${month < 10 ?
       `0${month}` : month} ${hours}:${minutes}`)
    setSelectedProductStatus(!selectedProductStatus)
  }

  return (
    selected ? (
      <div 
        className="products-list__item item"
        style={{
          width: '230px',
          height: '350px',
          marginTop: '100px'
        }}
      >
        <h2>Priority#{selected.priority}</h2>
        <p>{selected.name}</p>
        <p>
          <button
            type="button"
            onClick={() => changeSelectedStatus(selected.id)}
            className="item__button--status"
          >
            Change status
          </button> 
          <p className={classNames("item__status-value", 
            {
              "item__status-value--have": selectedProductStatus,
              "item__status-value--run-out": !selectedProductStatus
            })}
          >
            {selectedProductStatus ? "have" : "ran out"}
          </p>
        </p>
        <p className="item__status-time">
          Status changed - {selectedProductTime}
        </p>
        <button 
          type="button" 
          onClick={() => removeProduct(selected.id)}
          className="item__button--remove"
        >
          Remove
        </button>
      </div>
    ) : null
  )
}