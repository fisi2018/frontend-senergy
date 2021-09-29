import { useRouter } from "next/dist/client/router";
import Layout from "../components/layout";
import { useForm } from "../hooks/useForm";
import { useMethod } from "../hooks/useMethod";
const initialForm={
    e_id:0,
    e_nombre:"",
    e_ruc:"",
    e_direccion:"",
    e_telefono:"",
    e_correo:"",
    e_web:"",
    e_contacto:"",
    e_pais:"",
    e_login:"",
    e_pass:""
}
const initialMethod={
    message:"",
    response:""
}
export default function RegistrarEmpresa(){
    const {form,handleChange}=useForm(initialForm);
    const {res,methodPost}=useMethod(initialMethod);
    const router=useRouter();
    const sendForm=(e)=>{
        const url="/empresa/createEmpresa";
        e.preventDefault();
        methodPost(url,form);
        router.push("/loginEmpresa");
    }
    return(
        <Layout>
            <section>
            <h2>Registrar empresa</h2>
            <form onSubmit={sendForm}>
                <input onChange={handleChange} name="e_nombre" placeholder="Nombre" value={form.e_nombre} type="text"/>
                <input onChange={handleChange}  name="e_ruc" placeholder="Ruc" value={form.e_ruc} type="text"/>
                <input onChange={handleChange} name="e_direccion" placeholder="Direccion" value={form.e_direccion} type="text"/>
                <input onChange={handleChange} name="e_telefono" placeholder="Telefono" value={form.e_telefono} type="text"/>
                <input onChange={handleChange} name="e_correo" placeholder="Correo" value={form.e_correo} type="text"/>
                <input onChange={handleChange}  name="e_web" placeholder="Web" value={form.e_web} type="text"/>
                <input onChange={handleChange} name="e_contacto" placeholder="Contacto" value={form.e_contacto} type="text"/>
                <input onChange={handleChange} name="e_pais" placeholder="Pais" value={form.e_pais} type="text"/>
                <input onChange={handleChange} value={form.e_login} placeholder="Login" name="e_login" type="text"/>
                <input onChange={handleChange} value={form.e_pass} placeholder="Passsword" type="password" name="e_pass"/>
                <button type="submit" >Enviar formulario</button>
            </form>
            <p>{res.message}</p>
            </section>
            <style jsx>
            {` 
            h2{
                font-size:2rem;
            }
            button{
                padding:0.5rem 1rem;
                margin-top:0.5rem;
                background-color:black;
                color:white;
            }
            input{
                margin:0.5rem 0;
            }
            form{
                box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.2);
                padding:1.5rem;
                display:flex;
                flex-direction:column;
            }
            section{
                width:100%;
                display:flex;
                padding:1rem;
                flex-direction:column;
                align-items:center;
            }
            `}
            </style>
        </Layout>
    )
}