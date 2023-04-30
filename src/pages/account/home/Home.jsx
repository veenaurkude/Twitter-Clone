// import { useRecoilState } from "recoil";
// import Footer from "../../footer/Footer";
// import Sidebar from "../sidebar/Sidebar";
// import SearchBar from "../searchbar/SearchBar";
// import Middle from "../middle/Middle";
// import {RightSection} from '../rightsection/RightSection'
// import { RightDownSection } from "../rightdownsection/RightDownSection";
// import { isLogin } from "../../RecoilAtom/Atom";

// function Home() {
//   const [islogin, setlogin] = useRecoilState(isLogin);

//   function handleClick() {
//     setlogin(!islogin);
//   }

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: ".7fr 1.9fr .8fr",
//         gridTemplateRows: ".7fr 1.9fr .8fr",
//       }}
//     >
//       <div style={{ gridRow: "1 / span 1" }}>
//       {islogin && <Sidebar />}
//       </div>

//       {!islogin && (
//         <h1 style={{ gridColumn: "2 / span 1", textAlign: "center" }}>
//           Welcome to home page
//         </h1>
//       )}

//       <div>
//         {islogin && (
//           <Middle style={{ gridColumn: "2 / span 1", gridRow: "2 / span 1" }} />
//         )}
//       </div>

//       <div>
//         {islogin && (
//           <SearchBar
//             style={{ gridColumn: "2 / span 1", gridRow: "3 / span 1" }}
//           />
//         )}

//         {islogin && (
//           <RightSection
//             style={{ gridColumn: "2 / span 1", gridRow: "3 / span 1" }}
//           />
//         )}

//         {islogin && (
//           <RightDownSection
//             style={{ gridColumn: "2 / span 1", gridRow: "3 / span 1" }}
//           />
//         )}
//       </div>

//       {!islogin && (
//         <Footer style={{ gridColumn: "2 / span 1", gridRow: "3 / span 1" }} />
//       )}

//       {!islogin && (
//         <button
//           onClick={handleClick}
//           style={{ gridColumn: "2 / span 1", justifySelf: "center" }}
//         >
//           click
//         </button>
//       )}
//     </div>
//   );
// }

// export default Home;

// import React from "react";
import { useRecoilState } from "recoil";
import Footer from "../../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import SearchBar from "../searchbar/SearchBar";
import Middle from "../middle/Middle";
import { RightSection } from "../rightsection/RightSection";
import { RightDownSection } from "../rightdownsection/RightDownSection";
import { isLogin } from "../../RecoilAtom/Atom";
import Grid from "@mui/material/Grid";

function Home() {
  const [islogin, setlogin] = useRecoilState(isLogin);

  function handleClick() {
    setlogin(!islogin);
  }

  return (
    <Grid container spacing={2}>
      {!islogin && (
        <h1 style={{ gridColumn: "2 / span 1", textAlign: "center" }}>
          Welcome to home page
        </h1>
      )}
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
      {!islogin && <button onClick={handleClick}>click</button>}
    </Grid>
  );
}

export default Home;
