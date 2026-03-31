
const Navbar = ({ cartCount }) => {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
  DigiTools
</h1>

      <ul className="hidden md:flex gap-6 text-sm text-gray-600">
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQ</li>
      </ul>

      <div className="flex items-center gap-4">
        

        <div className="relative text-xl">
          🛒
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
            {cartCount}
          </span>
        </div>
        <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;