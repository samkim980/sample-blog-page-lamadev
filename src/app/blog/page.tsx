import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface data {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
  _id: string;
}

const Blog = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className={styles.mainContainer}>
      {data.map((item: data) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imgContainer}>
            <Image fill={true} src={item.image} alt="" className={styles.img} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>Test Description</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
