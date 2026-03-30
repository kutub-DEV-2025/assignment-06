const Banner = () => {
  return (
    <div className="px-10 py-16 flex flex-col md:flex-row items-center justify-between bg-gray-50">

      <div className="max-w-lg">
        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">
          #1 AI Tools
        </span>

        <h1 className="text-5xl font-bold mt-4">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-gray-500 mt-4">
          Access premium tools & boost productivity.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full">
            Explore
          </button>

          <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-full">
            Demo
          </button>
        </div>
      </div>

      <img
        src="https://i.ibb.co/0jqHpnp/ai-hand.png"
        className="w-80 mt-10"
      />
    </div>
  );
};

export default Banner;