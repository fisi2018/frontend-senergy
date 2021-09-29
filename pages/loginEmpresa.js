import Layout from "../components/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faKey} from "@fortawesome/free-solid-svg-icons";
import {faBuilding as farBuilding} from "@fortawesome/free-regular-svg-icons";
import { useForm } from "../hooks/useForm";
import { useMethod } from "../hooks/useMethod";
import { useLoginContext } from "../tools/contexts/LoginContext";
import { useEffect } from "react";
import ProfileEmpresa from "../components/profileEmpresa";
const initialForm={
    e_login:"",
    e_pass:""
}
const initialMethod={
    message:"",
    response:""
}
export default function loginEmpresa(){
    const{form,handleChange}= useForm(initialForm);
    const{res,methodLogin,methodGetReturn}=useMethod(initialMethod);
    const{login,setLogin,logout}= useLoginContext();
    const initLogin=(e)=>{
        e.preventDefault();
        methodLogin("/empresa/login",form);
    }
    const requestLogin=async()=>{
        const idLici=await methodGetReturn(`propuesta/getLicitacion/${res.response[0].propuesta_pro_id}`);

        let data=res.response[0];
         data={...data,li_id:idLici[0]?idLici[0].li_id:0};
            localStorage.setItem("empresa",JSON.stringify(data));
            setLogin({
                user:false,
                empresa:data,
                isLogin:true
            })
    }
    useEffect(()=>{
        if(res.response!==""){
            requestLogin();
        }
    },[res]);
 
    return(
        <Layout>
            <section>
                <h2>{res.message}</h2>
               {login.isLogin?
                <div className="container-after-login" >
                    <ProfileEmpresa empresa={login.empresa} />
                
                <button onClick={logout} >Logout</button>
            </div>
               :
               <>
                <h1>Senergy</h1>
                <form onSubmit={initLogin}>
                    <article>
                        <span className="container-first-icon" >
                        <FontAwesomeIcon size="2x" color="white" icon={farBuilding} />
                        </span>
                    </article>
                    <h2>Seccion de login para empresas</h2>
                    <div className="container-input-login">
                        <span className="container-icon-input" >
                            <FontAwesomeIcon color="rgba(0,0,0,0.4)" size="lg" icon={faBuilding} />
                        </span>
                        <input name="e_login" value={form.e_login} onChange={handleChange} placeholder="Login" type="text"/>
                    </div>
                    <div className="container-input-login">
                        <span className="container-icon-input" >
                            <FontAwesomeIcon color="rgba(0,0,0,0.4)" size="lg" icon={faKey} />
                        </span>
                        <input onChange={handleChange} name="e_pass" value={form.e_pass} placeholder="Password" type="password"/>
                    </div>
                    <button type="submit" >Login</button>
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
                padding:1rem;
                display:flex;
                justify-content:center;
                align-items:center;
               
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