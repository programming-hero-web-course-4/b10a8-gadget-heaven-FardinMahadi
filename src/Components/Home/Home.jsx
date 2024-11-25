import HomeExplore from "../HomeExplore/HomeExplore";
import MainBanner from "../MainBanner/MainBanner";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <>
      <div className="container mx-auto p-8 mb-96">
        <div className="p-2 rounded-[30px] text-white border border-black bg-gray-100">
          <div className="bg-[#9538E2] rounded-3xl py-3">
            {/* navbar */}
            <NavBar />
            <MainBanner />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <HomeExplore />
      </div>
    </>
  );
};

export default Home;
