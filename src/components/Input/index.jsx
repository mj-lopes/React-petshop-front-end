import { InputFormStyle } from "./style";

const Input = ({ ...props }) => (
  <InputFormStyle fullWidth sx={{ my: 1 }} {...props} />
);

export default Input;
