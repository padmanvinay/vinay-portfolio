import { NAV_LINK_ITEMS } from "@/common/contants/navLinkItems";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <>
      {NAV_LINK_ITEMS.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          className={({ isActive }) =>
            isActive
              ? `${styles["navbar"]} ${styles["active"]}`
              : styles["navbar"]
          }
        >
          {item.displayName}
        </NavLink>
      ))}
    </>
  );
};

export default Navbar;
