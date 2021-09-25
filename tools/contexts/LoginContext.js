import { createContext, useContext,useEffect,useState} from "react";
import axios from "axios";
import { API } from "../api";

const LoginContext=createContext();
const initialLogin={user:"",isLogin:false};
export const LoginProvider=({children})=>{
    const [login, setLogin] = useState(initialLogin);
    useEffect(()=>{
     const value=localStorage.getItem("user")?{user:JSON.parse(localStorage.getItem("user")), isLogin:true}:{user:"",isLogin:false};
        setLogin(value);
    },[])
    const logout=async()=>{
        try{
            const res=await axios.put(`${API}/user/${login.user.us_id}`,{us_estado:"0"});
            localStorage.removeItem("user");
            setLogin(initialLogin);
        }catch(err){
            console.log(err);
        }
    }
    const data={
        login,
        logout,
        setLogin
    };
    return(
        <LoginContext.Provider value={data} >{children}</LoginContext.Provider>
    )
}

export default LoginContext;
export const useLoginContext=()=>{
    const value=useContext(LoginContext);
    return value;
}