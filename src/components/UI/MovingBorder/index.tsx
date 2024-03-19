import styles from "./moving-border.module.scss";

const MovingBorder = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.body_content}>{children}</div>;
};

export default MovingBorder;
