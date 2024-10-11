// LoginPage.js

import React from "react";
import "./Auth.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Вход</h2>
        <form>
          <label>
            Почта:
            <input type="email" />
          </label>
          <label>
            Пароль:
            <input type="password" />
          </label>
          <button type="submit">Войдите</button>
        </form>
        <p>
          Нету аккаунта? <a href="/registration">Зарегистрируйтесь</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
