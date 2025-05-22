import React, { useEffect, useState } from "react";
import "./Features.css";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Features = () => {
  const [allCms, setAllCms] = useState([]);

  useEffect(() => {
    getAllCms();
  }, []);

  const getAllCms = () => {
    fetch("http://localhost:3000/cms")
      .then((res) => res.json())
      .then((cms) => setAllCms(cms));
  };

  const cms = allCms[0] || {};

  const rawRevenuerate = cms.revenuerate || "0";
  const cleanedRevenuerate = rawRevenuerate.replace(/,/g, "");
  const number1 = Number(cleanedRevenuerate) || 0;

  const rawSalerate = cms.salerate || "0";
  const cleanedSalerate = rawSalerate.replace(/,/g, "");
  const number2 = Number(cleanedSalerate) || 0;


  const rawCostrate = cms.costrate || "0";
  const cleanedCostrate = rawCostrate.replace(/,/g, "");
  const number3 = Number(cleanedCostrate) || 0;

  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">درآمد</span>
        <div className="featureContainer">
          <span className="featureMoney">{cms.revenue}</span>
          <span className="featureRate">
            {cms.revenuerate}
            <span className={`featureIcon ${number1 > 0 ? "positive" : "negative"}`}>
              {number1 > 0 ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </span>
        </div>
        <span className="featureSub">مقایسه با ماه گذشته</span>
      </div>

      <div className="featureItem">
        <span className="featureTitle">فروش</span>
        <div className="featureContainer">
          <span className="featureMoney">{cms.sale}</span>
          <span className="featureRate">
            {cms.salerate}
            <span className={`featureIcon ${number2 > 0 ? "positive" : "negative"}`}>
              {number2 > 0 ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </span>
        </div>
        <span className="featureSub">مقایسه با ماه گذشته</span>
      </div>

      <div className="featureItem">
        <span className="featureTitle">هزینه</span>
        <div className="featureContainer">
          <span className="featureMoney">{cms.costrate}</span>
          <span className="featureRate">
            {cms.costrate}
            <span className={`featureIcon ${number3 > 0 ? "positive" : "negative"}`}>
              {number3 > 0 ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </span>
        </div>
        <span className="featureSub">مقایسه با ماه گذشته</span>
      </div>
    </div>
  );
};

export default Features;
