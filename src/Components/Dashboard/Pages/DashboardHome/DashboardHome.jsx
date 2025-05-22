import React from "react";
import "./DashboardHome.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Features from "../../Components/Features/Features";
import Chart from "../../Components/Chart/Chart";
import EndlessFooter from "../../../Footer/EndlessFooter";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <Features />
        <Chart
        grid title="فروش ماهانه" dataKey="sale"
         />
      </div>
      <EndlessFooter />
    </>
  );
};

export default Dashboard;
