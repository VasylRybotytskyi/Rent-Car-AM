import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import DateInputField from "./DateInputField";
import { toast } from "react-toastify";
import { FormSecondaryValue } from "../../Types/formTypes";

export default function FormSecondary() {
  const form = useForm<FormSecondaryValue>({
    defaultValues: {
      name: "",
      phone: "",
    },
    mode: "onBlur",
  });

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
    control,
  } = form;

  const onSubmit = () => {
    if (isValid) {
      const formData = getValues();
      console.log(formData);
      toast.success("Ми скоро з вами зв'яжемось!");
    }

    reset();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ my: 3 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ xs: 2, sm: 1 }}
          sx={{ width: { xs: "86vw", sm: "100%" } }}
        >
          <DateInputField
            error={!!errors.name}
            helperText={errors.name?.message}
            register={register("name", {
              required: "Поле є обов'язковим",
              minLength: {
                value: 3,
                message: "Мінімально 3 символа",
              },
              maxLength: {
                value: 12,
                message: "Максимум 12 симолів",
              },
            })}
            label="Ім'я"
            type="text"
          />
          <DateInputField
            error={!!errors.phone}
            helperText={errors.phone?.message}
            register={register("phone", {
              required: "Поле є обовязковим",
              minLength: { value: 12, message: "Мінімум 13 символів" },
              maxLength: { value: 13, message: "Максимум 13 символів" },
            })}
            label="Номер телефону"
            type="number"
          />
        </Box>

        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          sx={{ mt: "32px" }}
        >
          Зателефонувати мені
        </Button>
      </Box>
      <DevTool control={control} />
    </LocalizationProvider>
  );
}
