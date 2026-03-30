import { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Stats from "./Stats";
import ToggleSection from "./ToggleSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [cart,setCart]=useState([]);

  const addToCart=(p)=>setCart([...cart,p]);
  const removeItem=(id)=>setCart(cart.filter(p=>p.id!==id));
  const clearCart=()=>setCart([]);

  return (
    <>
      <Navbar cartCount={cart.length}/>
      <Banner/>
      <Stats/>

      <ToggleSection
        cart={cart}
        addToCart={addToCart}
        removeItem={removeItem}
        clearCart={clearCart}
      />

      <ToastContainer/>
    </>
  );
}

export default App;