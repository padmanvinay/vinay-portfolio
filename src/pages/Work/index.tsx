import { Experience_stub } from "@/common/locales/stub";
import styles from "./word.module.scss";

const Work = () => {
  return (
    <div className={styles.work}>
      {Experience_stub.map((item, index) => (
        <div className={styles.work_container} key={index}>
          <div className={styles.work_container_left}>
            <div>
              {typeof item.logo === "string" ? (
                <img src={item.logo} />
              ) : (
                <item.logo />
              )}
            </div>
            {item.companyName === "Carestack" && (
              <div className={styles.company_name}>{item.companyName}</div>
            )}
            {/* <div className={styles.location}>{item.location}</div> */}
            {/* <div
              className={styles.year}
            >{`${item.joinYear} - ${item.resignYear}`}</div> */}
          </div>
          <div className={styles.work_container_right}>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.summary}>{item.summary}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
