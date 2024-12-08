const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { productService as local } from './product.service.local'
import { productService as remote } from './product.service.remote'

function getEmptyProduct() {
    return {
        // _id: makeId(), // Assuming makeId generates a unique ID
        name: '',
        price: 0,
        imgUrl: '',
        description: '',
        category: '',
        createdAt: new Date().toISOString(), // Set to current date
    };
}

function getDefaultFilter() {
    return {
        txt: '',
        maxPrice: '',
        category: '',
    };
}

const service = VITE_LOCAL === 'true' ? local : remote
export const productService = { getEmptyProduct, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.productService = productService
