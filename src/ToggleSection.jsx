import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const ToggleSection = ({ cart, addToCart, removeItem, clearCart }) => {
  const [view,setView]=useState("products");

  return (
    <div className="px-10 py-16">

      <div className="flex justify-center gap-4">
        <button onClick={()=>setView("products")} className="btn">
          Products
        </button>

        <button onClick={()=>setView("cart")} className="btn">
          Cart
        </button>
      </div>

      {view==="products" 
        ? <Products addToCart={addToCart}/>
        : <Cart cart={cart} removeItem={removeItem} clearCart={clearCart}/>
      }
    </div>
  );
};

export default ToggleSection;