import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { setUser } from "../../redux/slices/userSlice.js";
import { FormLoginAndSignup } from "../../Types/formTypes.js";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/use-redux.js";

const FormSignup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormLoginAndSignup) => {
    if (isValid) {
      handleRegister(data.email, data.password);
    }
  };

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
        toast.success("Реєстрація пройшла успішно");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Такий користувач вже існує");
      });
  };

  return (
    <Box sx={{ border: "1px solid #fff", borderRadius: "12px", p: 4 }}>
      <Typography variant="h6" sx={{ pb: "20px" }}>
        Реєстрація
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <Controller
          control={control}
          rules={{
            required: "Поле є обов'язковим",
            minLength: { value: 8, message: "Мінімально 8 символів" },
            maxLength: { value: 20, message: "Максимально 20 символів" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              size="small"
              label="Пароль"
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
          name="password"
        />

        <Button sx={{ color: "#fff" }} type="submit">
          Зареєструватись
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "20px" }}
      >
        <Typography variant="caption">Вже є аккаунт?</Typography>
        <Typography variant="caption" component={Link} to="/login">
          УВІЙТИ
        </Typography>
      </Box>
    </Box>
  );
};

export default FormSignup;
