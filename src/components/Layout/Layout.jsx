import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
const Layout = () => {
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
      <Outlet />
    </div>
  );
};
export default Layout;
