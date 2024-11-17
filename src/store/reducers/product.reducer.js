export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_PRODUCT = 'SET_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const ADD_PRODUCT_MSG = 'ADD_PRODUCT_MSG'

const initialState = {
    products:[
        { _id: 1, name: 'Yoga Mat', price: '120', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Mat', description: 'High-quality yoga mat for all your yoga needs.', category: 'accessories' },
        { _id: 2, name: 'Yoga Block', price: '45', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Block', description: 'Supportive yoga block to enhance your practice.', category: 'accessories' },
        { _id: 3, name: 'Yoga Strap', price: '30', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Strap', description: 'Durable yoga strap for better stretching.', category: 'accessories' },
        { _id: 4, name: 'Yoga Wheel', price: '150', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Wheel', description: 'Yoga wheel to improve flexibility and balance.', category: 'accessories' },
        { _id: 5, name: 'Meditation Cushion', price: '80', imgUrl: 'https://via.placeholder.com/150?text=Meditation+Cushion', description: 'Comfortable cushion for meditation sessions.', category: 'accessories' },
        { _id: 6, name: 'Yoga Towel', price: '60', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Towel', description: 'Absorbent towel for hot yoga classes.', category: 'accessories' },
        { _id: 7, name: 'Yoga Bag', price: '100', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Bag', description: 'Stylish bag to carry your yoga gear.', category: 'accessories' },
        { _id: 8, name: 'Yoga Bolster', price: '130', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Bolster', description: 'Supportive bolster for restorative yoga.', category: 'accessories' },
        { _id: 9, name: 'Yoga Socks', price: '25', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Socks', description: 'Non-slip socks for better grip.', category: 'shoes' },
        { _id: 10, name: 'Yoga Blanket', price: '70', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Blanket', description: 'Soft blanket for added comfort.', category: 'accessories' },
        { _id: 11, name: 'Yoga Ball', price: '90', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Ball', description: 'Stability ball for core exercises.', category: 'accessories' },
        { _id: 12, name: 'Yoga Chair', price: '200', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Chair', description: 'Chair designed for yoga practice.', category: 'accessories' },
        { _id: 13, name: 'Yoga Belt', price: '35', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Belt', description: 'Adjustable belt for stretching.', category: 'accessories' },
        { _id: 14, name: 'Yoga Gloves', price: '40', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Gloves', description: 'Grip gloves for better hold.', category: 'accessories' },
        { _id: 15, name: 'Yoga Headband', price: '20', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Headband', description: 'Sweat-absorbing headband.', category: 'women' },
        { _id: 16, name: 'Yoga Eye Pillow', price: '25', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Eye+Pillow', description: 'Relaxing eye pillow for savasana.', category: 'accessories' },
        { _id: 17, name: 'Yoga Sandbag', price: '50', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Sandbag', description: 'Weighted sandbag for deeper stretches.', category: 'accessories' },
        { _id: 18, name: 'Yoga Mat Cleaner', price: '15', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Mat+Cleaner', description: 'Natural cleaner for your yoga mat.', category: 'accessories' },
        { _id: 19, name: 'Yoga DVD', price: '35', imgUrl: 'https://via.placeholder.com/150?text=Yoga+DVD', description: 'Instructional yoga DVD.', category: 'accessories' },
        { _id: 20, name: 'Yoga Book', price: '45', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Book', description: 'Comprehensive guide to yoga.', category: 'accessories' },
        { _id: 21, name: 'Yoga Journal', price: '25', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Journal', description: 'Journal to track your yoga progress.', category: 'women' },
        { _id: 22, name: 'Yoga Poster', price: '20', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Poster', description: 'Poster with yoga poses.', category: 'accessories' },
        { _id: 23, name: 'Yoga Necklace', price: '60', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Necklace', description: 'Inspirational yoga necklace.', category: 'women' },
        { _id: 24, name: 'Yoga Bracelet', price: '40', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Bracelet', description: 'Bracelet with yoga charms.', category: 'women' },
        { _id: 25, name: 'Yoga Earrings', price: '30', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Earrings', description: 'Earrings with yoga symbols.', category: 'women' },
        { _id: 26, name: 'Yoga Water Bottle', price: '35', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Water+Bottle', description: 'Eco-friendly water bottle.', category: 'accessories' },
        { _id: 27, name: 'Yoga Essential Oils', price: '50', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Essential+Oils', description: 'Essential oils for yoga practice.', category: 'accessories' },
        { _id: 28, name: 'Yoga Incense', price: '20', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Incense', description: 'Incense sticks for a calming atmosphere.', category: 'accessories' },
        { _id: 29, name: 'Yoga Candle', price: '30', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Candle', description: 'Scented candle for relaxation.', category: 'accessories' },
        { _id: 30, name: 'Yoga Music CD', price: '25', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Music+CD', description: 'CD with relaxing yoga music.', category: 'accessories' },
        // Additional 30 products
        { _id: 31, name: 'Yoga Sneakers', price: '70', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Sneakers', description: 'Lightweight sneakers for yoga and fitness.', category: 'shoes' },
        { _id: 32, name: 'Yoga Hoodie', price: '80', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Hoodie', description: 'Comfortable hoodie for post-practice warmth.', category: 'men' },
        { _id: 33, name: 'Yoga Shorts', price: '35', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Shorts', description: 'Flexible and breathable shorts for practice.', category: 'men' },
        { _id: 34, name: 'Yoga Shoes', price: '90', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Shoes', description: 'Shoes designed for comfort and support during yoga.', category: 'shoes' },
        { _id: 35, name: 'Yoga Jacket', price: '120.00', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Jacket', description: 'Lightweight jacket for warm-ups and cool-downs.', category: 'women' },
        { _id: 36, name: 'Yoga Pants', price: '60', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Pants', description: 'High-waisted yoga pants for comfort and style.', category: 'women' },
        { _id: 37, name: 'Yoga Mat Bag', price: '40', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Mat+Bag', description: 'Carry your yoga mat in style.', category: 'accessories' },
        { _id: 38, name: 'Yoga Slippers', price: '25', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Slippers', description: 'Soft slippers for post-practice relaxation.', category: 'shoes' },
        { _id: 39, name: 'Yoga Shirt', price: '40', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Shirt', description: 'Moisture-wicking shirt for comfort during yoga.', category: 'men' },
        { _id: 40, name: 'Yoga Sweatpants', price: '50', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Sweatpants', description: 'Cozy sweatpants for after yoga practice.', category: 'men' },
        { _id: 41, name: 'Yoga Tank Top', price: '35', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Tank+Top', description: 'Comfortable tank top for yoga classes.', category: 'women' },
        { _id: 42, name: 'Yoga Sneakers Women', price: '80', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Sneakers+Women', description: 'Stylish sneakers for women designed for yoga.', category: 'shoes' },
        { _id: 43, name: 'Yoga Men’s Shorts', price: '50', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Men’s+Shorts', description: 'Light and breathable shorts for men.', category: 'men' },
        { _id: 44, name: 'Yoga Skirt', price: '70', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Skirt', description: 'Flowy skirt perfect for yoga practice.', category: 'women' },
        { _id: 45, name: 'Yoga Socks Women', price: '20', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Socks+Women', description: 'Non-slip yoga socks for better grip and comfort.', category: 'shoes' },
        { _id: 46, name: 'Yoga Hat', price: '40', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Hat', description: 'Stylish hat for sunny yoga sessions.', category: 'accessories' },
        { _id: 47, name: 'Yoga Women’s Tights', price: '45', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Women’s+Tights', description: 'Comfortable tights designed for yoga.', category: 'women' },
        { _id: 48, name: 'Yoga Belt Men', price: '35', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Belt+Men', description: 'Durable belt for men for stretching.', category: 'men' },
        { _id: 49, name: 'Yoga Shoes Women', price: '65', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Shoes+Women', description: 'Comfortable shoes designed specifically for yoga practice.', category: 'shoes' },
        { _id: 50, name: 'Yoga Scarf', price: '30', imgUrl: 'https://via.placeholder.com/150?text=Yoga+Scarf', description: 'Light scarf for after yoga practice.', category: 'accessories' }
    ],
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

