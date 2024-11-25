import bannerImg from "../../assets/banner.jpg";

const MainBanner = () => {
  return (
    <div className="md:w-3/4 mx-auto text-center mt-12 relative pb-72">
      <h1 className="text-5xl font-bold">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="mt-6 ">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn  mt-8 rounded-full bg-white text-[#9538E2] font-bold border-none">
        Shop Now
      </button>

      <div className="absolute mt-10 w-full bg-[rgba(255,255,255,0.2)] p-2 border-2 border-white rounded-xl">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default MainBanner;
