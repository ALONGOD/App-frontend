export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_PRODUCT = 'SET_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const ADD_PRODUCT_MSG = 'ADD_PRODUCT_MSG'

const initialState = {
    products: [],
    product: null
}

export function productReducer(state = initialState, action) {
    var newState = state
    var products
    switch (action.type) {
        case SET_PRODUCTS:
            newState = { ...state, products: action.products }
            break
        case SET_PRODUCT:
            newState = { ...state, product: action.product }
            break
        case REMOVE_PRODUCT:
            const lastRemovedProduct = state.products.find(product => product._id === action.productId)
            products = state.products.filter(product => product._id !== action.productId)
            newState = { ...state, products, lastRemovedProduct }
            break
        case ADD_PRODUCT:
            newState = { ...state, products: [...state.products, action.product] }
            break
        case UPDATE_PRODUCT:
            products = state.products.map(product => (product._id === action.product._id) ? action.product : product)
            newState = { ...state, products }
            break
        case ADD_PRODUCT_MSG:
            newState = { ...state, product: { ...state.product, msgs: [...state.product.msgs || [], action.msg] } }
            break
        default:
    }
    return newState
}

// unitTestReducer()

function unitTestReducer() {
    var state = initialState
    const product1 = { _id: 'b101', vendor: 'Product ' + parseInt(Math.random() * 10), msgs: [] }
    const product2 = { _id: 'b102', vendor: 'Product ' + parseInt(Math.random() * 10), msgs: [] }

    state = productReducer(state, { type: SET_PRODUCTS, products: [product1] })
    console.log('After SET_PRODUCTS:', state)

    state = productReducer(state, { type: ADD_PRODUCT, product: product2 })
    console.log('After ADD_PRODUCT:', state)

    state = productReducer(state, { type: UPDATE_PRODUCT, product: { ...product2, vendor: 'Good' } })
    console.log('After UPDATE_PRODUCT:', state)

    state = productReducer(state, { type: REMOVE_PRODUCT, productId: product2._id })
    console.log('After REMOVE_PRODUCT:', state)

    const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
    state = productReducer(state, { type: ADD_PRODUCT_MSG, productId: product1._id, msg })
    console.log('After ADD_PRODUCT_MSG:', state)

    state = productReducer(state, { type: REMOVE_PRODUCT, productId: product1._id })
    console.log('After REMOVE_PRODUCT:', state)
}

