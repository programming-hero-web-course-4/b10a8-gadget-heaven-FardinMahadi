import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineAdjustments } from "react-icons/hi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveFromCart = (productTitle) => {
    const updatedCart = cartItems.filter(
      (item) => item.product_title !== productTitle
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${productTitle} removed from cart!`);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleSortByPriceDescending = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedItems);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
    localStorage.setItem("cart", JSON.stringify([]));
    setCartItems([]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-2xl font-bold mb-5">Cart</h2>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2 items-center">
            <h4 className="text-lg font-bold">Total cost:</h4>
            <p className="text-xl font-semibold">${calculateTotalPrice()}</p>
          </div>
          <button
            onClick={handleSortByPriceDescending}
            className="flex items-center gap-1 border-2 border-violet-500 px-4 py-2 rounded-full text-violet-500 font-semibold hover:bg-violet-500 hover:text-white transition"
          >
            <span>Sort by Price</span>
            <HiOutlineAdjustments />
          </button>
          <div
            onClick={handlePurchase}
            className="text-white bg-violet-500 px-4 py-2 rounded-full border-2 border-transparent cursor-pointer"
          >
            Purchase
          </div>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-5">Your cart is empty.</p>
          <Link
            to="/"
            className="bg-[#9538E2] text-white py-2 px-6 rounded-full hover:bg-[#7c2fb7]"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-center p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.product_image}
                  alt={item.product_title || "Product Image"}
                  className="w-32 rounded"
                />
                <div>
                  <h4 className="font-bold text-lg">{item.product_title}</h4>
                  <p className="text-gray-500 text-sm">
                    {item.description || "No description available"}
                  </p>
                  <p className="text-black mt-2">Price: ${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.product_title)}
                className="px-3 py-1 text-red-600 hover:text-red-800 rounded"
              >
                <CiCircleRemove size={24} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-center text-green-600">
              Congratulations!
            </h2>
            <p className="text-center text-lg mt-4">
              Your purchase has been successfully completed!
            </p>
            <div className="mt-6 text-center">
              <button
                onClick={handleCloseModal}
                className="bg-violet-500 text-white py-2 px-6 rounded-full hover:bg-violet-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
