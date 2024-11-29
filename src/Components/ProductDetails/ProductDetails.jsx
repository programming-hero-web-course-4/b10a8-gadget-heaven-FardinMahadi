import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StarRating from "../StarRating/StarRating";

const ProductDetails = ({ product }) => {
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductInCart = cart.some(
      (item) => item.product_title === product_title
    );

    if (!isProductInCart) {
      cart.push({ product_title, price, product_image, description });
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success(`${product_title} added to cart!`, {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.info(`${product_title} is already in the cart.`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyWishlisted = wishlist.some(
      (item) => item.product_title === product_title
    );
    setIsWishlisted(alreadyWishlisted);
  }, [product_title]);

  const handleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.some((item) => item.product_title === product_title)) {
      wishlist.push({ product_title, price, product_image, description });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsWishlisted(true);
      toast.success(`${product_title} added to wishlist!`, {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.info(`${product_title} is already in your wishlist.`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 w-auto py-5">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        progressStyle={{ backgroundColor: "#9538E2" }}
      />
      <img
        className="max-w-[400px] rounded-lg"
        src={product_image}
        alt={product_title}
      />
      <div>
        <h2 className="font-bold text-xl">{product_title}</h2>
        <p>Price: ${price}</p>

        <div className="inline-block">
          {availability === "In Stock" && (
            <div className="px-3 py-1 mt-2 bg-lime-200 border border-lime-600 rounded-full text-xs text-lime-900">
              {availability}
            </div>
          )}
        </div>

        <div className="mt-3">
          <p className="text-gray-500">{description}</p>
          <div className="mt-5">
            <h4>Specification:</h4>
            <div className="text-gray-500 mt-2">
              {specification?.length > 0 ? (
                specification.map((data, idx) => (
                  <div key={idx}>
                    {idx + 1}. {data}
                  </div>
                ))
              ) : (
                <p>No specifications available.</p>
              )}
            </div>
            <div className="mt-2">
              <h4>Rating:</h4>
              <StarRating rating={rating} />
            </div>
          </div>
          <div className="mt-3 flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 font-bold text-white bg-[#9538E2] py-2 px-4 rounded-full border-2 border-transparent hover:bg-white hover:border-2 hover:border-[#9538E2] hover:text-[#9538E2] transition"
            >
              Add To Cart <AiOutlineShoppingCart />
            </button>
            <button
              onClick={handleWishlist}
              disabled={isWishlisted}
              className={`btn rounded-full font-bold border-gray-400 ${
                isWishlisted
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-white text-black hover:text-white"
              }`}
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
