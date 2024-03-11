import styles from "./contact.module.scss";
import LinkedinIcon from "../../assets/linkedin.svg?react";
import GithubIcon from "../../assets/github.svg?react";
import GmailIcon from "../../assets/gmail.svg?react";
import PhoneIcon from "../../assets/phone.svg?react";
import Toast from "@/components/Toast";

const Contact = () => {
  const toaster = Toast();

  const buttonHandler = (location: string) => {
    switch (location) {
      case "linkedin":
        window.open("https://in.linkedin.com/in/vinaypadman");
        break;
      case "github":
        window.open("https://github.com/padmanvinay");
        break;
      case "gmail":
        navigator.clipboard.writeText("vinaypadman111@gmail.com").then(() => {
          toaster({
            message: "E-mail copied to clipboard",
            autoClose: 2000,
          });
        });
        break;
      case "phone":
        navigator.clipboard.writeText("+91-9745781390").then(() => {
          toaster({
            message: "Phone number copied to clipboard",
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
            <button onClick={() => buttonHandler("phone")}>PHONE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
