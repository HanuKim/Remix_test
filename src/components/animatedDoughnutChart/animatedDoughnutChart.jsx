import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./animatedDoughnutChart.css";

// Chart.js 요소들을 등록합니다.
ChartJS.register(ArcElement, Tooltip, Legend);

const backgroundData = {
  labels: ["Grey"],
  datasets: [
    {
      label: "Background",
      data: [1],
      backgroundColor: ["#DDDDDD"],
      borderColor: ["#DDDDDD"],
      borderWidth: 1,
    },
  ],
};

const animatedData = {
  labels: ["Red"],
  datasets: [
    {
      label: "Progress",
      data: [83.4, 16.6], // 전체 100% 중 83.4%가 빨간색, 나머지 16.6%가 투명
      backgroundColor: ["#F55", "transparent"], // 빨간색과 투명
      borderColor: ["#FF6384", "transparent"],
      borderWidth: 1,
      borderRadius: 60, // 도넛 차트의 모양을 조절합니다.
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  animation: {
    animateScale: false,
    animateRotate: true,
  },
  cutout: "40%", // 도넛 차트의 가운데를 비우는 비율
  rotation: -210 * Math.PI, // 시작 각도를 조절합니다.
};

const secondOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  animation: {
    animateScale: false,
    animateRotate: false,
  },
  cutout: "40%", // 도넛 차트의 가운데를 비우는 비율
};

const AnimatedDoughnutChart = () => {
  return (
    <div className="chart-container">
      <div className="background-chart">
        <Doughnut data={backgroundData} options={secondOptions} />
      </div>
      <div className="background-text">16.6</div>
      <div className="foreground-chart">
        <Doughnut data={animatedData} options={options} />
      </div>
      <div className="chart-text">83.4</div>
    </div>
  );
};

export default AnimatedDoughnutChart;
