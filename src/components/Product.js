import React from "react";
import './Product.css'

const Product = ({product, onClick}) => {

  return (
    <div key={product.id} className="product" onClick ={()=>onClick && onClick(product.id)}>
      <img src={product.image} width="120" height="100" alt="" />
      <p>{product.category}</p>
      <div className="product-info">
        <h2>{product.title}</h2>
        {!onClick && <p>{product.description}</p>}
      </div>
      <p> USD {product.price}</p>
    </div>
  );
};

export default Product;
