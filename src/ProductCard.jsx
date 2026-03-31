import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border hover:shadow-xl transition duration-300">

      {/* Badge */}
      {product.badge && (
        <span className="absolute right-6 top-6 bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-xl">
        {product.icon}
      </div>

      {/* Title */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        {product.name}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2">
        {product.description}
      </p>

      {/* Price */}
      <h3 className="mt-4 text-xl font-bold text-gray-900">
        ${product.price}
        <span className="text-sm text-gray-500">/{product.period}</span>
      </h3>

      {/* Features */}
      <ul className="text-sm mt-3 space-y-1 text-gray-600">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-500">✔</span> {f}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => {
          addToCart(product);
          toast.success("Added to cart");
        }}
        className="w-full mt-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium hover:opacity-90 transition"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;