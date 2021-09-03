import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import callApi from "../../utils/apiCaller";

function ProductListPage() {
    var [products, setProducts] = useState([]);
        
    const onDelete = (id) => {
        callApi(`products/${id}`, 'DELETE', null)
            .then( res => {
                if(res.status === 200){
                    let index = findIndex(products, id)
                    console.log(index);
                    if(index !== -1) {
                        products.splice(index, 1);
                        setProducts(products);
                    }
                }
            
            })
    }

    useEffect(() => {
        callApi('products', 'GET', null).then(res => setProducts(res.data))
    })

    const findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if(product.id === id) {
                result = index;
            }
        });
        return result;
    }

    let result = null;
    const showProducts = (products) => {
        if (products.length > 0) {
        result = products.map((product, index) => (
            <ProductItem 
                key={index} 
                product={product} 
                index={index} 
                onDelete={() => onDelete(product.id)}
            />
        ));
        }
        return result;
    };

    return (
        <div className='container'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <Link type='button' className='btn btn-lg btn-info mb-20' to='/products'>
                Thêm sản phẩm
            </Link>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-20'>
            <ProductList>{showProducts(products)}</ProductList>
        </div>
        </div>
    );
}

const mapStateToProp = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProp, null)(ProductListPage);
