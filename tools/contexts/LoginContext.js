import { createContext, useContext,useEffect,useState} from "react";
import axios from "axios";
import { API } from "../api";

const LoginContext=createContext();
const initialLogin={user:false,isLogin:false,
empresa:false};
export const LoginProvider=({children})=>{
    const [login, setLogin] = useState(initialLogin);
    useEffect(()=>{
     const value=localStorage.getItem("user")?{user:JSON.parse(localStorage.getItem("user")), isLogin:true, empresa:false}:localStorage.getItem("empresa")?
     {user:false,empresa:JSON.parse(localStorage.getItem("empresa")), isLogin:true}:initialLogin;
        setLogin(value);
    },[]);
    useEffect(()=>{
        if(!login.empresa && login.isLogin){
            localStorage.setItem("user",JSON.stringify(login.user));
        }else{
            if(!login.user && login.isLogin)
            localStorage.setItem("empresa",JSON.stringify(login.empresa));
        }
    },[login]);
    const logout=async()=>{
        try{
            if(login.user){
                const res=await axios.put(`${API}/user/${login.user.us_id}`,{us_estado:"0"});
                localStorage.removeItem("user");
            }else{
                localStorage.removeItem("empresa");
            }
            setLogin(initialLogin);
        }catch(err){
            console.log("ERROR LOGOUT CATCH ",err);
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