import { useRecoilState } from "recoil";
import Footer from "../../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import SearchBar from "../searchbar/SearchBar";
import Middle from "../middle/Middle";
import { RightSection } from "../rightsection/RightSection";
import { RightDownSection } from "../rightdownsection/RightDownSection";
import { isLogin } from "../../RecoilAtom/Atom";
import Grid from "@mui/material/Grid";
import styles from "./Home.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";

function Home() {
  const [islogin, setlogin] = useRecoilState(isLogin);

  return (
    <Grid container spacing={2}>
      {!islogin && (
        <TwitterIcon
          sx={{
            color: "skyblue",
            margin: "auto",
            fontSize: "10rem",
            marginTop: "3rem",
            width: "100%",
          }}
        />
      )}
      {!islogin && <h1 className={styles.heading}>Welcome to home page</h1>}
      <Grid item xs={3} md={2}>
        {islogin && <Sidebar />}
      </Grid>

      <Grid item xs={5} md={6}>
        {islogin && <Middle />}
      </Grid>

      <Grid item xs={4} md={4}>
        {islogin && <SearchBar />}
        {islogin && <RightSection />}
        {islogin && <RightDownSection />}
      </Grid>

      {!islogin && <Footer />}
    </Grid>
  );
}

export default Home;
