import React from 'react';
import './Product.css';
export default function Product (props){
    return(
    <div className='productCard'>
        <div className='picHalf'>
             <h1> {props.product.image} </h1>
        </div>
        <div className='descHalf'>
           <h1> {props.product.name} </h1>
           <h1> ${props.product.price} </h1>
        </div>
    </div>
    )
}