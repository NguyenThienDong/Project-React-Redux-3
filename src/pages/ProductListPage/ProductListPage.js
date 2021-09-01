import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";

function ProductListPage() {
    let products = [
        {id: 1, name: 'Iphone 6', price: 5000000, status: true},
        {id: 2, name: 'Iphone 8', price: 10000000, status: false}
    ];
    let result = null;
    const showProducts = products => {
        if(products.length > 0) {
            result = products.map((product, index) => (
                <ProductItem 
                    key={index}
                    product={product}
                    index={index}
                />
            ))
        }
        return result;
    }

    return (
        <div className="container">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                <button type="button" className="btn btn-lg btn-info mb-20">
                    Thêm sản phẩm
                </button>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-20"> 
                <ProductList>
                    {showProducts(products)}
                </ProductList>
            </div>
        </div>
    );
}

export default ProductListPage;
