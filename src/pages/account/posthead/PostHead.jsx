import { useEffect, useState } from "react";
import styles from "./PostHead.module.css";
import { Avatar, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PublicIcon from "@mui/icons-material/Public";
import CollectionsIcon from "@mui/icons-material/Collections";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRecoilState } from "recoil";
import { tweetData, userData } from "../../recoilAtom/Atom";

function PostHead() {
  const [activeButton, setActiveButton] = useState("For You");
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [tweet, setTweet] = useRecoilState(tweetData);
  const [user, setUser] = useRecoilState(userData);
  // const islogin = false;
  const number = Math.floor(Math.random() * 900) + 100;
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  function handleChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
    // console.log(image);
  }
  function handleInputChange(e) {
    setText(e.target.value);
    // console.log(image);
  }
  useEffect(() => {
    console.log(image);
  }, [image]);

  function handleClick() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let username = userData.username;
    let userObj = {
      username: username,
      images:
        "https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0",
    };
    let tweetObj = {
      content: text,
      image: image,
      likeCount: 0,
      iscomment: false,
      commentCount: 0,
      isretweet: false,
      reTweetsCount: 0,
      isLiked: false,
      poll: 0,
      ispoll: false,
      share: 0,
      isshare: false,
    };
    Object.preventExtensions(tweetObj);
    Object.preventExtensions(userObj);
    setTweet([tweetObj, ...tweet]);
    setUser([userObj, ...user]);
  }

  return (
    <div>
      <h1>Home</h1>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button
            style={{
              backgroundColor: "#1DA1F2",
              color: "white",
              padding: "0.5rem 1.5rem",
              border: "none",
              borderRadius: "9999px",
              fontWeight: "bold",
              marginRight: "1rem",
              cursor: "pointer",
            }}
            onClick={() => handleButtonClick("For You")}
          >
            For You
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#1DA1F2",
              padding: "0.5rem 1.5rem",
              border: "1px solid #1DA1F2",
              borderRadius: "9999px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => handleButtonClick("Following")}
          >
            Following
          </button>
        </div>
        <div className={styles.postTweet}>
          <Avatar
            alt="Remy Sharp"
            className={styles.avatar}
            src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
          />
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "18px",
              width: "90px",
              borderRadius: "15px",
              transformStyle: "none",
              textTransform: "none",
              marginLeft: "28px",
            }}
          >
            Everyone
            <KeyboardArrowDownIcon />
          </Button>
        </div>
        <div className={styles.tweetInput}>
          <input
            type="text"
            placeholder="What's happening"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.btn}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "18px",
              width: "190px",
              borderRadius: "15px",
              transformStyle: "none",
              textTransform: "none",
              border: "none",
              margin: "0px",
            }}
          >
            <PublicIcon sx={{ height: "15px" }} />
            Everyone can reply
          </Button>
        </div>
        <div className={styles.Btns}>
          <div className={styles.btn1}>
            <label htmlFor="fileInput">
              <CollectionsIcon
                sx={{
                  height: "20px",
                  width: "20px",
                  color: "#1DA1F2",
                  marginRight: "10px",
                  padding: "5px",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "lightskyblue",
                  },
                }}
              />
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <GifIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <PollIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <SentimentSatisfiedAltIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <DateRangeIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <LocationOnIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
          </div>
          <div className={styles.btn2}>
            <Button
              sx={{
                backgroundColor: "#1DA1F2",
                color: "White",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#0e8db7",
                },
              }}
              onClick={handleClick}
            >
              Tweet
            </Button>
          </div>
        </div>
        <div className={styles.lastBtn}>
          <button
            style={{ color: "#1DA1F2", fontSize: "0.9rem", fontWeight: "500" }}
          >
            Show {number} Tweets
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostHead;
