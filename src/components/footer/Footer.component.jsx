import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <ul>
        <li>
          <a href="/">Devonics сьогодні</a>
        </li>
        <li>
          <a href="/">Історія</a>
        </li>
        <li>
          <a href="/">Сервіси</a>
        </li>
        <li>
          <a href="/">Новини</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">Відео</a>
        </li>
        <li>
          <a href="/">Благодійність</a>
        </li>
        <li>
          <a href="/">Level</a>
        </li>
        <li>
          <a href="/">Акціїї</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">Бізнес - партнери</a>
        </li>
        <li>
          <a href="/">Кар’єра</a>
        </li>
        <li>
          <a href="/">Контакти</a>
        </li>
      </ul>
      <div className={style.media}>
        <a href="/">
          <img
            src={require("../../assets/images/social media/Linkedin.png")}
            alt=""
          />
        </a>
        <a href="/">
          <img
            src={require("../../assets/images/social media/Facebook.png")}
            alt=""
          />
        </a>
        <a href="/">
          <img
            src={require("../../assets/images/social media/Instagram.png")}
            alt=""
          />
        </a>
        <a href="/">
          <img
            src={require("../../assets/images/social media/Twitter.png")}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
