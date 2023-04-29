import style from "./RightSection.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export function RightSection() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const data = {
    item1: {
      id: 1 ,
      ids: "Sports - Trending",
      name: "Delhi Police",
      likes: "112K Tweets",
    },
    item2: {
      id: 2 ,
      ids: "Only on Twitter-Trending",
      name: "#WahajAli",
      likes: "8,046 Tweets",
    },
    item3: {
      id: 3,
      ids: "Sports-Trending",
      name: "Lucknow",
      likes: "15.1K Tweets",
    }
    // item4: {
    //   id: 4,
    //   ids: "Entertainment-Trending",
    //   name: "#Allu Arjun",
    //   likes: "13.8K Tweets",
    // },
  };

  
  const [notInterested, setNotInterested] = useState([]);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1> What's Happening</h1>

        {Object.keys(data).map((key) => (
          !notInterested.includes(data[key].id) &&
          <div key={key}>
            <br />
            <br />
            <span>{data[key].ids}</span>
            <MoreHorizIcon
              sx={{
                float: "right",
                marginRight: "1rem",
                cursor: "pointer",
                size: "1rem",
              }}
              onClick={handleOpen}
            />

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "white",
                  border: "2px solid #000",
                  color: "black",
                  p: 4,
                  cursor: "pointer",
                }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  sx={{
                    mt: 2,
                    "&:hover:active": {
                      backgroundColor: "yellow",
                    },
                  }}
                  
                >
                  Interested
                </Typography>
                <Typography
                  id="modal-modal-description"
                  variant="h6"
                  sx={{
                    mt: 2,
                    "&:hover:active": {
                      backgroundColor: "white",
                    },
                  }}
                  onClick={() => {setNotInterested([...notInterested, data[key].id]) ; handleClose ()}}
                >
                  Not Interested
                </Typography>
              </Box>
            </Modal>

            <br />
            <br />
            <span className={style.p}> {data[key].name}</span>
            <br />
            <br />
            <span> {data[key].likes}</span>
          </div>
        ))}
        <br />
        <a href="" className={style.more}>
          Show More ...
        </a>
      </div>
    </div>
  );
}
