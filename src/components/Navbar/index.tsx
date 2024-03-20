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
              ? `inline-flex h-10 animate-shimmer items-center justify-center rounded-md border rounded-2xl border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${styles["active"]}`
              : "inline-flex h-10 animate-shimmer items-center justify-center rounded-md border rounded-2xl border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          }
        >
          {item.displayName}
        </NavLink>
      ))}
    </>
  );
};

export default Navbar;
