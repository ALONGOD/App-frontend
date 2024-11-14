
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'product'

export const productService = {
    query,
    getById,
    save,
    remove,
    addProductMsg
}
window.cs = productService


async function query(filterBy = { txt: '', price: 0 }) {
    var products = await storageService.query(STORAGE_KEY)
    const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        products = products.filter(product => regex.test(product.vendor) || regex.test(product.description))
    }
    if (minSpeed) {
        products = products.filter(product => product.speed >= minSpeed)
    }
    if(sortField === 'vendor' || sortField === 'owner'){
        products.sort((product1, product2) => 
            product1[sortField].localeCompare(product2[sortField]) * +sortDir)
    }
    if(sortField === 'price' || sortField === 'speed'){
        products.sort((product1, product2) => 
            (product1[sortField] - product2[sortField]) * +sortDir)
    }
    
    products = products.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
    return products
}

function getById(productId) {
    return storageService.get(STORAGE_KEY, productId)
}

async function remove(productId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, productId)
}

async function save(product) {
    var savedProduct
    if (product._id) {
        const productToSave = {
            _id: product._id,
            price: product.price,
            speed: product.speed,
        }
        savedProduct = await storageService.put(STORAGE_KEY, productToSave)
    } else {
        const productToSave = {
            vendor: product.vendor,
            price: product.price,
            speed: product.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedProduct = await storageService.post(STORAGE_KEY, productToSave)
    }
    return savedProduct
}

async function addProductMsg(productId, txt) {
    // Later, this is all done by the backend
    const product = await getById(productId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    product.msgs.push(msg)
    await storageService.put(STORAGE_KEY, product)

    return msg
}