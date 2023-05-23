import React from 'react';
import ProductForm from './components/ProductForm';
import FilterProduct from './components/FilterProduct';

const dummyData=[];

function App() {

const[products,setProduct]=useState(dummyData);

const addNewProductToData = (product)=>{
  setProduct([product,...products]);
}

  return (
    <div>
<ProductForm onAdding={addNewProductToData}/>
<FilterProduct data={products}/>
    </div>
  );
}

export default App;
