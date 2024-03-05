import styles from "./contact.module.scss";
import LinkedinIcon from "../../assets/linkedin.svg?react";
import GithubIcon from "../../assets/github.svg?react";
import GmailIcon from "../../assets/gmail.svg?react";
import PhoneIcon from "../../assets/phone.svg?react";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  const buttonHandler = (location: string) => {
    switch (location) {
      case "linkedin":
        window.open("https://in.linkedin.com/in/vinaypadman");
        break;
      case "github":
        window.open("https://github.com/padmanvinay");
        break;
      case "gmail":
        navigator.clipboard.writeText("vinaypadman111@gmail.com");
        break;
      case "phone":
        navigator.clipboard.writeText("+91-9745781390");
        break;
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.contact}>
        <div>CONTACTS</div>
        <div className={styles.contact_buttons}>
          <div className={styles.contact_container}>
            <div className={styles.icon}>
              <LinkedinIcon />
            </div>
            <button onClick={() => buttonHandler("linkedin")}>LINKEDIN</button>
          </div>
          <div className={styles.contact_container}>
            <div className={styles.icon}>
              <GithubIcon />
            </div>
            <button onClick={() => buttonHandler("github")}>GITHUB</button>
          </div>
          <div className={styles.contact_container}>
            <div className={styles.icon}>
              <GmailIcon />
            </div>
            <button onClick={() => buttonHandler("gmail")}>E-MAIL</button>
          </div>
          <div className={styles.contact_container}>
            <div className={styles.icon}>
              <PhoneIcon />
            </div>
            <button onClick={() => buttonHandler("github")}>PHONE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
