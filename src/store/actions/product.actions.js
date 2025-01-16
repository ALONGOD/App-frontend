import { productService } from '../../services/product'
import { store } from '../store'
import { ADD_PRODUCT, REMOVE_PRODUCT, SET_PRODUCTS, SET_PRODUCT, UPDATE_PRODUCT, ADD_PRODUCT_MSG } from '../reducers/product.reducer'

export async function loadProducts(filterBy) {
    try {
        const products = await productService.query(filterBy)
        store.dispatch(getCmdSetProducts(products))
    } catch (err) {
        console.log('Cannot load products', err)
        throw err
    }
}



export async function loadProduct(productId) {
    try {
        const product = await productService.getById(productId)
        store.dispatch(getCmdSetProduct(product))
    } catch (err) {
        console.log('Cannot load product', err)
        throw err
    }
}


export async function removeProduct(productId) {
    try {
        await productService.remove(productId)
        store.dispatch(getCmdRemoveProduct(productId))
    } catch (err) {
        console.log('Cannot remove product', err)
        throw err
    }
}

export async function addProduct(product) {
    try {
        const savedProduct = await productService.save(product)
        store.dispatch(getCmdAddProduct(savedProduct))
        return savedProduct
    } catch (err) {
        console.log('Cannot add product', err)
        throw err
    }
}

export async function updateProduct(product) {
    try {
        const savedProduct = await productService.save(product)
        store.dispatch(getCmdUpdateProduct(savedProduct))
        return savedProduct
    } catch (err) {
        console.log('Cannot save product', err)
        throw err
    }
}

export async function addProductMsg(productId, txt) {
    try {
        const msg = await productService.addProductMsg(productId, txt)
        store.dispatch(getCmdAddProductMsg(msg))
        return msg
    } catch (err) {
        console.log('Cannot add product msg', err)
        throw err
    }
}

// Command Creators:
function getCmdSetProducts(products) {
    return {
        type: SET_PRODUCTS,
        products
    }
}
function getCmdSetProduct(product) {
    return {
        type: SET_PRODUCT,
        product
    }
}
function getCmdRemoveProduct(productId) {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}
function getCmdAddProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}
function getCmdUpdateProduct(product) {
    return {
        type: UPDATE_PRODUCT,
        product
    }
}
function getCmdAddProductMsg(msg) {
    return {
        type: ADD_PRODUCT_MSG,
        msg
    }
}

// unitTestActions()
async function unitTestActions() {
    await loadProducts()
    await addProduct(productService.getEmptyProduct())
    await updateProduct({
        _id: 'm1oC7',
        title: 'Product-Good',
    })
    await removeProduct('m1oC7')
    // TODO unit test addProductMsg
}
