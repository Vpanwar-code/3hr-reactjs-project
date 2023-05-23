import React, {useState} from 'react';

const ProductForm = (props)=>{

    const[prodId, setProdId]=useState('');
    const[name, setName]=useState('');
    const[category, setCategory]=useState('');
    const[price, setPrice]=useState('');

    const handleProdId=(event)=>{
        setProdId(event.target.value);
    }

    const handlePrice=(event)=>{
        setPrice(event.target.value);
    }

    const handleName=(event)=>{
        setName(event.target.value);
    }

    const handleCategory=(event)=>{
        setCategory(event.target.value);
    }

    const handleInputData=(event)=>{
        event.preventDefault();

        const productData={
            productId : prodId,
            price : price ,
            category : category,
            name : name
        };
        props.onAdding(productData);
        setCategory('');
        setName('');
        setPrice('');
        setProdId('');
    }

return (
    <form onSubmit={handleInputData}>
        <div>
            <label>Product ID</label>
            <input type='number' value={prodId} onChange={handleProdId}></input>
        </div>

        <div>
            <label>Price</label>
            <input type='number' value={price} onChange={handlePrice}></input>
        </div>

        <div>
            <label>Product Name</label>
            <input type='number' value={name} onChange={handleName}></input>
        </div>

        <div>
            <label>Category</label>
           <select type='text' value={category} onChange={handleCategory}>
            <option value='null'>Nothing</option>
            <option value='Electronics'>Electronics</option>
            <option value='Skincare'>Skincare</option>
            <option value='food'>food</option>
           </select>
        </div>
     <button type="submit">Add Product</button>
    </form>
)

}
export default ProductForm;
