import React, { useState } from "react";
import {
  Box,
  FormControl,
  TextField,
  FormHelperText,
  InputAdornment,
  IconButton,
  Typography,
  Link,
  Checkbox,
  Grid,
} from "@mui/material";
import { Mp, Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import { loginSchema } from "../../config/schema/authSchems";
import { LoadingButton } from "@mui/lab";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";

const UserLoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (data: any) => {
    console.log("form submit");
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Box>
        <Typography
          mt={2}
          mb={1}
          fontSize="15px"
          color="primary"
          fontWeight={"500"}
        ></Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          // onSubmit={(values,{set})}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          {({ errors, values, handleChange, handleSubmit, touched }) => {
            return (
              <Box
                component="form"
                width="50%"
                sx={{ justifyContent: "center", mx: "auto"}}
                onSubmit={handleSubmit}
              >
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
                <Box display={"flex"} justifyContent="space-between" gap="1rem">
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        value="false"
                        name="rememberMe"
                        color="primary"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: "19px",
                          },
                          svg: {
                            paddingBottom: "2px",
                            color: "gray",
                          },
                        }}
                      />
                    }
                    label="Remember me"
                  />

                  <Link>Forget password ?</Link>
                </Box>
                <LoadingButton
                  type="submit"
                  loadingPosition="start"
                  startIcon={<Visibility sx={{ display: "none" }} />}
                  fullWidth
                  variant="contained"
                  className="mt-2"
                >
                  Login
                </LoadingButton>
                <Grid>
                  <Grid item> Don't have an account? </Grid>
                  <Grid item>
                    <Link
                      variant="body1"
                      onClick={() => navigate("/register")}
                      sx={{ cursor: "pointer", color: "#255d88 !important" }}
                      fontSize={"15px"}
                    >
                      Register
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
export default UserLoginForm;
