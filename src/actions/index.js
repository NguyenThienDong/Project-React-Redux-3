import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const fetchProductsRequest = () => {
    return (dispatch) => {
        callApi('products', 'GET', null)
            .then(res => {
                dispatch(fetchProducts(res.data));
            })
    }
}

const fetchProducts = (products) => ({
    type: Types.FETCH_PRODUCTS,
    products
})

export const deleteProductRequest = (id) => {
    return (dispatch) => {
        callApi(`products/${id}`, 'DELETE', null)
            .then(res => {
                dispatch(deleteProduct(id));
            })
    }
}

const deleteProduct = (id) => ({
    type: Types.DELETE_PRODUCT,
    id
})

export const addProduct = (product) => ({
    type: Types.ADD_PRODUCT,
    product
})

export const updateProduct = (product) => ({
    type: Types.UPDATE_PRODUCT,
    product
})
