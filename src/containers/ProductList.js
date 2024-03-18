import React, { useEffect, useState } from 'react'
import './ProductList.css';
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync, selectProducts } from '../features/products/productsSlice';
import { createPortal } from 'react-dom';
import Modal from '../components/Modal';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({})

    useEffect(()=>{
    dispatch(fetchProductsAsync());
    },[]);

    const productClickHandler = (id)=> {
      const clickedProduct = products.find((product)=>product.id === id);
      setSelectedProduct(clickedProduct);
      setShowModal(true);
    }

  return (
    <div className='products'>
        {products && products.map(product => {
            return (
              <Product product={product} onClick={productClickHandler}/>
            )
        })}

    {showModal && createPortal(
        <Modal onClose={() => setShowModal(false)} >
          <Product product={selectedProduct}/>
        </Modal>,
        document.body
      )}
        
    </div>
  )
}

export default ProductList