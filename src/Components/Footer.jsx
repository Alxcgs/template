/**
 * Footer component
 *
 * Displays call-to-action and key links.
 */
import React from "react";
import PropTypes from "prop-types";

const Footer = ({ name, email, appStore, steamdb, support }) => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-card">
        <div>
          <p className="eyebrow">Запуск</p>
          <h2>Будьте першими у тесті</h2>
          <p className="section-lead">
            Запишіться у TestFlight та отримайте ранній доступ до SteamDB Mobile.
            Ми повідомимо, щойно додаток буде готовий.
          </p>
        </div>
        <div className="footer-actions">
          <button className="primary">Приєднатися до TestFlight</button>
          <button className="ghost">Попросити демо</button>
        </div>
      </div>
      <div className="footer-links">
        <a href={steamdb} target="_blank" rel="noopener noreferrer">
          SteamDB
        </a>
        <a href={support} target="_blank" rel="noopener noreferrer">
          API та довідка
        </a>
        <a href={appStore} target="_blank" rel="noopener noreferrer">
          App Store
        </a>
        <a href={`mailto:${email}`}>Контакт</a>
      </div>
      <p className="footer-note">{name} · Неофіційний клієнт SteamDB.</p>
    </footer>
  );
};

Footer.defaultProps = {
  name: "",
  email: "",
  appStore: "",
  steamdb: "",
  support: "",
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  appStore: PropTypes.string,
  steamdb: PropTypes.string,
  support: PropTypes.string,
};

export default Footer;
