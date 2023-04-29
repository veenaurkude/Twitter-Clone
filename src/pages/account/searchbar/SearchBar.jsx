import SearchIcon from "@mui/icons-material/SearchSharp";
import { TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <>
      <TextField
        type="text"
        id="filled-basic"
        label="Search"
        // variant="filled"
        sx={{
          marginLeft: "2rem",
          width: "31rem",
          borderRadius : '1rem',
          border: "1px solid white", 
          "& label": { color: "white" },
          "& input": { color: "white" },
        }}
        InputProps={{
          endAdornment: <SearchIcon sx={{ color: "white" }}/>,
        }}
      />
    </>
  );
}
