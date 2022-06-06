import React from "react";
import { Link } from "react-router-dom";

import style from "./menu.module.css";

const TopMenu = () => {
  return (
    <>
      <Link to="/menu" className={style.link}>
        <img
          className={style.gamburger}
          src={require("../../assets/images/gamburger.png")}
          alt=""
        />
      </Link>
      <img
        className={style.logo}
        src={require("../../assets/images/logo.png")}
        alt=""
      />
    </>
  );
};

export default TopMenu;
