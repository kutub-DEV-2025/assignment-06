import { toast } from "react-toastify";

const Cart = ({ cart, removeItem, clearCart }) => {
  const total = cart.reduce((sum,p)=>sum+p.price,0);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

      {cart.length===0 && <p>Cart is empty</p>}

      {cart.map(item=>(
        <div key={item.id} className="flex justify-between py-2">
          <span>{item.icon} {item.name}</span>

          <button
            onClick={()=>{
              removeItem(item.id);
              toast.error("Removed");
            }}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="mt-4 font-bold">Total: ${total}</h3>

      <button
        onClick={()=>{
          clearCart();
          toast.info("Checkout done");
        }}
        className="w-full mt-4 bg-purple-600 text-white py-2 rounded-full"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;