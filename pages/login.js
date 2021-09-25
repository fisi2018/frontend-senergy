import Layout from "../components/layout";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm"
import { useMethod } from "../hooks/useMethod";
import { useLoginContext } from "../tools/contexts/LoginContext";
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
    const {res,methodLogin}=useMethod(initialMethod);
    const {login,setLogin,logout}=useLoginContext();
    const initLogin=(e)=>{
        e.preventDefault();
        methodLogin(form);
    }
    useEffect(() => {
        if(res.response!==""){
            localStorage.setItem("user",JSON.stringify(res.response[0]));
            setLogin({
                login:res.response[0],
                isLogin:true
            })
        }
    }, [res])
    console.log(res);
    return(
        <Layout>

        <section>
            <h1>Sección de Login</h1>
            <h2>{res.message}</h2>
            {login.isLogin?
            <div>
                <Link href="/ofertas">
                <a>
                    Ver ofertantes
                </a>
                </Link>
                <button onClick={logout} >Logout</button>
            </div>
            :
            
            <form onSubmit={initLogin}>
                <input onChange={handleChange} value={form.us_login} name="us_login" placeholder="Username" type="text"/>
                <input onChange={handleChange} value={form.us_pass} name="us_pass" placeholder="Password" type="password"/>
                <button type="submit">Login</button>
            </form>
            }
        </section>
            <style jsx>{`
            div{
                display:flex;
                flex-direction:column;
            }
            section{
                width:100%;
                display:flex;
                flex-direction:column;
                padding:1rem;
                align-items:center;
            }
            form{
                box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.2);
                display:flex;
                flex-direction:column;
                padding:1rem;
            }
            `}</style>
        </Layout>
    )
}