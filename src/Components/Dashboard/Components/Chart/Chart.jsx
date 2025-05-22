import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./Chart.css"

const Chart = ({ title, dataKey, grid }) => {
    
const [allChart, setAllChart] = useState([]);
useEffect(() => {
    getAllChart();
  }, []);
  
  const getAllChart = async () => {
    try {
      const response = await fetch("http://localhost:3000/chart");
      const chartRaw = await response.json();

      const chartData = chartRaw.map(item => ({
        month: item.month,
        sale: Number(item.sale)
      }));
      setAllChart(chartData);
      console.log(allChart) 
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };




  if (allChart.length) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={3.95}>
        <LineChart data={allChart}>
          <XAxis dataKey="month" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};}

export default Chart;
