import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Courses/Courses'
import Cart from './Component/Cart/Cart'

function App() {
  

  return (
    <>
      <div className="w-11/12 mx-auto ">
      <Header></Header>
      <div className=" grid grid-cols-4">
      <Courses></Courses>
      <Cart></Cart>
      </div >
      </div>
      
      

    </>
  )
}

export default App
