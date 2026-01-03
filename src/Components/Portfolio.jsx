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
      "SwiftUI-панель з останніми змінами, розпродажами, трендами онлайну та новими релізами в одному фіді.",
  },
  {
    title: "Картка гри",
    description:
      "Нативна картка з історією оновлень, новинами, графіками ціни, метриками гравців та пакетами.",
  },
  {
    title: "Аналітика цін",
    description:
      "Swift-модуль з порівнянням регіонів, історією розпродажів, підпискою на ціну та прогнозом знижки.",
  },
  {
    title: "База депо",
    description:
      "Інструменти для змін файлів і маніфестів, структури депо, дифів та швидкого експорту.",
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
          Кожна функція SteamDB упакована в окремий зрозумілий екран. Нативний
          Swift/SwiftUI інтерфейс адаптується до темної та світлої теми,
          підтримує Dynamic Type та оптимізований для iPhone і iPad.
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
