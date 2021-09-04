import React, { useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductRequest, fetchProductsRequest } from "../../actions";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";

function ProductListPage(props) {
    let {products, onFetchProducts} = props;
        
    const onDelete = (id) => {
        props.onDeleteProduct(id)
    }

    useEffect(() => {
        onFetchProducts();
    })

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

const mapActionsToProps = dispatch => {
    return {
        onFetchProducts : () => dispatch(fetchProductsRequest()),
        onDeleteProduct : (id) => dispatch(deleteProductRequest(id))
    }
}

export default connect(mapStateToProp, mapActionsToProps)(ProductListPage);
