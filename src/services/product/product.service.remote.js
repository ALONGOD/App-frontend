import { httpService } from '../http.service'

export const productService = {
    query,
    getById,
    save,
    remove,
    addProductMsg
}

async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(`product`, filterBy)
}

function getById(productId) {
    return httpService.get(`product/${productId}`)
}

async function remove(productId) {
    return httpService.delete(`product/${productId}`)
}
async function save(product) {
    var savedProduct
    if (product._id) {
        savedProduct = await httpService.put(`product/${product._id}`, product)
    } else {
        savedProduct = await httpService.post('product', product)
    }
    return savedProduct
}

async function addProductMsg(productId, txt) {
    const savedMsg = await httpService.post(`product/${productId}/msg`, {txt})
    return savedMsg
}