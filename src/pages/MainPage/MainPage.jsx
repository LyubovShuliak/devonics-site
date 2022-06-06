import React from "react";
import TopMenu from "../../components/top-menu/TopMenu.component";

import style from "./main.module.css";

const MainPage = () => {
  return (
    <div className={style.container}>
      <TopMenu />
    </div>
  );
};

export default MainPage;
