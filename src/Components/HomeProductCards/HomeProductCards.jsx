import { useEffect, useState } from "react";

const HomeProductCards = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("../../assets/products.json").then();
  }, []);
  return <div className="text-black w-full h-80">this is product card</div>;
};

export default HomeProductCards;
