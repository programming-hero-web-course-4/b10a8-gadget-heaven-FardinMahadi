import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
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

const StatsChart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  if (products.length === 0) {
    return <p>Loading product data...</p>;
  }

  const productNames = products.map((product) => product.product_title);
  const productPrices = products.map((product) => product.price);

  const data = {
    labels: productNames,
    datasets: [
      {
        label: "Product Price",
        data: productPrices,
        backgroundColor: "#9538E2",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Product Price Comparison",
      },
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mx-auto w-3/4 my-10">
      <h2 className="font-bold">Statistics</h2>
      <div className="p-5 bg-white mt-3 rounded-xl">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StatsChart;
