import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // 범례 표시 안함
    },
    title: {
      display: true,
      text: "상품 구입 시 캐릭터의 구매 결정 영향 여부",
    },
  },
};

const labels = [
  "전혀 영향을 미치지 않음",
  "별로 영향을 미치지 않음",
  "보통",
  "대체로 영향을 미침",
  "매우 영향을 미침",
];

const dataValues = [1.8, 6.9, 26.1, 51.5, 13.7];

export const data = {
  labels,
  datasets: [
    {
      label: "영향도",
      data: dataValues,
      backgroundColor: labels.map((label, index) => {
        if (label === "대체로 영향을 미침" || label === "매우 영향을 미침") {
          return "#f55"; // 빨간색
        }
        return "rgba(200, 200, 200, 0.8)"; // 회색
      }),
      borderRadius: 99, // 각 바의 끝을 둥글게
    },
  ],
};

export function AnimatedVerticalChart() {
  return <Bar options={options} data={data} />;
}

export default AnimatedVerticalChart;
