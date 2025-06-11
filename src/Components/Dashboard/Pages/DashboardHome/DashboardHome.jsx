import React from "react";
import "./DashboardHome.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Features from "../../Components/Features/Features";
import Chart from "../../Components/Chart/Chart";
import EndlessFooter from "../../../Footer/EndlessFooter";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <Features className="features" />
        <Chart grid title="فروش ماهانه" dataKey="sale" />
        <EndlessFooter />
      </div>
    </div>
  );
};

export default Dashboard;
