import NavBar from "../NavBar/NavBar";
import StatsBanner from "../StatsBanner/StatsBanner";
import StatsChart from "../StatsChart/StatsChart";

const Stats = () => {
  return (
    <div className="bg-gray-100 text-black">
      <NavBar />
      <StatsBanner />
      <StatsChart />
    </div>
  );
};

export default Stats;
