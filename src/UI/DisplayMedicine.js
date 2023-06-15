import React ,{useContext} from 'react';
import MedicineForm from './MedicineForm';

const DisplayMedicine = () =>{
    return(
        <div>
            <h2>
                Medicines Available
            </h2>
            <ul>
                <MedicineForm/>
            </ul>
        </div>
    )
}
export default DisplayMedicine;