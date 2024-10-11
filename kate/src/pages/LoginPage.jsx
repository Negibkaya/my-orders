// LoginPage.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Вход</h1>
      <form className="login-form">
        <label htmlFor="username">Имя пользователя:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Войти</button>
      </form>

      <p>
        Нет аккаунта? <Link to="/registration">Зарегистрируйтесь</Link>
      </p>
    </div>
  );
};

export default LoginPage;
