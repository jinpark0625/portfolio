import React, { useState, useRef } from "react";
import styles from "./contact.module.css";

const Contact = ({ Cursor, NavBtn, contactRepository }) => {
  const nameRef = useRef();
  const mailRef = useRef();
  const textRef = useRef();

  const [textSent, setTextSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const info = {
      id: Date.now(),
      mail: mailRef.current.value || "",
      text: textRef.current.value || "",
    };
    contactRepository.saveContact(name, info);
    setTextSent(true);
  };

  return (
    <section className={styles.wrap}>
      {/* <Cursor></Cursor> */}
      <NavBtn></NavBtn>

      <div className={styles.element_wrap}>
        <div className={styles.contact_wrap}>
          <h3 className={styles.title}>Contact</h3>
          <p className={styles.sub_title}>서로의 점을 이어봐요.</p>
          <div className={styles.contact}>
            <a
              className={styles.mailAndCall}
              href="mailto:jinpark0625@gmail.com"
            >
              jinpark0625@gmail.com
            </a>
            <a className={styles.mailAndCall} href="tel:010-2390-0625">
              010-2390-0625
            </a>
          </div>
        </div>

        <div className={styles.text_wrap}>
          {!textSent ? (
            <>
              <form className={styles.form}>
                <input
                  ref={nameRef}
                  className={`${styles.text} ${styles.name}`}
                  type="text"
                  placeholder="Name"
                />
                <input
                  ref={mailRef}
                  className={`${styles.text} ${styles.mail}`}
                  type="text"
                  placeholder="Email"
                />
                <input
                  ref={textRef}
                  className={`${styles.text} ${styles.message}`}
                  type="text"
                  placeholder="Message"
                />
              </form>
              <button onClick={submit} className={styles.btn}>
                Send
              </button>
            </>
          ) : (
            <div className={styles.thanks}>감사합니다.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
