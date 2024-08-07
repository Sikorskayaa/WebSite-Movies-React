import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from "./Navigation.module.css";
import Loader from "../Loader/Loader";

const Navigation = () => {
  return (
    <div>
      <header>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ""}`
          }
          to="/"
        >
          Home
        </NavLink>
        |
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ""}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Navigation;
