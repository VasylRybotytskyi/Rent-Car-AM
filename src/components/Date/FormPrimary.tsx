import dayjs from "dayjs";
import { Box, Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToOrder } from "../../redux/slices/orderSlice";
import { toast } from "react-toastify";
import { FormPrimaryValue } from "../../Types/formTypes";
import { DatePicker } from "@mui/x-date-pickers";
import { FormPrimaryProps } from "../../Types/Props";

export default function FormPrimary({ carInfo }: FormPrimaryProps) {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    reset,
    formState: { errors, isValid },
    control,
    getValues,
  } = useForm<FormPrimaryValue>({
    defaultValues: {
      name: "",
      surName: "",
      phone: "",
      email: "",
      startDate: null,
      endDate: null,
    },
    mode: "onBlur",
  });

  const onSubmit = () => {
    if (isValid) {
      const formData = getValues();
      formData.startDate = dayjs(formData.startDate).format("DD.MM.YYYY");
      formData.endDate = dayjs(formData.endDate).format("DD.MM.YYYY");
      dispatch(addToOrder({ ...carInfo, formData }));
      toast.success("Авто успішно заброньоване!");
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
            maxLength: { value: 20, message: "Максимально 20 символів" },
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
            maxLength: { value: 20, message: "Максимально 20 символів" },
          }}
          render={({ field }) => (
            <TextField
              placeholder="Введіть прізвище"
              {...field}
              type="text"
              error={!!errors.surName}
              helperText={errors.surName?.message}
              size="small"
              label="Прізвище"
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
          name="surName"
        />
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={{ xs: 2, sm: 1 }}
        sx={{ pt: "8px", width: { xs: "86vw", sm: "100%" } }}
      >
        <Controller
          control={control}
          rules={{
            required: "Поле є обов'язковим",
            minLength: { value: 10, message: "Мінімально 10 символів" },
            maxLength: { value: 13, message: "Максимально 13 символів" },
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

        <Controller
          control={control}
          rules={{
            required: "Поле є обов'язковим",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Введіть коректну електронну адресу",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              size="small"
              label="Електронна адреса"
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
          name="email"
        />
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        gap={{ xs: 2, sm: 1 }}
        sx={{ pt: "8px", width: { xs: "86vw", sm: "100%" } }}
      >
        <Controller
          control={control}
          rules={{
            required: "Виберіть дату",
          }}
          render={({ field, fieldState }) => (
            <DatePicker
              {...field}
              format="DD.MM.YYYY"
              label="Дата початку"
              disablePast={true}
              slotProps={{
                openPickerIcon: { fontSize: "medium" },
                openPickerButton: { color: "secondary" },
                textField: {
                  error: !!fieldState.error,
                  helperText: fieldState.error?.message,
                  variant: "standard",
                  focused: true,
                  color: "secondary",
                },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  color: "#fff",
                  width: "260px",
                },
              }}
            />
          )}
          name="startDate"
        />

        <Controller
          control={control}
          rules={{ required: "Виберіть дату" }}
          render={({ field, fieldState }) => (
            <DatePicker
              {...field}
              format="DD.MM.YYYY"
              label="Дата закінчення"
              disablePast={true}
              slotProps={{
                openPickerIcon: { fontSize: "medium" },
                openPickerButton: { color: "secondary" },
                textField: {
                  error: !!fieldState.error,
                  helperText: fieldState.error?.message,
                  variant: "standard",
                  focused: true,
                  color: "secondary",
                },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  color: "#fff",
                  width: "260px",
                },
              }}
            />
          )}
          name="endDate"
        />
      </Box>

      <Button
        type="submit"
        variant="outlined"
        color="secondary"
        sx={{ mt: "32px" }}
      >
        Бронювати
      </Button>
    </Box>
  );
}
