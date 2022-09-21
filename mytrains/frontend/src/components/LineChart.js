import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, chartOptions }) {
  return <Line data={chartData} options={{
    backgroundColor: ['rgba(200,230,255,1)'],
            borderColor: ['rgba(25,230,255,1)'],
      color: ['rgba(200,25,1)'],
    plugins: {
      title: {
        display: true,
        text: "Train Prices"
      },
      legend: {
        display: false,
     }
    }, 
    
  }}/>;
}

export default LineChart;
