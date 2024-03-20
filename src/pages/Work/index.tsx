import { Experience_stub } from "@/common/locales/stub";
import styles from "./word.module.scss";
import { TextGenerateEffect } from "@/components/UI/TextGenerator";
import MovingBorder from "@/components/UI/MovingBorder";
import MovingTag from "@/components/UI/MovingTag";

const Work = () => {
  return (
    <div className={styles.work}>
      {Experience_stub.map((item, index) => (
        <MovingBorder>
          <div className={styles.work_container} key={index}>
            <div className={styles.work_container_left}>
              <div className={styles.logo}>
                {typeof item.logo === "string" ? (
                  <img src={item.logo} />
                ) : (
                  <item.logo />
                )}
              </div>
              {(item.companyName === "Carestack" ||
                item.companyName === "Zoho") && (
                <div className={styles.company_name}>{item.companyName}</div>
              )}
            </div>
            <div className={styles.work_container_right}>
              <div className={styles.role}>{item.role}</div>
              <div
                className={styles.year}
              >{`${item.joinYear} - ${item.resignYear}`}</div>
              <div className={styles.summary}>
                <TextGenerateEffect words={item.summary} />
              </div>
              <div className={styles.skills}>
                {item.skills.map((item) => (
                  <MovingTag>{item}</MovingTag>
                ))}
              </div>
            </div>
          </div>
        </MovingBorder>
      ))}
    </div>
  );
};

export default Work;
