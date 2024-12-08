export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_PRODUCT = 'SET_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const ADD_PRODUCT_MSG = 'ADD_PRODUCT_MSG'


const initialState = {
    //  products:[
    //     { _id: 1, name: 'Yoga Mat', price: '120', imgUrl: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg', description: 'High-quality yoga mat for all your yoga needs.', category: 'accessories' },
    //     { _id: 2, name: 'Yoga Block', price: '45', imgUrl: 'https://images.pexels.com/photos/4046983/pexels-photo-4046983.jpeg', description: 'Supportive yoga block to enhance your practice.', category: 'accessories' },
    //     { _id: 3, name: 'Yoga Strap', price: '30', imgUrl: 'https://images.pexels.com/photos/3758017/pexels-photo-3758017.jpeg', description: 'Durable yoga strap for better stretching.', category: 'accessories' },
    //     { _id: 4, name: 'Yoga Wheel', price: '150', imgUrl: 'https://images.pexels.com/photos/5034166/pexels-photo-5034166.jpeg', description: 'Yoga wheel to improve flexibility and balance.', category: 'accessories' },
    //     // { _id: 5, name: 'Meditation Cushion', price: '80', imgUrl: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg', description: 'Comfortable cushion for meditation sessions.', category: 'accessories' },
    //     // { _id: 6, name: 'Yoga Towel', price: '60', imgUrl: 'https://images.pexels.com/photos/6208377/pexels-photo-6208377.jpeg', description: 'Absorbent towel for hot yoga classes.', category: 'accessories' },
    //     // { _id: 7, name: 'Yoga Bag', price: '100', imgUrl: 'https://images.pexels.com/photos/1598490/pexels-photo-1598490.jpeg', description: 'Stylish bag to carry your yoga gear.', category: 'accessories' },
    //     { _id: 8, name: 'Yoga Bolster', price: '130', imgUrl: 'https://images.pexels.com/photos/4056728/pexels-photo-4056728.jpeg', description: 'Supportive bolster for restorative yoga.', category: 'accessories' },
    //     // { _id: 9, name: 'Yoga Socks', price: '25', imgUrl: 'https://images.pexels.com/photos/12313940/pexels-photo-12313940.jpeg', description: 'Non-slip socks for better grip.', category: 'shoes' },
    //     { _id: 10, name: 'Yoga Blanket', price: '70', imgUrl: 'https://images.pexels.com/photos/14570732/pexels-photo-14570732.jpeg', description: 'Soft blanket for added comfort.', category: 'accessories' },
    //     { _id: 11, name: 'Yoga Ball', price: '90', imgUrl: 'https://images.pexels.com/photos/6111430/pexels-photo-6111430.jpeg', description: 'Stability ball for core exercises.', category: 'accessories' },
    //     { _id: 12, name: 'Yoga Chair', price: '200`', imgUrl: 'https://images.pexels.com/photos/3790734/pexels-photo-3790734.jpeg', description: 'Chair designed for yoga practice.', category: 'accessories' },
    //     // { _id: 13, name: 'Yoga Belt', price: '35', imgUrl: 'https://images.pexels.com/photos/6199930/pexels-photo-6199930.jpeg', description: 'Adjustable belt for stretching.', category: 'accessories' },
    //     { _id: 14, name: 'Yoga Gloves', price: '40', imgUrl: 'https://images.pexels.com/photos/3055671/pexels-photo-3055671.jpeg', description: 'Grip gloves for better hold.', category: 'accessories' },
    //     { _id: 15, name: 'Yoga Headband', price: '20', imgUrl: 'https://images.pexels.com/photos/2950501/pexels-photo-2950501.jpeg', description: 'Sweat-absorbing headband.', category: 'women' },
    //     { _id: 16, name: 'Yoga Eye Pillow', price: '25', imgUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg', description: 'Relaxing eye pillow for savasana.', category: 'accessories' },
    //     { _id: 17, name: 'Yoga Sandbag', price: '50', imgUrl: 'https://images.pexels.com/photos/4497627/pexels-photo-4497627.jpeg', description: 'Weighted sandbag for deeper stretches.', category: 'accessories' },
    //     { _id: 18, name: 'Yoga Mat Cleaner', price: '15', imgUrl: 'https://images.pexels.com/photos/4033244/pexels-photo-4033244.jpeg', description: 'Natural cleaner for your yoga mat.', category: 'accessories' },
    //     { _id: 19, name: 'Yoga DVD', price: '35', imgUrl: 'https://images.pexels.com/photos/3136541/pexels-photo-3136541.jpeg', description: 'Instructional yoga DVD.', category: 'accessories' },
    //     { _id: 20, name: 'Yoga Book', price: '45', imgUrl: 'https://images.pexels.com/photos/4203182/pexels-photo-4203182.jpeg', description: 'Comprehensive guide to yoga.', category: 'accessories' },
    //     { _id: 21, name: 'Yoga Journal', price: '25', imgUrl: 'https://images.pexels.com/photos/4576959/pexels-photo-4576959.jpeg', description: 'Journal to track your yoga progress.', category: 'women' },
    //     { _id: 22, name: 'Yoga Poster', price: '20', imgUrl: 'https://images.pexels.com/photos/7431961/pexels-photo-7431961.jpeg', description: 'Poster with yoga poses.', category: 'accessories' },
    //     { _id: 23, name: 'Yoga Necklace', price: '60', imgUrl: 'https://images.pexels.com/photos/17041216/pexels-photo-17041216.jpeg', description: 'Inspirational yoga necklace.', category: 'women' },
    //     { _id: 24, name: 'Yoga Bracelet', price: '40', imgUrl: 'https://images.pexels.com/photos/3055671/pexels-photo-3055671.jpeg', description: 'Bracelet with yoga charms.', category: 'women' },
    //     { _id: 25, name: 'Yoga Earrings', price: '30', imgUrl: 'https://images.pexels.com/photos/1865533/pexels-photo-1865533.jpeg', description: 'Earrings with yoga symbols.', category: 'women' },
    //     { _id: 26, name: 'Yoga Water Bottle', price: '35', imgUrl: 'https://images.pexels.com/photos/4000529/pexels-photo-4000529.jpeg', description: 'Eco-friendly water bottle.', category: 'accessories' },
    //     { _id: 27, name: 'Yoga Essential Oils', price: '50', imgUrl: 'https://images.pexels.com/photos/3933457/pexels-photo-3933457.jpeg', description: 'Essential oils for yoga practice.', category: 'accessories' },
    //     { _id: 28, name: 'Yoga Incense', price: '20', imgUrl: 'https://images.pexels.com/photos/5314346/pexels-photo-5314346.jpeg', description: 'Incense sticks for a calming atmosphere.', category: 'accessories' },
    //     { _id: 29, name: 'Yoga Candle', price: '30', imgUrl: 'https://images.pexels.com/photos/4381161/pexels-photo-4381161.jpeg', description: 'Scented candle for relaxation.', category: 'accessories' },
    //     { _id: 30, name: 'Yoga Music CD', price: '25', imgUrl: 'https://images.pexels.com/photos/4629385/pexels-photo-4629385.jpeg', description: 'CD with relaxing yoga music.', category: 'accessories' },
    //     // { _id: 31, name: 'Yoga Sneakers', price: '70', imgUrl: 'https://images.pexels.com/photos/3195174/pexels-photo-3195174.jpeg', description: 'Lightweight sneakers for yoga and fitness.', category: 'shoes' },
    //     // { _id: 32, name: 'Yoga Hoodie', price: '80', imgUrl: 'https://images.pexels.com/photos/4666229/pexels-photo-4666229.jpeg', description: 'Comfortable hoodie for post-practice warmth.', category: 'men' },
    //     { _id: 33, name: 'Yoga Shorts', price: '35', imgUrl: 'https://images.pexels.com/photos/3195175/pexels-photo-3195175.jpeg', description: 'Comfortable shorts for yoga classes.', category: 'men' },
    //     { _id: 34, name: 'Yoga Pants', price: '50', imgUrl: 'https://images.pexels.com/photos/3055550/pexels-photo-3055550.jpeg', description: 'Yoga pants for a comfortable practice.', category: 'women' },
    //     { _id: 35, name: 'Yoga Sports Bra', price: '40', imgUrl: 'https://images.pexels.com/photos/5438389/pexels-photo-5438389.jpeg', description: 'Sports bra for yoga sessions.', category: 'women' },
    //     { _id: 36, name: 'Yoga Tank Top', price: '30', imgUrl: 'https://images.pexels.com/photos/5438390/pexels-photo-5438390.jpeg', description: 'Breathable tank top for yoga classes.', category: 'women' },
    //     // { _id: 37, name: 'Yoga T-shirt', price: '25', imgUrl: 'https://images.pexels.com/photos/4666229/pexels-photo-4666229.jpeg', description: 'Soft and stretchy t-shirt for yoga.', category: 'women' },
    //     { _id: 38, name: 'Yoga Jacket', price: '100', imgUrl: 'https://images.pexels.com/photos/4666228/pexels-photo-4666228.jpeg', description: 'Light jacket for yoga and warm-ups.', category: 'women' },
    //     { _id: 39, name: 'Yoga Headband', price: '15', imgUrl: 'https://images.pexels.com/photos/3055555/pexels-photo-3055555.jpeg', description: 'Light and comfortable yoga headband.', category: 'women' },
    //     { _id: 40, name: 'Yoga Backpack', price: '80', imgUrl: 'https://images.pexels.com/photos/4567058/pexels-photo-4567058.jpeg', description: 'Durable backpack for yoga gear.', category: 'accessories' },
    // ],
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

