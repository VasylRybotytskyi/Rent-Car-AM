import { RegisterOptions } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

type DateInputFieldProps = {
  error: boolean;
  type: string;
  helperText: string | undefined;
  register: (rules?: RegisterOptions) => void;
  label: string;
} & TextFieldProps;

export default DateInputFieldProps;
