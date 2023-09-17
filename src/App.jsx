import { useState } from "react"
import Home from "./Components/Home/Home"
import Cart from "./Components/Cart/Cart";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function App() {
  
  
  const [carts,setCarts] = useState([])
  const [cost,setCost] = useState(0);
  const [remaining,setRemaining] = useState(30000);
  
  const handleSelect = (actor) => {
    const isExist = carts.find(cart => cart.id === actor.id)
    if (!isExist) {         
      const totalCost = (cost) + (actor.salary);
      const remains = remaining- (actor.salary);    
      if (remains < 0) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your Budget is over!',
          footer: '<a href="">Back To Home</a>'
        })
      }
      const newCarts = [...carts,actor];  
      setCarts(newCarts);
      setCost(totalCost);
      setRemaining(remains);
    }else {     
      Swal.fire('Already Added!')
    }
  } 
  

  return (
    <div className="xl:px-32 px-20 mx-auto my-20 flex justify-around gap-10  md:flex-row flex-col">
     <Home
        handleSelect={handleSelect}
     />
     <Cart
        carts={carts}
        cost={cost}
        remaining={remaining}
     />
    </div>
  )
}

export default App
