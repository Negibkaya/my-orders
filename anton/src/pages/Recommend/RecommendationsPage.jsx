// RecommendationsPage.js

import React, { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "./RecommendationsPage.css";

const RecommendationsPage = () => {
  const [recommendationType, setRecommendationType] = useState("day");

  const handleTypeChange = (type) => {
    setRecommendationType(type);
  };

  const getChartData = () => {
    const data = {
      labels: [
        "Бургер",
        "Паста карбонара",
        "Салат Цезарь",
        "Суши с лососем",
        "Греческий салат",
      ],
      datasets: [
        {
          data:
            recommendationType === "day"
              ? [30, 20, 15, 35, 10]
              : [15, 25, 30, 30, 15],
          backgroundColor: [
            "#007bff",
            "#28a745",
            "#ffc107",
            "#dc3545",
            "#6c757d",
          ],
        },
      ],
    };
    return data;
  };

  return (
    <div className="recommendations-page">
      <div className="header">
        <h2>
          Рекомендации на {recommendationType === "day" ? "день" : "неделю"}
        </h2>
        <p>Выберите свое блюдо и наслаждайтесь великолепным вкусом</p>
      </div>
      <div className="type-selector">
        <button
          onClick={() => handleTypeChange("day")}
          className={recommendationType === "day" ? "active" : ""}
        >
          На день
        </button>
        <button
          onClick={() => handleTypeChange("week")}
          className={recommendationType === "week" ? "active" : ""}
        >
          На неделю
        </button>
      </div>
      <div className="chart-container">
        <Doughnut data={getChartData()} />
      </div>
      <div className="best-dishes">
        Лучшие блюда по мнению наших пользователей
      </div>
      <div className="recommended-dishes">
        <div className="dish-card">
          <img src="бургер.jpg" alt="" className="rec-img" />
          <h3>Бургер</h3>
          <p>Великолепный бургер с сочной котлетой и свежими овощами</p>
        </div>
        <div className="dish-card">
          <img src="карбонара.jpg" alt="" className="rec-img" />
          <h3>Паста карбонара</h3>
          <p>Итальянская классика с беконом и сливками</p>
        </div>
        <div className="dish-card">
          <img src="цезарь.jpg" alt="" className="rec-img" />
          <h3>Салат Цезарь</h3>
          <p>Свежий салат с курицей, сыром пармезан и хрустящими гренками</p>
        </div>
        <div className="dish-card">
          <img src="суши.jpg" alt="" className="rec-img" />
          <h3>Суши с лососем</h3>
          <p>Нежные суши с лососем, авокадо и соевым соусом</p>
        </div>
        <div className="dish-card">
          <img src="греческий.jpg" alt="" className="rec-img" />
          <h3>Греческий салат</h3>
          <p>Греческий салат с курицей, помидорами, огурцами и сыром</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
