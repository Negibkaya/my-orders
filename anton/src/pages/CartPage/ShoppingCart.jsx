import React, { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [city, setCity] = useState("");
  const [restaurant, setRestaurant] = useState("");

  const cities = [
    { label: "Москва", value: "moscow" },
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Екатеринбург", value: "ekb" },
  ];

  const restaurants = [
    { label: "Иль Патио", value: "il_patio" },
    { label: "Шикари", value: "shikari" },
    { label: "Тануки", value: "tanuki" },
  ];

  return (
    <div className="shopping-cart">
      <h2 className="title">Корзина</h2>

      <div className="cart">
        <select
          className="cart-select"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Выберите город откуда заказать</option>
          {cities.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>

        {city && (
          <select
            className="cart-select"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          >
            <option value="">
              Выберите ресторан из которого получить заказ
            </option>
            {restaurants.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        )}

        <div className="cart-items">
          <div className="cart-item">
            <span className="name">Салат Цезарь</span>
            <span className="quantity">x2</span>
            <span className="cost">300$</span>
          </div>

          <br />

          <div className="cart-item">
            <span className="name">Греческий салат</span>
            <span className="quantity">x1</span>
            <span className="cost">100$</span>
          </div>

          <br />

          <div className="cart-item">
            <span className="name">Бургер</span>
            <span className="quantity">x3</span>
            <span className="cost">150$</span>
          </div>
        </div>
      </div>

      <div className="total">Стоимость: $550</div>

      <a href="/feedback" className="pay-btn">
        Оплатить
      </a>
    </div>
  );
}

export default ShoppingCart;
