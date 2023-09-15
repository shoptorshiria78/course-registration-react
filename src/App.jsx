import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Courses/Courses'
import Cart from './Component/Cart/Cart'
import { useState } from 'react'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [tPrice, setPrice] = useState(0);
  const [tHour, setHour] = useState(0);
  const [tTitle, setTitle] = useState([])
  const [rHour, setRHour] = useState(20);
  const handleSelect = (hour, price, title) =>{
        
       const nHour = JSON.parse(hour);
       const nPrice = JSON.parse(price) ;
   
       const  isExists = tTitle.find(pTitle => pTitle == title);
       if(isExists){
        return toast('already exists in the Cart');
       }
       else{  
        
        setTitle([...tTitle, title]);
        
       }

       if((tHour+nHour) > 20 && (20 - (tHour+nHour)) < 0)
       {
        return toast('Credit hour finished. cannot add any course')
       }
       else{
        setRHour(20 - (tHour + nHour));
        setHour(tHour + nHour);
        setPrice(tPrice + nPrice);

       }
      
       
       
  }

  

  return (
    <>
      <div className="w-11/12 mx-auto ">
      <Header></Header>
      <div className=" grid grid-cols-4">
      <Courses handleSelect={handleSelect}></Courses>
      <Cart
      tPrice={tPrice}
      tHour={tHour}
      tTitle={tTitle}
      rHour={rHour}
      ></Cart>
      </div >
      </div>
      
      

    </>
  )
}

export default App
