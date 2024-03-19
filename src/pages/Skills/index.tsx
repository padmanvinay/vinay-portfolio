import { SkillItems } from "@/common/contants/skillItem";
import styles from "./skills.module.scss";
// import Vin_photo from "../../assets/vin.png";
import MovingBorder from "@/components/UI/MovingBorder";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <MovingBorder>
        <div className={styles.skills_inner}>
          <div className={styles.photo}>{/* <img src={Vin_photo} /> */}</div>
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
      </MovingBorder>
    </div>
  );
};

export default Skills;
