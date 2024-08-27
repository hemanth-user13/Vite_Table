import { useState } from 'react';
import Navbar from './Header/Navbar';
import ReactSearchBox from "react-search-box";


function AddProducts() {
  const [count,setCount]=useState(0)
  
  return (
    <div>
      <Navbar />
      <h2 className='text-3xl font-serif ml-40 py-3'>Welcome to add product page </h2>
      <button className='' onClick={()=>setCount(count=>count+1)}>Click Here</button>
      {count}
      
    </div>
  )
}

export default AddProducts
