import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg">

      <h2 className="font-semibold">{product.icon} {product.name}</h2>

      <p className="text-sm text-gray-500 mt-2">
        {product.description}
      </p>

      <h3 className="mt-3 font-bold">
        ${product.price}/{product.period}
      </h3>

      <ul className="text-sm mt-2">
        {product.features.map((f,i)=><li key={i}>✔ {f}</li>)}
      </ul>

      <button
        onClick={()=>{
          addToCart(product);
          toast.success("Added to cart");
        }}
        className="w-full mt-4 bg-purple-600 text-white py-2 rounded-full"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;