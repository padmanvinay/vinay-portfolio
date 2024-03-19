import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from "./pageContent.module.scss";
import { classNames } from "@/lib/utils";

const PageContent = () => {
  return (
    <>
      <Header />
      <div className={classNames(styles.pages)}>
        <Outlet />
      </div>
    </>
  );
};

export default PageContent;
