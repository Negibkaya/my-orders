// ResultPage.jsx
import React from "react";
import "./ResultPage.css";

const ResultPage = () => {
  return (
    <div className="result-container">
      <header>
        <h1>Результат обнаружения сбоя</h1>
        <p>Основываясь на введенных данных, вот результат и рекомендация:</p>
      </header>

      <div className="result-content">
        <img src="graph_image.jpg" alt="Graph" className="result-graph" />

        <div className="recommendation">
          <h2>Рекомендация:</h2>
          <ul>
            <li>
              Заменить изношенные валки: Необходимо заменить изношенные валки,
              чтобы обеспечить правильное прокатывание труб и улучшить качество
              продукции.
            </li>
            <li>
              Проверить и исправить ленту прокатки: Необходимо проверить ленту
              прокатки на повреждения и разрывы. В случае обнаружения проблем,
              рекомендуется восстановить или заменить ленту.
            </li>
            <li>
              Изучить причины перегрева двигателя: Провести тщательную проверку
              системы охлаждения и других компонентов, ответственных за работу
              двигателя. Устранить причины перегрева и обеспечить надлежащую
              работу двигателя.
            </li>
            <li>
              Исправить ошибки программного обеспечения: Проанализировать
              сообщения об ошибках в программном обеспечении, и, если возможно,
              устранить причины возникновения ошибок. Обновить программное
              обеспечение, если необходимо.
            </li>
          </ul>
        </div>
      </div>

      <div className="buttons-section">
        <button className="download-button">Скачать</button>
        <a href="/history" className="view-history-button">
          Просмотреть историю
        </a>
      </div>
    </div>
  );
};

export default ResultPage;
