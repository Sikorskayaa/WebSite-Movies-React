import React from "react";
import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        This page is not found. Please go to the home page.
      </h1>
      <Link to="/" className={css.goBtn}>
        GO HOME
      </Link>
    </div>
  );
};

export default NotFoundPage;
