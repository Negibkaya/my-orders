// RegistrationPage.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import "./RegistrationPage.css";

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <h1>Регистрация</h1>
      <form className="registration-form">
        <label htmlFor="username">Имя пользователя:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Электронная почта:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirmPassword">Подтвердите пароль:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />

        <button type="submit">Зарегистрироваться</button>
      </form>

      <p>
        Есть аккаунта? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
