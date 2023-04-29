import PostSection from "../postsection/PostSection";
import PostHead from "../posthead/PostHead";
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
