import React from 'react'
import './product.css';

const Product = ({name,price,color,data={}}) => {

  return (
    <div className='container'>
        <h1>Name: {name}</h1>
        <h2>Price: {price}</h2>
        <h3>Color: {color}</h3>
        
        {/* {data.ram &&(
          <>
           <h3>ram:{data.ram}</h3>
        <h3>rom:{data.rom}</h3>
          </>
        )} */}
       
    </div>
  )
}

export default Product;