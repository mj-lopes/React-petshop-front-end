import { StyledTypography } from "./style";

const Titulo = ({ children }) => {
  return (
    <StyledTypography variant="h3" component="h2" my={3}>
      {children}
    </StyledTypography>
  );
};

export default Titulo;