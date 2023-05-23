import React from 'react';
const Items= (props) =>{

    return(
        <ul>
            {
                props.items.map((product)=>{
                    <li key={product.productId}>
                        {product.name}
                        {product.price}
                        {product.category}
                    </li>
                })
            }
        </ul>
    )
}
export default Items;