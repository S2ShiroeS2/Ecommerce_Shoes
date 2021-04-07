import logo from '../assets/images/logo.svg'
import './App.css'

import  {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../actions/product';
import React, {useEffect} from 'react';
import Product from '../components/product/products';



function App() {
    const products = useSelector((state) => state.products);
 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
      
    }, [dispatch]);

    console.log("Testing: " + products);

    const renderProductList = () => {
        return products.map((product) => (
            <Product data={product} />
        ))
    };

    const productList = renderProductList();

    return (
        <div className="App">
           {productList}
        </div>
    )
}

export default App
