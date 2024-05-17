import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",

      labels: {
        color: "white",
      },
    },
    title: {
      display: true,
      text: "Orders VS Revenue ",
      color: "white",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const dataset1Data = [200, 400, 1000, 600, 800, 1200, 1400];
const dataset2Data = [500, 700, 300, 1500, 900, 1100, 1300];
export const data = {
  labels,
  datasets: [
    {
      label: "Orders",
      data: dataset1Data,
      borderColor: "#C1EF00",
      backgroundColor: "#C1EF00",
    },
    {
      label: "  Revenue",
      data: dataset2Data,
      borderColor: "#E8502F",
      backgroundColor: "#E8502F",
    },
  ],
};
export const RevenueChart = () => {
  return (
    <div
      className="   rounded-2 shadow-md"
      style={{ backgroundColor: "var(--bs-gray-100)" }}
    >
      <Line data={data} options={options} />
    </div>
  );
};
