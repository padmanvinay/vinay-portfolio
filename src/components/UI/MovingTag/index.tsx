import styles from "./moving-tag.module.scss";

const MovingTag = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <div className={styles.body_content}>
      <div>{children}</div>
    </div>
  );
};

export default MovingTag;
