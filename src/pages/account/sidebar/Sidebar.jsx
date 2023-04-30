import React, { useState } from "react";
import styles from "./SideBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Modal } from "@mui/material";
import { Avatar } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PublicIcon from "@mui/icons-material/Public";
import CollectionsIcon from "@mui/icons-material/Collections";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRecoilState } from "recoil";
import { isLogin, tweetData, userData } from "../../recoilAtom/Atom";
import { useEffect } from "react";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const LeftSideBar = () => {
  const [islogin, setisLogin] = useRecoilState(isLogin);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [logOutopen, setlogOutopen] = React.useState(false);
  const handlelogOutOpen = () => setlogOutopen(true);
  const handlelogOutClose = () => setlogOutopen(false);
  let name = JSON.parse(localStorage.getItem("userData"));
  let names = name.username;

  function handleLogout() {
    setisLogin(false);
  }
  return (
    <div className={styles.sidebar}>
      <ul className={styles.options}>
        <TwitterIcon
          className={styles.option}
          sx={{ color: "#42a5f5", fontSize: "3rem" }}
        />
        <li className={styles.option}>
          <HomeIcon sx={{ fontSize: 35, marginRight: 2 }} />
          Home
        </li>
        <li className={styles.option}>
          <TagIcon sx={{ fontSize: 35, marginRight: 2 }} />
          Expolre
        </li>
        <li className={styles.option}>
          <NotificationsNoneIcon sx={{ fontSize: 35, marginRight: 2 }} />
          Notifications
        </li>
        <li className={styles.option}>
          <MailOutlineIcon sx={{ fontSize: 35, marginRight: 2 }} />
          Message
        </li>
        <li className={styles.option}>
          <BookmarkBorderIcon sx={{ fontSize: 35, marginRight: 2 }} />
          Bookmarks
        </li>
        <li className={styles.option}>
          <TwitterIcon sx={{ fontSize: 35, marginRight: 2 }} />
          Twitter Blue
        </li>
        <li className={styles.option}>
          <PersonIcon sx={{ fontSize: 35, marginRight: 2 }} />
          Profile
        </li>
        <li className={styles.option}>
          <MoreHorizIcon sx={{ fontSize: 35, marginRight: 2 }} />
          More
        </li>
        <Button
          onClick={handleOpen}
          variant="contained"
          className={styles.btnss}
          sx={{
            textTransform: "none",
            borderRadius: "5rem",
            height: "3rem",
            fontSize: "28px",
            width: "100%",
            backgroundColor: "#42a5f5",
          }}
        >
          Tweet
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Head />
          </Box>
        </Modal>
        <PopupState
          variant="popover"
          popupId="demo-popup-popover"
          sx={{ backgroundColor: "red" }}
        >
          {(popupState) => (
            <div>
              <Button
                // variant="contained"
                {...bindTrigger(popupState)}
                sx={{
                  textTransform: "none",
                  borderRadius: "5rem",
                  marginTop: "10px",
                  width: "100%",
                  marginLeft: "1 rem",
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    className={styles.avatar}
                    src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
                  />
                  <div>
                    <span style={{ display: "block" }}>{names}</span>
                    <span>@{names}</span>
                  </div>
                </div>
                <MoreHorizIcon />
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                sx={{ height: "200px" }}
              >
                <Button
                  sx={{ display: "block", width: "100%" }}
                  onClick={handlelogOutOpen}
                >
                  ADD
                </Button>
                <Modal
                  open={logOutopen}
                  onClose={handlelogOutClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <p style={{ width: "100%", textAlign: "center" }}>
                      <TwitterIcon sx={{ color: "#42a5f5" }} />
                    </p>
                    <h2 style={{ width: "100%", textAlign: "center" }}>
                      Log out of Twitter?
                    </h2>
                    <p>
                      You can always log back in at any time. If you just want
                      to switch accounts, you can do that by adding an existing
                      account.
                    </p>
                    <Button onClick={handleLogout}>Logout</Button>
                    <Button onClose={handlelogOutClose}>Cancle</Button>
                  </Box>
                </Modal>
                <Button onClick={handlelogOutOpen}>Logout</Button>
              </Popover>
            </div>
          )}
        </PopupState>
      </ul>
    </div>
  );
};

export default LeftSideBar;

function Head() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [tweet, setTweet] = useRecoilState(tweetData);
  const [user, setUser] = useRecoilState(userData);
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
    };
    Object.preventExtensions(tweetObj);
    Object.preventExtensions(userObj);
    setTweet([tweetObj, ...tweet]);
    setUser([userObj, ...user]);
  }
  return (
    <>
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
    </>
  );
}
