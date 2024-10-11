import React from "react";
import "./FeedbackPage.css";

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <div className="contact-info">
          <h2>Свяжитесь с нами</h2>
          <p>Москва, Россия</p>
          <p>info@mysite.com</p>
          <p>123-456-789</p>
        </div>
        <div className="feedback-form">
          <form className="forms">
            <div className="form-group">
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="custom-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес:</label>
              <input
                type="text"
                id="address"
                name="address"
                className="custom-input"
                required
              />
            </div>
            <div className="form-group">
              <div className="tel-email">
                <div className="email">
                  <label htmlFor="email">Электронная почта:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="custom-input"
                    required
                  />
                </div>
                <div className="tel">
                  <label htmlFor="phone">Телефон:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="custom-input"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Тема:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="custom-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Сообщение:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="custom-input"
                required
              />
            </div>
            <button className="btn" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12270.756416014843!2d-73.97332598515731!3d40.75166399282491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1671533981150!5m2!1sen!2sin"
          width="1380"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default FeedbackPage;
