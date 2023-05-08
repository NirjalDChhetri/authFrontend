import { useState } from "react";
import { useContext, createContext } from "react";
import { props } from "../interfaces/props.interface";
import AxiosInstance from "../api";
import { useNavigate } from "react-router-dom";

export const userContext = createContext<any>(null);
export const useUser = ()=> useContext(userContext)

const userProvider = ({ children }: props) => {
  let userDate: any;

  const navigate = useNavigate();

  const [user, setUser] = useState<any>(userDate);

  const login = async (email: string, password: string) => {
    try {
      const response = await AxiosInstance.post("/user/login", {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/dashboard");
        return {
          success: true,
          message: "User loged in Successfully",
        };
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.response.data ? error.response.data.message : error,
      };
    }
  };
  return ( <userContext.Provider value={{user, setUser, login}}>{children}</userContext.Provider>
)};

export default userProvider;
