import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/slices/userSlice";
import { auth } from "../../firebase/firebase.ts";
import { FormLoginAndSignup } from "../../Types/formTypes.js";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/use-redux.js";

const FormLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormLoginAndSignup) => {
    if (isValid) {
      console.log(data);
      handleLogin(data.email, data.password);
    }
  };

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
        toast.success("Вхід схвалено");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Невірний логін або пароль");
      });
  };

  return (
    <Box sx={{ border: "1px solid #fff", borderRadius: "12px", p: 4 }}>
      <Typography variant="h6" sx={{ pb: "20px" }}>
        Авторизація
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
          Увійти
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "20px" }}
      >
        <Typography variant="caption">Вперше на сайті?</Typography>
        <Typography variant="caption" component={Link} to="/signup">
          ЗАРЕЄСТРУВАТИСЬ
        </Typography>
      </Box>
    </Box>
  );
};

export default FormLogin;
