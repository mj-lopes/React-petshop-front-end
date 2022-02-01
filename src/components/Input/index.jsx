import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const Input = styled((props) => <TextField fullWidth {...props} />)(
  (props) => ({
    margin: ".5rem 0",
    "&:hover .MuiInputBase-input": {
      boxShadow: `0 0 4px 1px ${props.theme.palette.primary.main}`,
    },
  }),
);

export default Input;
