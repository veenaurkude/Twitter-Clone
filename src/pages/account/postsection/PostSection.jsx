import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tweetData } from "../../RecoilAtom/Atom";
import { userData } from "../../RecoilAtom/Atom";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./PostSection.module.css";
// import PostHead from "./PostHead";

export default function PostSection() {
  const [tweet, setTweet] = useRecoilState(tweetData);
  const [user, setUser] = useRecoilState(userData);

  useEffect(() => {
    fetch("/tweet.json")
      .then((res) => res.json())
      .then((data) => setTweet(data));

    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const renderPosts = () => {
    const posts = [];

    for (let i = 0; i < tweet.length; i++) {
      const currentUser = user[i];

      if (currentUser && currentUser.name) {
        posts.push(
          <div key={i} className={styles.post}>
            <div className={styles.container}>
              <Avatar
                alt={currentUser.name}
                src={currentUser.images}
                className={styles.avatar}
              />
              <div className={styles.main}>
                <span className={styles.name}>{currentUser.name}</span>
                <br />
                {/* <span className={styles.username}>@{currentUser.username}</span> */}
              </div>
              <div className={styles.btn}>
                <MoreHorizIcon />
              </div>
            </div>
            <p>{tweet[i].content}</p>
            {tweet[i].image && (
              <span className={styles.image}>
                <img
                  className={styles.image}
                  src={tweet[i].image}
                  alt="tweet"
                />
              </span>
            )}
          </div>
        );
      }
    }

    return posts;
  };

  return (
    <div className={styles.tweets}>
      {/* <PostHead/> */}
      {renderPosts()}
    </div>
  );
}
