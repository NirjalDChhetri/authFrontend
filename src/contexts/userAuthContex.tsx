import { useState } from "react";
import { useContext, createContext } from "react";
import { props } from "../interfaces/props.interface";
import AxiosInstance from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//Context
export const userContext = createContext<any>(null);
export const useUser = () => useContext(userContext);

//User Provider
const userProvider = ({ children }: props) => {
  let userData: any;

  const [user, setUser] = useState<any>(userData);

  //function to login
  const login = async (email: string, password: string) => {
    console.log("this is email",email)
    try {
      const response = await AxiosInstance.post("/user/login", {
        email,
        password,
      });
       console.log('response from backend', response)
      if (response.status === 200) {
        toast('success')
        return {
          success: true,
          message: "User loged in Successfully",
        };
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.response.data
      };
    }
  };
  return (
    <userContext.Provider value={{ user, setUser, login }}>{children}</userContext.Provider>
  );
};

export default userProvider;
