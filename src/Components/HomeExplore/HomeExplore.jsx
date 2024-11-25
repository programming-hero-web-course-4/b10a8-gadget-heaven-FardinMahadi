import HomeProductCards from "../HomeProductCards/HomeProductCards";
import SortByCategory from "../SortByCategorys/SortByCategorys";

const HomeExplore = () => {
  return (
    <div className="grid grid-cols-4 px-10 ">
      <div>
        <SortByCategory />
      </div>
      <div className="col-span-3 w-full">
        <HomeProductCards />
      </div>
    </div>
  );
};

export default HomeExplore;
