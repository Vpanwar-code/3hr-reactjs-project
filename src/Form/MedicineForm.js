import { useContext, useState } from "react"


const MedicineForm = () =>{
    const productCtx = useContext(ProductContext);
    const[name,setName]=useState('');
    const[description,setDescription]=useState('');
    const[price,setPrice]=useState('');
    const[quantity,setQuantity]=useState('');

    const handleMedicineName=(event)=>{
        setName(event.target.value);
    }

     const handleDescription=(event)=>{
        setName(event.target.value);
    }

     const handlePrice=(event)=>{
        setName(event.target.value);
    }

     const handleQuantity=(event)=>{
        setName(event.target.value);
    }

     const addProductToContext=(event)=>{

        event.preventDefault();
        const data={
            medicineName : name,
            medicineDescription : description,
            medicinePrice : price,
            medicineQuantity : quantity
        };
        productCtx.addMedicine(data);


     }
return (
    <form onSubmit={addProductToContext}>
      <label htmlFor="medicineName">Medicine Name:</label>
      <input type="text" name="medicineName" id="medicineName" onChange={handleMedicineName}/>

       <label htmlFor="desc">Description :</label>
      <input type="text" name="desc" id="desc" onChange={handleDescription}/>

       <label htmlFor="price">Price :</label>
      <input type="number" name="price" id="price" onChange={handlePrice}/>

       <label htmlFor="quantity">Quantity :</label>
      <input type="number" name="quantity" id="quantity" onChange={handleQuantity}/>

      <button type="submit">Add Product</button>
    </form>
)

}
export default MedicineForm;