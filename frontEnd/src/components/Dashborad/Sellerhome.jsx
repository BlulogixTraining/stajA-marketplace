import RevenueCard from "./RevnueCard";
import classes from "./Dashboard.module.css";
import { RevenueChart } from "./RevenueChart";
import { SellsByCategory } from "./SellsByCategory";
const Sellerhome = () => {
  return (
    <div
      className={` pb-2 bg-var(--bs-gray-500) `}
      style={{ backgroundColor: "var(--bs-gray-300)" }}
    >
      <div className="row mb-3 p-3">
        <div className="col-md-8">
          <div className="col d-flex gap-2">
            <RevenueCard
              title="Average Revenue"
              revenue="$25,565"
              percentageChange="20%"
              previousRevenue="$20,452"
              chartData={<div>Chart</div>}
            />{" "}
            <RevenueCard
              title="Customer Return"
              revenue="7968"
              percentageChange="15%"
              previousRevenue="$20,452"
              chartData={<div>Chart</div>}
            />{" "}
          </div>

          <RevenueChart />
        </div>
        <div className="col-md-4">
          <SellsByCategory />
        </div>
      </div>
    </div>
  );
};
export default Sellerhome;
