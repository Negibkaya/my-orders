// DishDetailPage.js

import React from "react";
import "./DishDetailPage.css";

const DishDetailPage = () => {
  return (
    <div className="dish-page">
      <div className="dish-image">
        <img src="цезарь.jpg" alt="Salad" />
      </div>
      <div className="dish-description">
        <h1 className="dish-title">Салат Цезарь</h1>
        <div className="dish-details">
          <div className="dish-info">
            <span className="dish-info-label">Категория:</span> Салаты
          </div>
          <div className="dish-info">
            <span className="dish-info-label">Ингредиенты:</span>
            Листья салата, куринное филе, сухарики, твердый сыр, соус Цезарь,
            лимон, масло оливковое, соль, перец
          </div>
          <div className="dish-info">
            <span className="dish-info-label">Калорийность:</span> 350 ккал
          </div>
          <div className="dish-info">
            <span className="dish-info-label">Время приготовления:</span> 30
            минут
          </div>
          <div className="dish-info">
            <span className="dish-info-label">Порции:</span> 4
          </div>
          <div>
            <a href="/catalog" className="back-button">
              Вернуться назад
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetailPage;
