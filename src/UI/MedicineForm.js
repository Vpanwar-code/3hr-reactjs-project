import React,{useContext,useState} from 'react';
import ProductContext from '../store/product-context';

const MedicineForm=()=>{
    const productCtx=useContext(ProductContext);

    const[amount,setAmount]=useState('');
    const handleAmount=(event)=>{
        setAmount(event.target.value);
    }
    const amountEntered=(event)=>{
        event.preventDefault();
        console.log(amount);
    }

    const medicinesItems = productCtx.items.map((item)=>(
        <li>
            {item.medicineName}
            {item.medicineDescription}
            {item.medicinePrice}
            {item.medicineQuantity}
            <form onSubmit={amountEntered}>
             <input type='number' name='amount' id='amount' onChange={handleAmount}/>
             <button type='submit'>Amount Ordered</button>
            </form>
        </li>
    ));

    return(
        <>
        {medicinesItems}
        </>
    )
}
export default MedicineForm;