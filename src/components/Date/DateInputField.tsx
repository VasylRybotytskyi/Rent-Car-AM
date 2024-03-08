import { TextField } from "@mui/material";

const DateInputField = ({
  error,
  type,
  helperText,
  register,
  label,
  ...rest
}) => {
  return (
    <TextField
      type={type}
      error={error}
      helperText={helperText}
      {...register}
      size="small"
      label={label}
      variant="standard"
      color="secondary"
      focused
      {...rest}
      sx={{
        "& .MuiInputBase-root": {
          color: "#fff",
          width: { xs: "86vw", sm: "253px" },
        },
      }}
    />
  );
};

export default DateInputField;
