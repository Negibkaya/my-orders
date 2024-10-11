import React from "react";
import "./Auth.css";

const Register = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Регистрация</h2>
        <form>
          <label>
            Почта:
            <input type="email" />
          </label>
          <label>
            Пароль:
            <input type="password" />
          </label>
          <label>
            Подтвердите пароль:
            <input type="password" />
          </label>
          <button type="submit">Регистрация</button>
        </form>
        <p>
          Уже есть аккаунт? <a href="/login">Войдите</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
