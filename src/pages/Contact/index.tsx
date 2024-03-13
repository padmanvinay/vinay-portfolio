import styles from "./contact.module.scss";
import LinkedinIcon from "../../assets/linkedin.svg?react";
import GithubIcon from "../../assets/github.svg?react";
import GmailIcon from "../../assets/gmail.svg?react";
import PhoneIcon from "../../assets/phone.svg?react";
import Toast from "@/components/Toast";
import { useAppSelector } from "@/redux/hooks";
import {
  EMAIL_ID,
  EMAIL_RES,
  GITHUB,
  LINKEDIN,
  PHONE_NUMBER,
  PHONE_RES,
  SOCIAL,
} from "@/common/locales/contact.locale";

const Contact = () => {
  const toaster = Toast();
  const darkMode = useAppSelector((state) => state.darkmode.darkMode);

  const buttonHandler = (location: string) => {
    switch (location) {
      case SOCIAL.LINKEDIN:
        window.open(LINKEDIN);
        break;
      case SOCIAL.GITHUB:
        window.open(GITHUB);
        break;
      case SOCIAL.EMAIL:
        navigator.clipboard.writeText(EMAIL_ID).then(() => {
          toaster({
            message: EMAIL_RES,
            autoClose: 2000,
          });
        });
        break;
      case SOCIAL.PHONE:
        navigator.clipboard.writeText(PHONE_NUMBER).then(() => {
          toaster({
            message: PHONE_RES,
            autoClose: 2000,
          });
        });
        break;
    }
  };

  return (
    <>
      <div className={styles.contact}>
        <div>CONTACTS</div>
        <div className={styles.contact_buttons}>
          <div className={darkMode ? "" : styles.contact_container}>
            <div className={styles.icon}>
              <LinkedinIcon />
            </div>
            <button onClick={() => buttonHandler(SOCIAL.LINKEDIN)}>
              LINKEDIN
            </button>
          </div>
          <div className={darkMode ? "" : styles.contact_container}>
            <div className={styles.icon}>
              <GithubIcon />
            </div>
            <button onClick={() => buttonHandler(SOCIAL.GITHUB)}>GITHUB</button>
          </div>
          <div className={darkMode ? "" : styles.contact_container}>
            <div className={styles.icon}>
              <GmailIcon />
            </div>
            <button onClick={() => buttonHandler(SOCIAL.EMAIL)}>E-MAIL</button>
          </div>
          <div className={darkMode ? "" : styles.contact_container}>
            <div className={styles.icon}>
              <PhoneIcon />
            </div>
            <button onClick={() => buttonHandler(SOCIAL.PHONE)}>PHONE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
