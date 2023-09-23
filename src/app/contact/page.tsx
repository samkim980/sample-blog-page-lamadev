import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Lets keep in touch",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            alt="contact us"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input placeholder="Name..." className={styles.input} />
          <input placeholder="Email..." className={styles.input} />
          <textarea
            className={styles.textArea}
            cols={30}
            rows={10}
            placeholder="Message..."
          />
          <Button url={"#"} text={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
