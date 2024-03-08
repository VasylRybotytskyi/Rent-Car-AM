import dayjs from "dayjs";
import { useController } from "react-hook-form";
import "dayjs/locale/en-gb";
import { DatePicker } from "@mui/x-date-pickers";

const DatePickerControl = ({ name, control, startDate, label }) => {
  const {
    field: { onBlur, ...field },
    fieldState,
  } = useController({
    name,
    label,
    control,
    rules: {
      required: "Виберіть дату",
      validate: (value) => {
        if (startDate && dayjs(value).isBefore(startDate)) {
          return "Невірна кінцева дата";
        }
        return undefined;
      },
    },
  });

  return (
    <DatePicker
      format="DD.MM.YYYY"
      {...field}
      label={label}
      disablePast
      sx={{
        "& .MuiInputBase-root": {
          color: "#fff",
          width: { xs: "86vw", sm: "253px" },
        },
      }}
      slotProps={{
        openPickerIcon: { fontSize: "medium" },
        openPickerButton: { color: "secondary" },
        textField: {
          onBlur,
          error: !!fieldState.error,
          helperText: fieldState.error?.message,

          variant: "standard",
          focused: true,
          color: "secondary",
        },
      }}
    />
  );
};

export default DatePickerControl;
