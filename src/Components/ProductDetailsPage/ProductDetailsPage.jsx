import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import NavBar from "../NavBar/NavBar";
import ProductDetailsBanner from "./../ProductDetailsBanner/ProductDetailsBanner";

const ProductDetailsPage = () => {
  const { productId } = useParams(); // Fetch productId from the URL
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data[productId - 1]);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (!product) {
    return <div>Product not found or loading...</div>;
  }

  return (
    <>
      <div className="bg-gray-100 text-black">
        <NavBar />
        <div>
          <ProductDetailsBanner product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
