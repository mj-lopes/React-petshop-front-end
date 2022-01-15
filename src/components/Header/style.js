import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const HeaderWrapper = styled("header")({
  backgroundColor: "#EEBB00",
});

const FieldSearch = styled((props) => <TextField size="small" {...props} />)(
  (props) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        fontFamily: "Helvetica",
        border: `3px solid ${props.mobile ? "#FFC100" : "white"}`,
        transition: props.theme.transitions.create([
          "border-color",
          "box-shadow",
        ]),
      },
      "&:hover fieldset": {
        borderColor: props.theme.palette.primary.dark,
      },
      "&.Mui-focused fieldset": {
        border: "3px solid transparent",
        boxShadow: `0 0 4px 3px ${props.mobile ? "#FFC100" : "white"}`,
      },
    },
  }),
);

const LoginText = styled("p")({
  fontFamily: "Sen",
  maxWidth: "110px",
  fontSize: ".875rem",
  lineHeight: "1",
  color: "#333",
});

export { HeaderWrapper, FieldSearch, LoginText };
