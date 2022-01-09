import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const FieldSearch = styled((props) => (
  <TextField variant="outlined" size="small" {...props} />
))(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      fontFamily: "Helvetica",
      border: "3px solid white",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.dark,
    },
    "&.Mui-focused fieldset": {
      border: "3px solid transparent",
      boxShadow: "0 0 4px 3px white",
    },
  },
}));

const LoginText = styled("p")({
  fontFamily: "Sen",
  maxWidth: "110px",
  fontSize: ".875rem",
  lineHeight: "1",
});

export { FieldSearch, LoginText };
