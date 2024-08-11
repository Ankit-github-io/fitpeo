"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  elements,
} from "chart.js";
import { callback } from "chart.js/helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps {
  data: any;
  options?: any;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data, options }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false, // Disable to allow height to fill container
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
          min: 5000,
          max: 15000,
          callback: (value: number) => `${value / 1000}k`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return (
    <div className="flex justify-center items-center h-full w-full max-h-[300px] p-4">
      <Bar data={data} options={mergedOptions} />
    </div>
  );
};

export default ChartComponent;
