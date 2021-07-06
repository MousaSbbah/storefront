import React from 'react'
import Categories from './categories'
import CurrentCategory from './current-category'
import Products from './products'
const StoreFront = (props) => {


    return (
        <div style={{width:'80%',margin:'auto'}}>
            <Categories />
            <CurrentCategory />
            <Products />
        </div>
    )
}

export default StoreFront
