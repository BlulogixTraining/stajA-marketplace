import { AiOutlineRise } from "react-icons/ai";
const RevenueCard = ({
  title,
  revenue,
  percentageChange,
  previousRevenue,
  chartData,
}) => {
  return (
    <div
      className="card revenue-card  text-dark p-3 mb-3 w-100"
      style={{ backgroundColor: "var(--bs-gray-100)" }}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center mb-3">
            <h2 className="me-3">{revenue}</h2>
            <div className="d-flex align-items-center text-success">
              <AiOutlineRise /> <span>{percentageChange}</span>
            </div>
          </div>{" "}
          <div className="chart">
            {/* You can replace this with an actual chart component */}
            {chartData}
          </div>
        </div>

        <p className="">{previousRevenue}</p>
      </div>
    </div>
  );
};

export default RevenueCard;
