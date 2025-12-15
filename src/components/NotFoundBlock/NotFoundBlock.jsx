import React from "react";

import styles from "./NotFoundBlock.module.scss";
function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
    </div>
  );
}

export default NotFoundBlock;
