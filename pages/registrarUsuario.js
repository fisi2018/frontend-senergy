import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/layout";
import { useForm } from "../hooks/useForm";
import { useMethod } from "../hooks/useMethod";
import { API } from "../tools/api";
const initialForm={
    us_id:0,
    us_login:"",
    us_pass:"",
    tipo_usuario_tu_id:0,
    us_nombres:"",
    us_apellidos:"",
    us_razon_social:"",
    us_tipopersonaempresa:"",
    tipo_identificacion_ti_id:0,
    us_documento:"",
    us_descripcion:"",
    us_sitio_web:"",
    us_correo:"",
    us_direccion:"",
    us_telefono:"",
    us_estado:"0",
    rol_usuario_rol_id:0
}
const initialMethod={
    message:"",
    response:""
}
export default function RegistrarUsuario({data,err}){
    const {form,handleChange}=useForm(initialForm);
    const {res,methodPost}=useMethod(initialMethod);
    const router= useRouter();
    const sendForm=(e)=>{
        e.preventDefault();
        const url=`/user/createUser`;
        methodPost(url,form);
        router.push("/login");
    }
    return(
        <Layout>
            <section>
                <h2>Registrar usuario</h2>
                <form onSubmit={sendForm}>
                    <input onChange={handleChange} name="us_login" value={form.us_login} placeholder="Login" type="text"/>
                    <input onChange={handleChange} name="us_pass" value={form.us_pass} placeholder="Password" type="password"/>
                    <select onChange={handleChange} name="tipo_usuario_tu_id" id=""  defaultValue={0} >
                        <option  value={0}>-Seleccionar tipo de usuario-</option>
                        {data.tiposUsuario.map(tipo=>(
                            <option key={tipo.tu_id} value={tipo.tu_id}>{tipo.tu_nombre}</option>
                        ))}
                    </select>
                    <input onChange={handleChange} name="us_nombres" value={form.us_nombres} placeholder="Nombres" type="text"/>
                    <input onChange={handleChange} name="us_apellidos" value={form.us_apellidos} placeholder="Apellidos" type="text"/>
                    <input onChange={handleChange} name="us_razon_social" value={form.us_razon_social} placeholder="Razón social" type="text"/>
                    <input onChange={handleChange} name="us_tipopersonaempresa" value={form.us_tipopersonaempresa} placeholder="Tipo persona empresa" type="text"/>
                    <select defaultValue={0} onChange={handleChange} name="tipo_identificacion_ti_id" id="">
                        <option  value={0}>-Seleccionar tipo de identificación-</option>
                        {data.tiposIdetificacion.map(tipo=>(
                            <option key={tipo.ti_id} value={tipo.ti_id}>{tipo.ti_nombre} - {tipo.tb_abreviatura}</option>
                        ))}
                    </select>
                    <input onChange={handleChange} name="us_documento" value={form.us_documento} placeholder="Documento" type="text"/>
                    <input onChange={handleChange} name="us_descripcion" value={form.us_descripcion} placeholder="Descripcion" type="text"/>
                    <input onChange={handleChange} name="us_sitio_web" value={form.us_sitio_web} placeholder="Sitio web" type="text"/>
                    <input onChange={handleChange} name="us_correo" value={form.us_correo} placeholder="Correo" type="text"/>
                    <input onChange={handleChange} name="us_direccion" value={form.us_direccion} placeholder="Direccion" type="text"/>
                    <input onChange={handleChange} name="us_telefono" value={form.us_telefono} placeholder="Telefono" type="text"/>
                    <select defaultValue={0} onChange={handleChange} name="rol_usuario_rol_id" id="">
                        <option  value={0}>-Seleccionar rol del usuario-</option>
                        {data.rolesUsuario.map(rol=>(
                            <option key={rol.rol_id} value={rol.rol_id}>{rol.rol_nombre}</option>
                        ))}
                    </select>
                    <button type="submit" >Enviar formulario</button>
                </form>
                <p>{res.message}</p>
            </section>
            <style jsx>{`
            input{
                margin:1rem 0;
            }
            button{
                color:white;
                background-color:black;
                padding:0.5rem 1rem;
            }
            h2{
                font-size:2rem;
            }
            section{
                display:flex;
                width:100%;
                flex-direction:column;
                align-items:center;
                padding:1rem;
            }
            form{
                padding:1.5rem;
                box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.2);
                display:flex;
                flex-direction:column;
            }
            select{
                margin: 0.5rem 0;
            }
            `}</style>
        </Layout>
    )
}
export async function getServerSideProps(){
    try{

        const responseTipoUsuario= await axios.get(`${API}/user/tipo_usuario`);
        const tiposUsuario=await responseTipoUsuario.data;
        const responseRolUsuario= await axios.get(`${API}/user/rol_usuario`);
        const rolesUsuario=responseRolUsuario.data;
        const responseTipoIdentificacion= await axios.get(`${API}/user/tipo_identificacion`);
        const tiposIdetificacion= responseTipoIdentificacion.data;
        return{
            props:{
                data:{
                    tiposUsuario,
                    rolesUsuario,
                    tiposIdetificacion
                },
                err:""
            }
        }
    }catch(err){

        return{
            props:{
                data:{
                    tiposUsuario:[],
                    rolesUsuario:[],
                    tiposIdetificacion:[]
                },
                err
            }
        }
    }
}