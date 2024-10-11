// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation";
import MainPage from "./pages/Main/MainPage";
import Login from "./pages/Auth/LoginPage";
import Register from "./pages/Auth/RegistrationPage";
import FeedbackPage from "./pages/Feedback/FeedbackPage";
import FoodCatalogPage from "./pages/Catalog/FoodCatalogPage";
import DishDetailPage from "./pages/Detail/DishDetailPage";
import RecommendationsPage from "./pages/Recommend/RecommendationsPage";
import "./App.css";
import ShoppingCart from "./pages/CartPage/ShoppingCart";

const App = () => {
  return (
    <Router>
      <div className="mainApp">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/catalog" element={<FoodCatalogPage />} />
          <Route path="/dish_info" element={<DishDetailPage />} />
          <Route path="/recommend_dish" element={<RecommendationsPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
