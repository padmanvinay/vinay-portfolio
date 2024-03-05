import { Outlet } from "react-router-dom";
import Header from "../Header";
import styles from "./pageContent.module.scss";

const PageContent = () => {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <Outlet />
      </div>
    </>
  );
};

export default PageContent;
