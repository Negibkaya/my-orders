// HistoryPage.jsx
import React from "react";
import "./HistoryPage.css";

const sampleHistoryData = [
  { date: "2023-01-15 15:30", description: "Обнаружен электрический сбой" },
  { date: "2023-01-16 10:45", description: "Выявлена проблема перегрева" },
  { date: "2023-01-17 18:20", description: "Обнаружено аномальное напряжение" },
  // Add more entries as needed
];

const HistoryPage = () => {
  return (
    <div className="history-container">
      <header>
        <h1>Ваша история диагностики</h1>
        <p>Просмотрите список ваших предыдущих запросов и результатов:</p>
      </header>

      <div className="history-list">
        <table>
          <thead>
            <tr>
              <th>Дата обработки</th>
              <th>Описание проблемы</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {sampleHistoryData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.description}</td>
                <td>
                  <button className="download-button-history">Скачать</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
