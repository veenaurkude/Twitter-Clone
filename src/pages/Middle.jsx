import React from "react";
import PostSection from "./PostSection";
import PostHead from "./PostHead";
import styles from "./Middle.module.css";
const Middle = () => {
  return (
    <div className={styles.tweets}>
      <PostHead />
      <PostSection />
    </div>
  );
};

export default Middle;
