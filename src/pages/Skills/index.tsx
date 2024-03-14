import { SkillItems } from "@/common/contants/skillItem";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills_inner}>
        <div className={styles.photo}>xxx</div>
        <div className={styles.skills_inner_container}>
          {SkillItems.map((item) => (
            <div className={styles.skills_content}>
              <div className={styles.logo}>
                <item.logo />
              </div>
              <div className={styles.skill_name}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
