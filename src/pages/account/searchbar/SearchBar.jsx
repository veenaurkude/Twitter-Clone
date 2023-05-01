import SearchIcon from "@mui/icons-material/SearchSharp";
import { TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <>
      <TextField
        type="text"
        id="filled-basic"
        label="Search"
        sx={{
          marginLeft: "2rem",
          width: "31rem",
          borderRadius: "1rem",
          border: "1px solid white",
          position: "fixed",
          marginBottom: "4rem",
          backgroundColor: "grey",
          "& label": { color: "white" },
          "& input": { color: "white" },
          "@media screen and (max-width: 786px)": {
            display: "none",
          },
        }}
        InputProps={{
          endAdornment: <SearchIcon sx={{ color: "white" }} />,
        }}
      />
    </>
  );
}
