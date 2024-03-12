import { Box, Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
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
        <Controller
          control={control}
          rules={{
            required: "Поле є обов'язковим",
          }}
          render={({ field }) => (
            <TextField
              placeholder="Введіть імя"
              {...field}
              type="text"
              error={!!errors.name}
              helperText={errors.name?.message}
              size="small"
              label="Імя"
              variant="standard"
              color="secondary"
              focused
              sx={{
                "& .MuiInputBase-root": {
                  color: "#fff",
                  width: "260px",
                },
              }}
            />
          )}
          name="name"
        />

        <Controller
          control={control}
          rules={{
            required: "Поле є обов'язковим",
          }}
          render={({ field }) => (
            <TextField
              placeholder="Введіть номер телефону"
              {...field}
              type="number"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              size="small"
              label="Телефон"
              variant="standard"
              color="secondary"
              focused
              sx={{
                "& .MuiInputBase-root": {
                  color: "#fff",
                  width: "260px",
                },
              }}
            />
          )}
          name="phone"
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
  );
}
