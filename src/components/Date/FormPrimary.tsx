import dayjs from "dayjs";
import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import DatePickerControl from "./DatePickerControl";
import DateInputField from "./DateInputField";
import { useDispatch } from "react-redux";
import { addToOrder } from "../../redux/slices/orderSlice";
import { toast } from "react-toastify";
import { FormPrimaryValue } from "../../Types/formTypes";

export default function FormPrimary({ carInfo }) {
  const dispatch = useDispatch();
  const form = useForm<FormPrimaryValue>({
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    control,
    getValues,
  } = form;

  const onSubmit = (data: FormValue) => {
    const formattedData = {
      startDate: dayjs(data.startDate).format("DD.MM.YYYY"),
      endDate: dayjs(data.endDate).format("DD.MM.YYYY"),
      name: data.name,
      surName: data.surName,
      phone: data.phone,
      email: data.email,
    };
    console.log(formattedData);
    reset();
  };

  const startDate = getValues("startDate");

  const handleButtonClick = () => {
    if (isValid) {
      const formData = getValues();
      dispatch(addToOrder({ ...carInfo, formData }));
      toast.success("Авто успішно заброньоване!");
    }
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
          error={!!errors.surName}
          helperText={errors.surName?.message}
          register={register("surName", {
            required: "Поле є обовязковим",
            minLength: {
              value: 3,
              message: "Мінімально 3 символа",
            },
            maxLength: {
              value: 12,
              message: "Максимум 12 симолів",
            },
          })}
          label="Прізвище"
          type="text"
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
        <DateInputField
          error={!!errors.phone}
          helperText={errors.phone?.message}
          register={register("phone", {
            required: "Поле є обовязковим",
            minLength: {
              value: 12,
              message: "Мінімально 12 символів",
            },
            maxLength: {
              value: 13,
              message: "Максимум 13 симолів",
            },
          })}
          label="Номер телефону"
          type="number"
        />

        <DateInputField
          error={!!errors.email}
          helperText={errors.email?.message}
          register={register("email", {
            required: "Поле є обов'язковим",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Невірний формат електронної адреси",
            },
          })}
          label="Електронна адреса"
          type="email"
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
        <DatePickerControl
          label="Початок"
          name="startDate"
          control={control}
          startDate={startDate}
          error={errors?.startDate}
        />
        <DatePickerControl
          label="Кінець"
          name="endDate"
          control={control}
          startDate={startDate}
          error={errors?.endDate}
        />
      </Box>

      <Button
        type="submit"
        variant="outlined"
        color="secondary"
        sx={{ mt: "32px" }}
        onClick={handleButtonClick}
      >
        Бронювати
      </Button>
    </Box>
    // <DevTool control={control} />
  );
}
