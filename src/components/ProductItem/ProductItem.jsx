import React, { useState } from 'react';
import classNames from 'classnames';
import './ProductItem.scss';

export const ProductItem = ({ 
  id, 
  name, 
  priority,  
  selectProduct, 
  status, 
  removeProduct
}) => {
  const [productStatus, setProductStatus] = useState(status)
  const [statusTime, setStatusTime] = useState(''); 

  const changeStatus = () => {
    const currDate = new Date();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDay()+1;
    const hours = currDate.getHours();
    const minutes = currDate.getMinutes();

    setStatusTime(`${day < 10 ? `0${day}` : day}/${month < 10 ?
      `0${month}` : month} ${hours}:${minutes}`)
    setProductStatus(!productStatus)
  }

  return (
    <li
      key={id}
      className="products-list__item item"
    >
      <div 
        onClick={() => selectProduct(id)}
        style={{cursor: "pointer"}}
      >
        <h2>Priority#{priority}</h2>
        <p>{name[0].toUpperCase() + name.slice(1, name.length)}</p>
      </div>
      <div>
        <button
            type="button"
            onClick={() => changeStatus(id)}
            className="item__button--status"
        >
          Change status
        </button>
        <p className={classNames("item__status-value", 
          {
            "item__status-value--have": productStatus,
            "item__status-value--run-out": !productStatus
          })}
        >
          {productStatus ? "have" : "ran out"}
        </p>
      </div>
      {
        statusTime && 
          <p className="item__status-time">
            Status changed: {statusTime}
          </p>
      }
      <button 
        type="button" 
        onClick={() => removeProduct(id)}
        className="item__button--remove"
      >
        Remove
      </button>
    </li>
  )
}