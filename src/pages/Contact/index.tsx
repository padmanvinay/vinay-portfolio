import styles from "./contact.module.scss";
import LinkedinIcon from "../../assets/linkedin.svg?react";
import GithubIcon from "../../assets/github.svg?react";
import GmailIcon from "../../assets/gmail.svg?react";
import PhoneIcon from "../../assets/phone.svg?react";

const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <div>CONTACTS</div>
        <div className={styles.contact_buttons}>
          <div className={styles.contact_container}>
            <div className={styles.icon}>
              <LinkedinIcon />
            </div>
            <button>LINKEDIN</button>
          </div>
          <div className={styles.contact_container}>
            <div className={styles.icon}>
              <GithubIcon />
            </div>
            <button>GITHUB</button>
          </div>
          <div className={styles.contact_container}>
            <div className={styles.icon}>
              <GmailIcon />
            </div>
            <button>E-MAIL</button>
          </div>
          <div className={styles.contact_container}>
            <div className={styles.icon}>
              <PhoneIcon />
            </div>
            <button>PHONE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
