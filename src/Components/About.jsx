/**
 * About component
 *
 * Explains the purpose and core features of the application.
 */

import React from "react";

const features = [
  {
    title: "Повний каталог SteamDB",
    description:
      "Окремі сторінки для ігор, DLC, пакетів, демо та саундтреків з історією змін і тегами.",
  },
  {
    title: "Глибока аналітика цін",
    description:
      "Графіки цін по регіонах, історія розпродажів, конвертація валют та індикатор найкращої ціни.",
  },
  {
    title: "Статистика онлайну",
    description:
      "Живі графіки гравців, піки за добу/тиждень, порівняння проєктів та тренди.",
  },
  {
    title: "Інструменти реліз-менеджменту",
    description:
      "Відстеження депо, білдів, маніфестів і змін файлів з push-сповіщеннями.",
  },
  {
    title: "Смарт-пошук",
    description:
      "Пошук за AppID, PackageID або назвою з фільтрами жанру, ціни та рейтингу.",
  },
  {
    title: "Віджети та Live Activities",
    description:
      "Ціни й онлайн прямо на екрані блокування, інтеграція зі Spotlight та Siri.",
  },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <p className="eyebrow">Про додаток</p>
        <h2>SteamDB у форматі, створеному для iOS</h2>
        <p className="section-lead">
          Додаток переносить функціональність steamdb.info у знайомі патерни
          iOS: вкладки, карти, швидкі дії та розумні сповіщення. Жодних
          компромісів — лише зручність, швидкість і красива типографіка.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
