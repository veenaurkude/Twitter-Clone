import style from "./RightDownSection.module.css";
import { Button } from "@mui/material";
import { useState } from "react";

export function RightDownSection() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  const userData = {
    item1: {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxUOMCGqeaHpA9gD_0avsOdEsNIsT0dquZA&usqp=CAU",
      name: "Virat kholi",
      username: "@imViratKholi",
    },
    item2: {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHCZf_dr4SdB7HAPZNWhAb2OmJBMiJkONUJ73QFESTDreK3V6PQVEp63Fv2e_G11I96A&usqp=CAU",
      name: "Anushka",
      username: "@imAnushka",
    },
    item3: {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkkk-rx6Tszbjkzx2bQNjfBib2jidHart1A&usqp=CAU",
      name: "Allu Arjun",
      username: "@AlluArjun",
    },
    // item4: {
    //   id: 4,
    //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLy2jHeLblN1TkHzaNK1CCA73mKnMxEbYEw&usqp=CAU",
    //   name: "Mark Zuckerberg",
    //   username: "@Mark",
    // },
  };

  return (
    <div className={style.main}>
      <h1>Who to follow</h1> <br />
      {Object.keys(userData).map((key) => (
        <div key={userData[key].id} className={style.contain}>
          <img
            src={userData[key].img}
            alt={userData[key].name}
            style={{ borderRadius: "100%", width: "4.9rem", height: "4.4rem" }}
          />

          <div>
            <p className={style.h1}>{userData[key].name}</p>

            <p className={style.h2}>{userData[key].username}</p>
          </div>

          <div style={{ marginLeft: "6rem" }}>
            <Button
              variant="contained"
              className={style.btn}
              sx={{
                textTransform: "none",
                borderRadius: "5rem",
                width: "8rem",
                height: "2.4rem",
                fontSize: "1rem",
                backgroundColor: "#42a5f5",
                marginTop: "1rem",
              }}
              onClick={handleFollowToggle}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          </div>
        </div>
      ))}
      <br />
      <a href="" className={style.more}>
        Show more...
      </a>
    </div>
  );
}
