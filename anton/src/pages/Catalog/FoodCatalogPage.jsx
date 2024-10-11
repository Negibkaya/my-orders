// FoodCatalogPage.js

import React, { useState } from "react";
import "./FoodCatalogPage.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FoodCatalogPage = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);

  const dishes = [
    {
      id: 1,
      name: "Бургер",
      price: 250,
      description: "Сочный бургер с говяжей котлетой, овощами и сыром.",
      image: "бургер.jpg",
      link: "/dish_info",
    },
    {
      id: 2,
      name: "Паста карбонара",
      price: 300,
      description:
        "Итальянская паста с беконом, яйцом, сыром пармезан и сливками.",
      image: "карбонара.jpg",
      link: "/dish_info",
    },
    {
      id: 3,
      name: "Салат Цезарь",
      price: 180,
      description:
        "Классический салат с куриной грудкой, сыром, яйцом и соусом Цезарь.",
      image: "цезарь.jpg",
      link: "/dish_info",
    },
    {
      id: 4,
      name: "Суши с лососем",
      price: 350,
      description: "Сет из свежих суши с лососем и овощами.",
      image: "суши.jpg",
      link: "/dish_info",
    },
    {
      id: 5,
      name: "Стейк",
      price: 500,
      description: "Сочный стейк из говядины с приправами.",
      image: "стейк.jpg",
      link: "/dish_info",
    },
    {
      id: 6,
      name: "Пицца Маргарита",
      price: 200,
      description: "Классическая итальянская пицца с томатами и сыром.",
      image: "пицца.jpg",
      link: "/dish_info",
    },
    {
      id: 7,
      name: "Суп грибной",
      price: 150,
      description: "Ароматный грибной суп с луком и сливками.",
      image: "суп.jpg",
      link: "/dish_info",
    },
    {
      id: 8,
      name: "Омлет с овощами",
      price: 120,
      description: "Сочный омлет с морковью, перцем и луком.",
      image: "омлет.jpeg",
      link: "/dish_info",
    },
  ];

  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      dish.price >= priceFilter
  );

  return (
    <div className="food-catalog-page">
      <div className="filters">
        <h1>Блюда</h1>
        <p>
          {" "}
          Не знаете что выбрать, посмотрите наши{" "}
          <a href="/recommend_dish">рекомендации</a>
        </p>
        <div>
          <input
            type="text"
            placeholder="По названию"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
        <div>
          <Slider
            min={0}
            max={500}
            value={priceFilter}
            onChange={(value) => setPriceFilter(value)}
          />

          <label>Цена от: {priceFilter}</label>
        </div>

        <a href="/cart" className="go-to-cart">
          Перейти в коризину
        </a>
      </div>

      <div className="dishes">
        {filteredDishes.map((dish) => (
          <div className="dish-card">
            <img src={dish.image} alt={dish.name} className="catalog-img" />
            <h3 className="dish-name">{dish.name}</h3>
            <p>Цена: {dish.price}</p>
            <p>{dish.description}</p>
            <div className="func">
              <a href={dish.link}>Подробнее</a>
              <button className="add-to-cart">Добавить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCatalogPage;
