import React from "react";
import TopMenu from "../../components/top-menu/TopMenu.component";
import Footer from "../../components/footer/Footer.component";
import styles from "./styles.module.css";

const DevonicsTodayPage = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.top_nav}>
        <TopMenu />
      </div>
      <div className={styles.background}>
        <div className={styles.header}>
          <h1 className={styles.header_title}>Devonics сьогодні</h1>
          <p className={styles.header_subtitle}>
            Це виняткові продукти й особлива атмосфера їх споживання. Це високі
            стандарти ведення бізнесу, новаторський підхід і бездоганний рівень
            сервісу для всіх клієнтів.
          </p>
        </div>
        <div className={styles.header}>
          <h1 className={styles.header_title}>Історія Devonics</h1>
          <p className={styles.header_subtitle}>
            Шлях компанії від 2021 року до сьогодні.
          </p>
        </div>
        <div className={styles.images}>
          <div className={styles.image}>
            <img src="" alt="" />
          </div>
          <div className={styles.random_text}>
            <p className={styles.random_text_title}>[//system]</p>
            <p className={styles.random_text_subtitle}>
              |restart fn.index #1-2-3;key
            </p>
          </div>
          <div className={styles.image}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={styles.header}>
          <h1 className={styles.header_title}>Глобальний гравець</h1>
          <p className={styles.header_subtitle}>
            Державній нафтовій компанії України належать активи в 15 країнах
            світу, об’єднані єдиним брендом Devonics.{" "}
          </p>
        </div>
        <div className={styles.images}>
          <div className={styles.image}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={`${styles.header} ${styles.left_side}`}>
          <h1 className={styles.header_title}>
            Потужна інфраструктура в Україн
          </h1>
          <p className={styles.header_subtitle}>
            Власні модернізовані нафтобази та бензовози для надійного зберігання
            та транспортування нафтопродуктів Devonics в Україні.
          </p>
        </div>
        <div className={styles.devonics_string}>
          <p>DEVONICS</p>
          <p>DEVONICS</p>
          <p>DEVONICS</p>
          <p>DEVONICS</p>
          <p>DEVONICS</p>
          <p>DEVONICS</p>
          <p>DEVONICS</p>
          <p>DEVONICS</p>
        </div>
        <div className={`${styles.header} `}>
          <h1 className={styles.header_title}>Соціальні ініціативи</h1>
          <p className={styles.header_subtitle}>
            Понад $6 млн. Devonics вже інвестувала в розвиток
            соціально-культурних проєктів в Україні й надалі продовжує свою
            суспільну діяльність.
          </p>
        </div>
        <div className={styles.images}>
          <div className={styles.image}>
            <img src="" alt="" />
          </div>

          <div className={styles.image}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={`${styles.header} `}>
          <h1 className={styles.header_title}>Devonics level</h1>
          <p className={styles.header_subtitle}>
            Сплачуйте за прілки, не виходячи з автомобіля, з новою функцією
            Devonics PAY. Оновлений мобільний додаток Devonics підтримує всі
            платіжні картки, емітовані в Україні, та дозволяє зручно
            переказувати кошти з картки на картку.
          </p>
        </div>
        <div className={styles.images}>
          <div className={styles.image}>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DevonicsTodayPage;
