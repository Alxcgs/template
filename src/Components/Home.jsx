/**
 * Home component
 *
 * The section at the top of the page to display application name and headline.
 */

import React from "react";
import PropTypes from "prop-types";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="badge">iOS 17 · SwiftUI · Swift</span>
        <h1>{name}</h1>
        <p className="hero-title">{title}</p>
        <p className="hero-subtitle">
          Нативний iPhone-додаток на Swift, який переносить SteamDB у зручний
          мобільний формат: ціни, історія змін, пікові гравці, пакети, депо та
          оновлення з блискавичним пошуком, фільтрами та push-сповіщеннями.
        </p>
        <div className="hero-actions">
          <button className="primary">Отримати доступ</button>
          <button className="ghost">Дивитися демо</button>
        </div>
        <div className="hero-meta">
          <div>
            <h3>100%</h3>
            <p>Функцій SteamDB у мобільному форматі</p>
          </div>
          <div>
            <h3>0,3 с</h3>
            <p>Середній час відкриття картки гри</p>
          </div>
          <div>
            <h3>Live</h3>
            <p>Статистика онлайну в реальному часі</p>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="phone">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="screen-header">
              <span>SteamDB Mobile</span>
              <span className="status-dot" />
            </div>
            <div className="screen-card">
              <p className="screen-label">Актуальна знижка</p>
              <h2>-67%</h2>
              <p className="screen-sub">Elden Ring · ₴699</p>
            </div>
            <div className="screen-grid">
              <div className="screen-tile">
                <p>Пікові гравці</p>
                <h4>1,245,330</h4>
              </div>
              <div className="screen-tile">
                <p>Оновлення</p>
                <h4>2 хв тому</h4>
              </div>
              <div className="screen-tile">
                <p>Пакети</p>
                <h4>4,912</h4>
              </div>
              <div className="screen-tile">
                <p>Депо</p>
                <h4>1,302</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
