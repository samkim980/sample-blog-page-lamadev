import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="About blog page"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Blog about Life</h1>
          <h2 className={styles.imgDesc}>
            Blogs on the complexity and simplicity of life
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>About me</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            officiis, eos nisi fuga, nam quibusdam quidem possimus rem vel
            reiciendis placeat quia voluptatem magnam quas dignissimos. Velit
            asperiores dolorum omnis? Quidem voluptate magnam sapiente dolor
            ipsam sit assumenda sunt pariatur!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>My Story</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem
            minus omnis debitis illo voluptatum hic explicabo. Quae officiis
            blanditiis non laboriosam commodi expedita necessitatibus porro
            ducimus aliquid nostrum quos iure, pariatur illum error quas
            distinctio excepturi harum earum ab?
          </p>
          <Button url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
