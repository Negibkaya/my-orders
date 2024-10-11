// Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; // Импорт CSS-файла для стилей

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/recommend_dish">Рекомендации</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/feedback">Форма обратной связи</Link>
      </div>
      <div className="navbar-right">
        <Link to="/registration">
          <div className="registration-icon">
            <img src="user.svg" width={40} height={40} alt="User Icon" />
            Войти
            <img src="lock.svg" width={40} height={40} alt="User Icon" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
