import { useState, useEffect } from 'react'

export function ProductFilter({ filterBy, setFilterBy }) {
    const [filterToEdit, setFilterToEdit] = useState(structuredClone(filterBy))

    useEffect(() => {
        setFilterBy(filterToEdit)
    }, [filterToEdit])

    function handleChange(ev) {
        const type = ev.target.type
        const field = ev.target.name
        let value

        switch (type) {
            case 'text':
            case 'radio':
            case 'select-one':
            case 'range':
                value = ev.target.value
                break
            case 'number':
                value = +ev.target.value || ''
                break
        }
        setFilterToEdit({ ...filterToEdit, [field]: value })
    }

    function clearFilter() {
        setFilterToEdit({ ...filterToEdit, txt: '', category: '', maxPrice: 1000 })
    }

    return (
        <section className="product-filter">
            <h3>Filter:</h3>
            <input
                type="text"
                name="txt"
                value={filterToEdit.txt}
                placeholder="Free text"
                onChange={handleChange}
                required
            />
            <label>
                Max price: {filterToEdit.maxPrice} NIS
                <input
                    type="range"
                    name="maxPrice"
                    min="0"
                    max="1000"
                    value={filterToEdit.maxPrice}
                    onChange={handleChange}
                />
            </label>
            <select name="category" value={filterToEdit.category} onChange={handleChange}>
                <option value="">All Categories</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="shoes">Shoes</option>
                <option value="accessories">Accessories</option>
            </select>
            <button className="btn-clear" onClick={clearFilter}>Clear</button>
        </section>
    )
}