import Image from "next/image";
import styles from "./page.module.css";
import pc from "public/pc1.jpg";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Best Blog Page</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, eveniet
          magnam. Tenetur qui delectus ut quaerat et cumque dolorum adipisci?
        </p>
        <Button url={"/"} text={"See Blogs"} />
      </div>
      <div className={styles.item}>
        <Image src={pc} alt="library" className={styles.img} />
      </div>
    </div>
  );
}
