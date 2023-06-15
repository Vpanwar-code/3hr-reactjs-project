import React from 'react';
import ProductForm from './components/ProductForm';
import FilterProduct from './components/FilterProduct';
import MedicineForm from './Form/MedicineForm';
import DisplayMedicine from './UI/DisplayMedicine';


function App() {
return(
    <div>
        <ProductProvider>
            <MedicineForm/>
            <DisplayMedicine/>
        </ProductProvider>
    </div>
)

}

export default App;
