import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Texto = styled(({ ...props }) => <Typography {...props} />)(
  ({ theme }) => ({
    color: "#333",
  }),
);

export default Texto;
