import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, chartOptions }) {
  return <Line data={chartData} options={{
    plugins: {
      title: {
        display: true,
        text: "Train Prices"
      },
      legend: {
        display: false,
     }
    }
  }}/>;
}

export default LineChart;
