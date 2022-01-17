import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const InputFormStyle = styled(TextField)((props) => ({
  ":hover": {
    boxShadow: `0 0 4px 1px ${props.theme.palette.primary.main}`,
    borderColor: "blue",
  },
}));

export { InputFormStyle };
