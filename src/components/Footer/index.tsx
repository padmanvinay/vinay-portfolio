import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer_content_left}>&copy; Vinay Padman 2023</p>
      <p className={styles.footer_content_right}>vinaypadman111@gmail.com</p>
    </div>
  );
};

export default Footer;
