/**
 * Portfolio component
 *
 * Highlights the main screens and workflows of the app.
 */

import React from "react";

const screens = [
  {
    title: "Головна панель",
    description:
      "Останні зміни, найгарячіші розпродажі, тренди онлайну та нові релізи в одному фіді.",
  },
  {
    title: "Картка гри",
    description:
      "Повна історія оновлень, новини, графік ціни, метрики гравців та залежні пакети.",
  },
  {
    title: "Аналітика цін",
    description:
      "Порівняння регіонів, історія розпродажів, підписка на ціну та прогноз знижки.",
  },
  {
    title: "База депо",
    description:
      "Зміни файлів і маніфестів, структура депо, діфини та швидкий експорт.",
  },
  {
    title: "Списки спостереження",
    description:
      "Колекції ігор та пакетів, власні теги, автоматичні правила й сповіщення.",
  },
  {
    title: "Розширені фільтри",
    description:
      "Фільтри за жанром, рейтингом, ціною, датою релізу та кількістю гравців.",
  },
];

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="section-header">
        <p className="eyebrow">Екрани</p>
        <h2>Усі ключові функції SteamDB</h2>
        <p className="section-lead">
          Кожна функція SteamDB упакована в окремий зрозумілий екран. Дизайн
          адаптується до темної та світлої теми, підтримує Dynamic Type та
          оптимізований для iPhone і iPad.
        </p>
      </div>
      <div className="screen-list">
        {screens.map((screen) => (
          <div className="screen-card" key={screen.title}>
            <div className="screen-icon">✦</div>
            <div>
              <h3>{screen.title}</h3>
              <p>{screen.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
