import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        {<h1 className={styles.title_name}>Vinay Padman</h1>}
      </div>
    </div>
  );
};

export default Home;
