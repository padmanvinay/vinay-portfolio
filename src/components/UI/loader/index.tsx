import { InfinitySpin } from "react-loader-spinner";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      {
        <div className="text-red-600">
          <InfinitySpin width="200" color="#FFFFFF" />
        </div>
      }
      <div className={styles.name}>Vinay Padman</div>
    </div>
  );
};

export default Loader;
