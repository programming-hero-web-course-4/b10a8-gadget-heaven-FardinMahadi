import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (productTitle) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.product_title !== productTitle
    );
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    alert(`${productTitle} removed from wishlist!`);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          {wishlistItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 mb-4 border rounded-lg shadow-sm"
            >
              <img
                src={item.product_image}
                alt={item.product_title}
                className="w-16 h-16 rounded"
              />
              <div className="flex-1">
                <h4 className="font-bold">{item.product_title}</h4>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => handleRemoveFromWishlist(item.product_title)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
