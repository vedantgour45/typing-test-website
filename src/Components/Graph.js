import React from "react";
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
import { useTheme } from "../Context/ThemeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ graphData }) => {
  const { theme } = useTheme();

  return (
    <>
      <Line
        data={{
          labels: graphData.map((i) => i[0]), // x-axis / 0th index time
          datasets: [
            {
              data: graphData.map((i) => i[1]), // y-axis / 1st index is wpm
              label: "wpm",
              borderColor: theme.typeBoxText,
            },
          ],
        }}
      />
    </>
  );
};

export default Graph;
