import * as Types from '../constants/ActionTypes';

let initialState = [];

const findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if(product.id === id) {
            result = index;
        }
    });
    return result;
}

let products = (state = initialState, action) => {
    var index = -1;
    var { id } = action;
    switch(action.type) {
        case Types.FETCH_PRODUCTS: 
            return action.products;
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            if(index !== -1) {
                state.splice(index, 1)
            }
            return [...state]
        default: return [...state];
    }
}

export default products;