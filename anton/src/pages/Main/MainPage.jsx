// MainPage.js

import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">
          Добро пожаловать в наш сервис по подбору еды!
        </h1>
        <p className="home-subtitle">
          Наши рекомендации помогут вам с выбором блюд для любого случая
        </p>
      </div>
      <div className="food-list">
        <div className="food-card">
          <img src="суши.jpg" alt="Food" className="food-image" />
          <div className="food-info">
            <h2 className="food-name">Завтраки</h2>
            <p className="food-description">
              Подборка вкусных и питательных завтраков
            </p>
            <Link to="/catalog" className="menu-link">
              Выбрать
            </Link>
          </div>
        </div>
        <div className="food-card">
          <img src="бургер.jpg" alt="Food" className="food-image" />
          <div className="food-info">
            <h2 className="food-name">Обеды</h2>
            <p className="food-description">
              Разнообразные обеденные варианты для рабочих перерывов
            </p>
            <Link to="/catalog" className="menu-link">
              Выбрать
            </Link>
          </div>
        </div>
        <div className="food-card">
          <img src="цезарь.jpg" alt="Food" className="food-image" />
          <div className="food-info">
            <h2 className="food-name">Ужины</h2>
            <p className="food-description">
              Идеальные варианты для ужинов с семьей или друзьями
            </p>
            <Link to="/catalog" className="menu-link">
              Выбрать
            </Link>
          </div>
        </div>
      </div>
      <div className="features-section">
        <h2 className="features-title">Преимущества нашего сервиса</h2>
        <div className="feature-card">
          <h3 className="feature-name">Быстрая доставка</h3>
          <p className="feature-description">
            Вы получите свой заказ в кратчайшие сроки прямо у себя дома.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-name">Высокое качество</h3>
          <p className="feature-description">
            Мы гарантируем только самые качественные и свежие продукты.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="feature-name">Большой выбор</h3>
          <p className="feature-description">
            В нашем ассортименте представлены разнообразные блюда на любой вкус.
          </p>
        </div>
      </div>
      <div className="additional-info">
        <h2 className="info-title">Дополнительная информация</h2>
        <p className="info-content">
          Наш сервис по подбору еды поможет вам выбрать оптимальные и вкусные
          блюда для различных ситуаций: завтраков, обедов и ужинов. Мы
          сотрудничаем с лучшими ресторанами и кафе, чтобы предложить вам
          широкий выбор блюд правильно подобранных по вашим вкусовым
          предпочтениям и предпочтениям вашей компании. Вы сможете выбрать блюда
          онлайн и оформить доставку прямо у себя дома.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
