import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const ToggleSection = ({ cart, addToCart, removeItem, clearCart }) => {
  const [view, setView] = useState("products");

  return (
    <div className="px-10 py-16">

      
      <div className="flex justify-center gap-4">
        
    
        <button
          onClick={() => setView("products")}
          className={`px-6 py-2 rounded-full transition
            ${
              view === "products"
                ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
                : "border text-gray-600"
            }`}
        >
          Products
        </button>

       
        <button
          onClick={() => setView("cart")}
          className={`px-6 py-2 rounded-full transition
            ${
              view === "cart"
                ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white"
                : "border text-gray-600"
            }`}
        >
          Cart ({cart.length})
        </button>

      </div>

     
      {view === "products" ? (
        <Products addToCart={addToCart} />
      ) : (
        <Cart cart={cart} removeItem={removeItem} clearCart={clearCart} />
      )}
    </div>
  );
};

export default ToggleSection;