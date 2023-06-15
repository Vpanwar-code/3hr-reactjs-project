import React ,{useState} from 'react';
import ProductContext from './product-context';

const initialState={
    items:[],
    totalQuantity:0
}

const ProductProvider = (props) =>{
 
    const[medicines,setMedicines]=useState(initialState.items);

    const addMedicineToDisplay = (newMedicine) =>{
        const existingMedicineIndex=medicine.findIndex(
            (item)=> item.medicine === newMedicine.medicineName
        );

        const existingMedicine = medicines[existingMedicineIndex];
        let updatedMedicine;
        let updatedMedicines;

        if(existingMedicine){
            updatedMedicine={
                ...existingMedicine,
                medicineQuantity: +(existingMedicine.medicineQuantity) + +(newMedicine.medicineQuantity)
            };
            updatedMedicines=[...medicines];
            updatedMedicines[existingMedicineIndex]=updatedMedicine;
        }
        else{
            updatedMedicine=medicine.concat(newMedicine);
        }

        setMedicines(updatedMedicines);
    }
    const productContext={
        items:medicines,
        addMedicine : addMedicineToDisplay
    }
    return(
        <ProductContext.Provider value={productContext} >
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;