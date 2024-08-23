import React, { useState } from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import globeIcon from "../../assets/globe.svg";
import downArrow from "../../assets/down-arrow.svg";
import upArrow from "../../assets/up-arrow.svg";
import mobile from "../../assets/trade2.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>("EN");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.headerNav}>
          <img
            src={globeIcon}
            alt="Globe"
            className={styles.headerGlobeIcon}
          />
          <div className={styles.headerDropdown}>
            <button
              className={styles.headerDropdownButton}
              onClick={toggleDropdown}
            >
              {selectedLang}
              <img
                src={isOpen ? upArrow : downArrow}
                alt="Arrow"
                className={styles.headerDropdownArrow}
              />
            </button>
            <div
              className={`${styles.headerDropdownContent} ${
                isOpen ? styles.show : ""
              }`}
            >
              <a onClick={() => handleLangChange("EN")} href="#">
                EN
              </a>
              <a onClick={() => handleLangChange("FA")} href="#">
                FA
              </a>
            </div>
          </div>
          <a href="https://www.new-marketanalysis.com/pwa/login">
            <button className={styles.headerButtonLogin}>Login</button>
          </a>
          <a href="https://www.new-marketanalysis.com/pwa/signup">
            <button className={styles.headerButton}>Sign up</button>
          </a>
        </div>
      </div>
      <div className={styles.paternCont}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>
              <span style={{ fontWeight: "500" }}>THE </span>
              <span style={{ fontWeight: "700" }}>FUTURE </span>
              <span style={{ fontWeight: "500" }}>OF </span>
              <span style={{ fontWeight: "700" }}>MINERAL MARKET </span>
              <span style={{ fontWeight: "500" }}>IS HERE WITH </span>
            </h1>
            <h2>
              <span className={styles.bounce}>N</span>
              <span className={styles.bounce}>E</span>
              <span className={styles.bounce}>W</span>
              <span className={styles.bounce}>i</span>
              <span className={styles.bounce}>s</span>
              <span className={styles.bounce}>N</span>
              <span className={styles.bounce}>E</span>
              <span className={styles.bounce}>W</span>
            </h2>

            <p>
              NEW, an innovative and user-friendly AI model that uses
              cutting-edge machine learning techniques to predict Iron ore
              prices and analyze the market. NEW is revolutionizing AI
              technology in business at all levels. Your AI partner!
            </p>
            <p className={styles.tryButton}>Try it now!</p>
          </div>
          <div className={styles.mobileMockup}>
            <img
              src={mobile}
              loading="lazy"
              decoding="async"
              alt="Mobile Mockup"
            />
            <div className={styles.triangleCont}>
              <div className={styles.triangleRight}></div>
              <div className={styles.triangleLeft}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
