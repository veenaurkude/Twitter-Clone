import styles from "./SideBar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

const LeftSideBar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.options}>
        <TwitterIcon
          className={styles.option}
          sx={{ color: "#42a5f5", fontSize: "3rem" , marginLeft:0 }}
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
          variant="contained"
          className={styles.btn}
          sx={{
            textTransform: "none",
            borderRadius: "5rem",
            width: "80%",
            fontSize:'1.4rem' ,
            backgroundColor: "#42a5f5",
          }}
        >
          Tweet
        </Button>
      </ul>
    </div>
  );
};

export default LeftSideBar;
