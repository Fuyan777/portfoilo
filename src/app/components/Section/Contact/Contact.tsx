import SectionHeader from "../../SectionHeader/SectionHeader";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <main className="main" id="contact">
      <SectionHeader title={"Contact"} />

      <form className={styles.formContainer}>
        <div className={styles.formField}>
          <input
            className={styles.inputText}
            id="name"
            type="text"
            placeholder="Name"
            required
          />
        </div>

        <div className={styles.formField}>
          <input
            className={styles.inputText}
            id="email"
            type="text"
            placeholder="Email"
            required
          />
        </div>

        <div className={styles.formField}>
          <textarea
            className={styles.inputMessageText}
            id="message"
            placeholder="Message"
            required
          />
        </div>

        <div className={styles.submitButtonContainer}>
          <button className={styles.submitButton}>送信</button>
        </div>
      </form>
    </main>
  );
}
