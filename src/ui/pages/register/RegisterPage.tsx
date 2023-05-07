import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  FormHelperText,
  IconButton,
  InputAdornment,
  Grid,
  Link,
} from "@mui/material";
import { Formik } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../../config/schema/authSchems";
import {
  IRegister,
  IRegisterResponse,
} from "../../../interfaces/register.interface";
import AxiosInstance from "../../../api";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowconfirmPassword((show) => !show);
  const handleSubmit = async (data: IRegister) => {
    const allData = {
      ...data,
    };
    delete allData.confirmPassword
    try{
    const response: IRegisterResponse = await AxiosInstance.post(
      "/user/signup",
      allData
    );
    if (!response?.data.isVerified) {
      toast("Registration Successfull")
      //console.log("Response data is", response.data);
    }
  }catch (error:any) {
    if(error){
      toast("Error")
    }


    }
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Box>
        <Typography>User Register</Typography>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
        >
          {({ errors, values, handleChange, handleSubmit }) => {
            // console.log('a)
            return (
              <Box
                component="form"
                width="50%"
                sx={{ justifycontent: "center", mx: "auto" }}
                onSubmit={handleSubmit}
              >
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    value={values.userName}
                    type="text"
                    name="userName"
                    label="UserName"
                    onChange={handleChange}
                    placeholder="UserName"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Email"
                    placeholder="Enter an email"
                    error={errors.email === undefined ? false : true}
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                  />
                  <FormHelperText color="red"></FormHelperText>
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Password"
                    placeholder="Password"
                    name="password"
                    error={errors.password === undefined ? false : true}
                    onChange={handleChange}
                    value={values.password}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="start"
                            sx={{
                              svg: {
                                fontSize: "15px",
                              },
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="confirmPassword"
                    placeholder="confirmPassword"
                    name="confirmPassword"
                    error={errors.confirmPassword === undefined ? false : true}
                    onChange={handleChange}
                    value={values.confirmPassword}
                    type={showconfirmPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="start"
                            sx={{
                              svg: {
                                fontSize: "15px",
                              },
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <LoadingButton
                  type="submit"
                  loadingPosition="start"
                  startIcon={<Visibility sx={{ display: "none" }} />}
                  fullWidth
                  variant="contained"
                  className="mt-2"
                >
                  Signup
                </LoadingButton>
                <Grid>
                  <Grid item> Already have an Account? </Grid>
                  <Grid item>
                    <Link
                      variant="body1"
                      onClick={() => navigate("/")}
                      sx={{ cursor: "pointer", color: "#255d88 !important" }}
                      fontSize={"15px"}
                    >
                      Login
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            );
          }}
        </Formik>
      </Box>
    </>
  );
};

export default RegisterPage;
