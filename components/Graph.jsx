import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ datas, datas2 }) => {
  const options1 = {
    scales:{
      y: {
        title: {
          display: true,
          text: "Heigth (in cm)",
          color: "black"
        }
      },
      x: {
        title: {
          display: true,
          text: "Age (in months)",
          color: "black"
        }
      }

    }
    };
  const options2 = {
    scales:{
      y: {
        title: {
          display: true,
          text: "Weigth (in Kg)",
          color: "black"
        }
      },
      x: {
        title: {
          display: true,
          text: "Age (in months)",
          color: "black"
        }
      }

    }
    };
  return (
    <div className="max-w-[1000px] w-full flex flex-col items-center gap-16">
      <Line data={datas} options={options1} />
      <Line data={datas2} options={options2} />
    </div>
  );
};

export default Graph;
