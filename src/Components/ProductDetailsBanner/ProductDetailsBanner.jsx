import ProductDetails from "../ProductDetails/ProductDetails";

const ProductDetailsBanner = ({ product }) => {
  return (
    <div className="mb-96">
      <div className="container mx-auto bg-[#9538E2] pt-7 pb-48 text-center text-white relative">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <p className="w-1/2 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="absolute -mt-40 left-0 right-0 md:w-3/4 mx-auto bg-white p-2 rounded-xl">
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default ProductDetailsBanner;
