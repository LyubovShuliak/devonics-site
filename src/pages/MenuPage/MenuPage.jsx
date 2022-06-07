import React from "react";

import { Link } from "react-router-dom";

import styles from "./menu.module.css";

const MenuPage = () => {
  return (
    <div className={styles.menu_container}>
      <Link to="/" className={styles.close_menu_link}>
        <div className={styles.close_menu}>
          <span></span>
          <span></span>
        </div>
      </Link>
      <nav className={styles.vertical}>
        <ul>
          <li>
            <a href="/"> Про Devonics</a>

            <ul className={styles.submenu}>
              <li>
                <a href="/today">Devonics сьогодні</a>
              </li>
              <li>
                <a href="/today">Історія</a>
              </li>
              <li>
                <a href="/today">Новини</a>
              </li>
              <li>
                <a href="/today">Відео</a>
              </li>
              <li>
                <a href="/today">Благодійність</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/"> Сервіси</a>
          </li>
          <li>
            <a href="/"> Бізнес - Партнери </a>
          </li>
          <li>
            <a href="/"> Акції </a>
          </li>
          <li>
            <a href="/"> Кар’єра </a>
          </li>
          <li>
            <a href="/"> Level </a>
          </li>
          <li>
            <a href="/"> Контакти </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuPage;
