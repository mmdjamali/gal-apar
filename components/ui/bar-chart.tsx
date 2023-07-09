"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CoreChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({
  data,
  options,
}: React.ComponentPropsWithoutRef<typeof Bar>) {
  return (
    <div className="relative flex flex-col p-4 border w-full aspect-[2/1] border-border rounded">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
