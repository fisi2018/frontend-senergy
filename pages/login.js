import Layout from "../components/layout";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faUser as farUser,faKey} from "@fortawesome/free-solid-svg-icons";
import { useMethod } from "../hooks/useMethod";
import { useLoginContext } from "../tools/contexts/LoginContext";
import Profile from "../components/profile";
const initialForm={
    us_login:"",
    us_pass:""
}
const initialMethod={
    message:"",
    response:""
}
export default function Login(){
    const {form,handleChange}=useForm(initialForm);
    const {res,methodLogin,methodGetReturn}=useMethod(initialMethod);
    const {login,setLogin,logout}=useLoginContext();
    const initLogin=(e)=>{
        e.preventDefault();
        methodLogin("/user/login",form);
        
    }
    const requestLogin=async()=>{
        let url=`user/getLicitacion/${res.response[0].us_id}`;
        const response=await methodGetReturn(url);
        let data=res.response[0];
        data={...data,li_id:response[0]? response[0].li_id:0}
        localStorage.setItem("user",JSON.stringify(data));
            setLogin({
                empresa:false,
                user:data,
                isLogin:true
            })
    }
    useEffect(() => {
        if(res.response!==""){
            requestLogin();
        }
    }, [res])
    
    return(
        <Layout>

        <section>
            <h2>{res.message}</h2>
            {login.isLogin?
            <div className="container-after-login" >
                <Profile user={login.user} />
                
                <button onClick={logout} >Logout</button>
            </div>
            :
            <>
            <h1>Senergy</h1>
            
            <form onSubmit={initLogin}>
                <article>
                <span className="container-first-icon" >
                    <FontAwesomeIcon size="2x" color="white" icon={faUser} />
                </span>
                </article>
                <h2>Sección de login para usuarios</h2>
                <div className="container-input-login" >
                    <span className="container-icon-input" >

                <FontAwesomeIcon color="rgba(0,0,0,0.4)"  size="lg" icon={farUser} />
                    </span>
                <input onChange={handleChange} value={form.us_login} name="us_login" placeholder="Username" type="text"/>
                </div>
                <div className="container-input-login" >
                    <span className="container-icon-input" >

                <FontAwesomeIcon color="rgba(0,0,0,0.4)" size="lg" icon={faKey} />
                    </span>
                <input onChange={handleChange} value={form.us_pass} name="us_pass" placeholder="Password" type="password"/>
                </div>
                <button type="submit">Login</button>
            </form>
            </>
            }
        </section>
            <style jsx>{`
            .container-input-login{
                background-color:white;
                border-radius:0.2rem;
                margin:1rem 0;
                display:flex;
            }
            .container-first-icon{
                border-radius:50%;
                background-color:black;
                display:flex;
                justify-content:center;
                align-items:center;
                width:2rem;
                height:2rem;
            }
            article{
                display:flex;
                justify-content:center;
            }
            .container-after-login{
                display:flex;
                flex-direction:column;
                align-items:center;
            }
            h1{
                font-size:3rem;
                font-weight:700;
            }
            h2{
                font-size:1.5rem;
                font-weight:lighter;
            }
            section{
                background-color:white;
                width:100%;
                min-height:100vh;
                display:flex;
                flex-direction:column;
                padding:1rem;
                justify-content:center;
                align-items:center;
            }
            form{
                box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.2);
                background-color:rgba(173, 215, 230,0.3);
                border-radius:0.5rem;
                display:flex;
                flex-direction:column;
                padding:1rem;
            }
            .container-icon-input{
                padding:0.5rem;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            input{
              
               
            }
            button{
                padding:0.5rem 0;
                margin-top:1rem;
                border-radius:1.5rem;
                width:8rem;
                font-weight:650;
                background-color:black;
                color: rgba(255, 255, 255, 0.9);;
                transition:all 0.3s ease;
            }
            `}</style>
        </Layout>
    )
}