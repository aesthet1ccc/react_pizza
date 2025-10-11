import React from "react";

import styles from "./NotFoundBlock.module.scss";
function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <br />
      <h1>Ничего не найдено</h1>

      <p className={styles.description}>
        Вероятней всего, вы не заказывали ещё пиццу.
      </p>
      <p className={styles.description}>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src="../img/empty_cart" />
    </div>
  );
}

export default NotFoundBlock;
