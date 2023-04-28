import { useRecoilState } from "recoil";
import { isLogin } from "./Atom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Middle from "./Middle";

function Home() {
  const [islogin, setlogin] = useRecoilState(isLogin);

  function handleClick() {
    setlogin(!islogin);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gridTemplateRows: "1fr 3fr 1fr",
      }}
    >
      <div style={{ gridRow: "1 / span 3" }}>{islogin && <Sidebar />}</div>

      {!islogin && (
        <h1 style={{ gridColumn: "2 / span 1", textAlign: "center" }}>
          Welcome to home page
        </h1>
      )}

      {islogin && (
        <Middle style={{ gridColumn: "2 / span 1", gridRow: "2 / span 1" }} />
      )}

      {islogin && (
        <SearchBar
          style={{ gridColumn: "2 / span 1", gridRow: "3 / span 1" }}
        />
      )}

      {!islogin && (
        <Footer style={{ gridColumn: "2 / span 1", gridRow: "3 / span 1" }} />
      )}

      {!islogin && (
        <button
          onClick={handleClick}
          style={{ gridColumn: "2 / span 1", justifySelf: "center" }}
        >
          click
        </button>
      )}
    </div>
  );
}

export default Home;
