// DataEntryPage.jsx
import React from "react";
import "./DataEntryPage.css";

const DataEntryPage = () => {
  return (
    <div className="data-entry-container">
      <header>
        <h1>Ввод данных для обнаружения сбоев</h1>
        <p>
          Введите информацию о типах сбоев, причинах, диагностических функциях и
          матрицах.
        </p>
      </header>

      <div className="description-parameters">
        <h1>Описание секции параметров</h1>
        <p>
          Заполните информацию о типах сбоев, их причинах, диагностических
          признаках и матрицах. Эти данные будут использованы для дальнейшего
          анализа и построения системы обнаружения сбоев.
        </p>
      </div>

      <div className="tables-section">
        <div className="data-table">
          <div className="table-description">
            <p>
              Выберите типы сбоев из списка ниже. Это поможет классифицировать
              различные виды технических проблем.
            </p>
          </div>
          <table className="table-data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Тип сбоя</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <select>
                    <option>Электрический сбой</option>
                    <option>Механический сбой</option>
                    <option>Проблемы с питанием</option>
                    <option>Проблемы с охлаждением</option>
                    <option>Вибрация</option>
                    <option>Неправильное напряжение</option>
                    {/* Добавьте больше вариантов, если нужно */}
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="add-row">
                  +
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="data-table">
          <table className="table-data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Причина сбоя</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <select>
                    <option>Перегрев</option>
                    <option>Вибрация</option>
                    <option>Неправильное напряжение</option>
                    <option>Нестабильный ток</option>
                    <option>Повышенное энергопотребление</option>
                    <option>Неправильная конфигурация</option>
                    {/* Добавьте больше вариантов, если нужно */}
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="add-row">
                  +
                </td>
              </tr>
            </tbody>
          </table>
          <div className="table-description">
            <p>
              Выберите причины, которые могут вызвать соответствующие типы
              сбоев. Это поможет установить корреляции между типами сбоев и их
              возможными причинами.
            </p>
          </div>
        </div>

        <div className="data-table">
          <div className="table-description">
            <p>
              Выберите диагностические признаки, которые могут помочь в
              идентификации различных типов сбоев. Это позволит определить
              ключевые параметры для системы диагностики.
            </p>
          </div>
          <table className="table-data">
            <thead>
              <tr>
                <th>ID</th>
                <th>Диагностический признак</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <select>
                    <option>Аномальное напряжение</option>
                    <option>Неравномерный ток</option>
                    <option>Отклонение от нормы</option>
                    <option>Неисправность датчика</option>
                    <option>Неправильная настройка</option>
                    <option>Нестабильная работа</option>
                    {/* Добавьте больше вариантов, если нужно */}
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="add-row">
                  +
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="description-matrices">
        <h1>Описание секции матриц</h1>
        <p>
          Здесь вы можете описать матрицы, используемые для визуализации
          взаимосвязей между различными типами сбоев, их причинами и
          диагностическими признаками.
        </p>
      </div>

      <div className="matrices-section">
        <div className="matrix">
          <h2>Матрица 1</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th></th>
                <th>F1</th>
                <th>F2</th>
                <th>F3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>RC1</th>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
              </tr>
              <tr>
                <th>RC2</th>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
              </tr>
              <tr>
                <th>RC3</th>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="matrix">
          <h2>Матрица 2</h2>
          <table className="styled-table">
            <thead>
              <tr>
                <th></th>
                <th>F1</th>
                <th>F2</th>
                <th>F3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>S1</th>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
              </tr>
              <tr>
                <th>S2</th>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
              </tr>
              <tr>
                <th>S3</th>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
                <td>
                  <input className="cell-input" type="text"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="json-upload-form">
        <label htmlFor="jsonFile">Загрузить JSON файл:</label>
        <input type="file" id="jsonFile" accept=".json" />
      </div>

      <a href="/result" className="build-button">
        Построить дерево
      </a>
    </div>
  );
};

export default DataEntryPage;
