const HomeProductCard = ({ product }) => {
  const { product_id, product_title, product_image, price } = product;
  return (
    <div className="p-4 bg-gray-100 rounded-xl">
      <img src={product_image} className="rounded-lg" />
      <h3 className="text-black font-semibold mt-5">{product_title}</h3>
      <p className="text-gray-500 mt-2 text-sm">Price: {price}k</p>
      <button
        className="text-sm rounded-full mt-3  bg-white py-2 px-3
       border-2 border-violet-600 text-violet-600 font-semibold hover:bg-violet-600 hover:text-white transition"
      >
        View Details
      </button>
    </div>
  );
};

export default HomeProductCard;
