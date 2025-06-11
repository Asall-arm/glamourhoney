import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Features = () => {
  const [allCms, setAllCms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cms")
      .then((res) => res.json())
      .then((cms) => setAllCms(cms));
  }, []);

  const cms = allCms[0] || {};
  const parseRate = (rate) => Number((rate || "0").replace(/,/g, "")) || 0;

  const revenueRate = parseRate(cms.revenuerate);
  const saleRate = parseRate(cms.salerate);
  const costRate = parseRate(cms.costrate);

  return (
    <div className="w-full flex flex-wrap justify-between gap-6">
      {[
        { title: "درآمد", value: cms.revenue, rate: cms.revenuerate, number: revenueRate },
        { title: "فروش", value: cms.sale, rate: cms.salerate, number: saleRate },
        { title: "هزینه", value: cms.costrate, rate: cms.costrate, number: costRate },
      ].map((item, idx) => (
        <div
          key={idx}
          className="mt-10 flex-1 min-w-[250px] bg-[var(--color-neutral)] p-6 rounded-[var(--radius-lg)] shadow-md flex flex-col gap-4"
        >
          <span
            className="text-[var(--color-primary)] text-lg font-semibold"
            style={{ fontFamily: "var(--font-title)" }}
          >
            {item.title}
          </span>

          <div className="flex justify-between items-center">
            <span
              className="text-2xl font-bold text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              {item.value}
            </span>

            <span className="flex items-center gap-1 text-sm text-[var(--color-muted)]">
              {item.rate}
              <span
                className={`ml-1 ${
                  item.number > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {item.number > 0 ? <FaArrowUp /> : <FaArrowDown />}
              </span>
            </span>
          </div>

          <span
            className="text-sm text-[var(--color-muted)]"
            style={{ fontFamily: "var(--font-secondary)" }}
          >
            مقایسه با ماه گذشته
          </span>
        </div>
      ))}
    </div>
  );
};

export default Features;
