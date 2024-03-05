import Navbar from "../Navbar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_name}>
        <h1>Vinay Padman</h1>
      </div>
      <div className={styles.header_routes}>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
