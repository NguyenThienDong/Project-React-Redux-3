let initialState = [
    {
        id: 1,
        name: 'IPhone X',
        price: 500,
        status: true
    },{
        id: 2,
        name: 'Samsung galaxy S7',
        price: 700,
        status: false
    },{
        id: 3,
        name: 'Xiaomi redmi 9',
        price: 400,
        status: true
    },
]

let products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;