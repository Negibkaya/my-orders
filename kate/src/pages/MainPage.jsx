// MainPage.jsx
import React from "react";
import "./MainPage.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const MainPage = () => {
  const chartData = {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"],
    datasets: [
      {
        label: "Выявлено ошибок",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div className="main-container">
      <header>
        <h1 className="title">Диагностика неисправностей оборудования</h1>
      </header>
      <section>
        <div className="description">
          <h2>О проекте</h2>
          <p>
            Облегчении и оптимизации процесса диагностики и поиска причин
            неисправностей в сложном оборудовании. Традиционная диагностика
            неисправностей может быть сложной и трудоемкой задачей, особенно при
            работе с сложными системами и множеством возможных причин проблемы.
          </p>
          <p>
            Основная идея этого веб-сайта заключается в том, чтобы предоставить
            пользователям возможность систематически и последовательно
            исследовать и анализировать причины и следствия неисправностей,
            применяя метод построения дерева причино-следственных связей, а
            также предсказывать когда и из-за чего это произойдет, что позволит
            своевременно устранить неполадки и выхода системы из строя.
          </p>
        </div>

        <div className="image-carousel-container">
          <h2>Традиционная диагностика</h2>
          <div className="image-carousel">
            <img
              src="equipment_diagnostics.png"
              alt="Image 1"
              className="image"
            />
            <img
              src="equipment_diagnostics (1).png"
              alt="Image 2"
              className="image"
            />
            <img
              src="equipment_diagnostics (2).png"
              alt="Image 3"
              className="image"
            />
          </div>
        </div>

        <div className="instructions">
          <h2>Инструкция по использованию сайта</h2>
          <ul>
            <li>
              Шаг 1: Зарегистируйтесь на сайте, чтобы предоставить фунцкионал
              нашего продукта
            </li>
            <li>
              Шаг 2: Предоставьте данные или загрузите готовый Json файл, в нашу
              систему для диагностики проблемы
            </li>
            <li>
              Шаг 3: Просмотрите рекомендации и сформированное дерево ошибок на
              основе ваших данных
            </li>
            <li>
              Шаг 4: Скачайте дерево ошибок, а также вы можете просмотреть ваши
              предыдущие результаты
            </li>
          </ul>
        </div>
        <div className="chart-container">
          <h2>Количество ошибок, которые мы выявили у пользователей</h2>
          <Bar data={chartData} />
        </div>
      </section>
      <a href="/upload" className="diagnostic-button">
        Перейти к диагностике
      </a>
    </div>
  );
};

export default MainPage;
