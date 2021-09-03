import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import callApi from "../../utils/apiCaller";

function ProductListPage() {
    var [products, setProducts] = useState([]);
        
    useEffect(() => {
        callApi('products', 'GET', null).then(res => setProducts(res.data))
    }, [])

    let result = null;
    const showProducts = (products) => {
        if (products.length > 0) {
        result = products.map((product, index) => (
            <ProductItem key={index} product={product} index={index} />
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
