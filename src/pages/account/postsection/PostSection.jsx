import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tweetData } from "../../recoilAtom/Atom";
import { userData } from "../../recoilAtom/Atom";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./PostSection.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PollIcon from "@mui/icons-material/Poll";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function PostSection() {
  const [tweet, setTweet] = useRecoilState(tweetData);
  const [user, setUser] = useRecoilState(userData);

  useEffect(() => {
    fetch("/tweet1.json")
      .then((res) => res.json())
      .then((data) => setTweet(data));

    fetch("/user1.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  function handleLikeClick(index) {
    tweet.map((tweet, id) => {
      if (index === id) {
        if (tweet.isLiked === false) {
          let res = { ...tweet, likeCount: tweet.likeCount + 1, isLiked: true };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        } else {
          let res = {
            ...tweet,
            likeCount: tweet.likeCount - 1,
            isLiked: false,
          };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        }
      }
    });
  }
  function handleCommentClick(index) {
    tweet.map((tweet, id) => {
      if (index === id) {
        if (tweet.iscomment === false) {
          let res = {
            ...tweet,
            commentCount: tweet.commentCount + 1,
            iscomment: true,
          };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        } else {
          let res = {
            ...tweet,
            commentCount: tweet.commentCount - 1,
            iscomment: false,
          };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        }
      }
    });
  }
  function handleRetweetClick(index) {
    tweet.map((tweet, id) => {
      if (index === id) {
        if (tweet.isretweet === false) {
          let res = {
            ...tweet,
            reTweetsCount: tweet.reTweetsCount + 1,
            isretweet: true,
          };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        } else {
          let res = {
            ...tweet,
            reTweetsCount: tweet.reTweetsCount - 1,
            isretweet: false,
          };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        }
      }
    });
  }
  function handlePollClick(index) {
    tweet.map((tweet, id) => {
      if (index === id) {
        if (tweet.ispoll === false) {
          let res = {
            ...tweet,
            poll: tweet.poll + 1,
            ispoll: true,
          };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        } else {
          let res = {
            ...tweet,
            poll: tweet.poll - 1,
            ispoll: false,
          };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        }
      }
    });
  }
  function handleShareClick(index) {
    tweet.map((tweet, id) => {
      if (index === id) {
        if (tweet.isshare === false) {
          let res = {
            ...tweet,
            share: tweet.share + 1,
            isshare: true,
          };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        } else {
          let res = {
            ...tweet,
            share: tweet.share - 1,
            isshare: false,
          };
          setTweet((prevState) => {
            const updatedTweets = [...prevState];
            updatedTweets[index] = res;
            return updatedTweets;
          });
        }
      }
    });
  }

  const renderPosts = () => {
    const posts = [];

    for (let i = 0; i < tweet.length; i++) {
      const currentUser = user[i];

      if (currentUser && currentUser.username) {
        posts.push(
          <div key={i} className={styles.post}>
            <div className={styles.container}>
              <Avatar
                alt={currentUser.username}
                src={currentUser.images}
                className={styles.avatar}
              />
              <div className={styles.main}>
                <span className={styles.name}>{currentUser.username}</span>
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
            <div className={styles.Buttons}>
              <Button
                sx={{ color: "white" }}
                onClick={() => handleCommentClick(i)}
              >
                <div style={{ display: "flex" }}>
                  <ChatBubbleOutlineIcon />
                  <span>{tweet[i].commentCount}</span>
                </div>
              </Button>
              <Button
                sx={{ color: "White" }}
                onClick={() => handleRetweetClick(i)}
              >
                <div style={{ display: "flex" }}>
                  <AutorenewIcon />
                  <span>{tweet[i].reTweetsCount}</span>
                </div>
              </Button>
              <Button
                sx={tweet[i].isLiked ? { color: "red" } : { color: "white" }}
                onClick={() => handleLikeClick(i)}
              >
                <div style={{ display: "flex" }}>
                  {tweet[i].isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  <span>{tweet[i].likeCount}</span>
                </div>
              </Button>

              <Button
                sx={{ color: "white" }}
                onClick={() => handlePollClick(i)}
              >
                <div style={{ display: "flex" }}>
                  <PollIcon />
                  <span>{tweet[i].poll}</span>
                </div>
              </Button>
              <Button
                sx={{ color: "white" }}
                onClick={() => handleShareClick(i)}
              >
                <div style={{ display: "flex" }}>
                  <IosShareIcon />
                  <span>{tweet[i].share}</span>
                </div>
              </Button>
            </div>
          </div>
        );
      }
    }

    return posts;
  };

  return (
    <div className={styles.tweets}>
      {renderPosts()}
    </div>
  );
}
