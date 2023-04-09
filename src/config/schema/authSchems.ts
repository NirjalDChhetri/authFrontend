import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").required("Email required"),
    password: Yup.string().min(8).max(32).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,'Use 8 or more characters with letters, numbers & symbols')
})

export const registerSchema = Yup.object().shape({
    userName: Yup.string().required("Username required"),
    email: Yup.string().email("Enter a email").required("Email required"),
    password: Yup.string().min(8).max(32).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,'Use 8 or more characters with letters, numbers & symbols'),
    confirmPassword: Yup.string().required("confirmPassword request").oneOf([Yup.ref('password')])

})