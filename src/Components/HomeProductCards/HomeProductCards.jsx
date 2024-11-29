import HomeProductCard from "../HomeProductCard/HomeProductCard";

const HomeProductCards = ({ products, activeCategory }) => {
  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;
  console.log(filteredProducts);

  return (
    <div className="text-black w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      {filteredProducts.map((product) => (
        <HomeProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default HomeProductCards;
