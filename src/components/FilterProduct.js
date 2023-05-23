import React from 'react';
import Items from './Items';

const FilterProduct=(props)=>{

    const electronicsItems=props.data.filter((product)=>{
        return product.category === 'Electronics';
    })

    const foodItems=props.data.filter((product)=>{
        return product.category === 'food';
    })

    const skinItems=props.data.filter((product)=>{
        return product.category === 'Skincare';
    })

    return(
        <div>
            <div>
                <h2>Electronics Items</h2>
                <Items items={electronicsItems}/>
            </div>
            <div>
                <h2>Food Items</h2>
                <Items items={foodItems}/>
            </div>
            <div>
                <h2>Skincare Items</h2>
                <Items items={skinItems}/>
            </div>
        </div>
    )
}
export default FilterProduct;