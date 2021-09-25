import Layout from "../components/layout";
import { useForm } from "../hooks/useForm";
import { useMethod } from "../hooks/useMethod";
const initialForm={
    us_id:0,
    us_login:"",
    us_pass:"",
    us_nombres:"",
    us_apellidos:"",
    us_razon_social:"",
    us_tipopersonaempresa:"",
    us_documento:"",
    us_descripcion:"",
    us_sitio_web:"",
    us_correo:"",
    us_direccion:"",
    us_telefono:"",
    us_estado:"",
    tipo_usuario_tu_id:0,
    FeedBack_fb_id:0,
    rol_usuario_rol_id:0,
    tipo_identificacion_ti_id:0
}
const initialMethod={
    message:"",
    response:""
}
export default function RegistrarUsuario(){
    const {form,handleChange}=useForm(initialForm);
    const {res,methodPost}=useMethod(initialMethod);
    const sendForm=(e)=>{
        e.preventDefault();
        const url=`/user/createUser`;
        methodPost(url,form);
    }
    return(
        <Layout>
            <section>
                <h2>Registrar usuario</h2>
                <form onSubmit={sendForm}>
                    <input onChange={handleChange} name="us_login" value={form.us_login} placeholder="Login" type="text"/>
                    <input onChange={handleChange} name="us_pass" value={form.us_pass} placeholder="Password" type="text"/>
                    <input onChange={handleChange} name="us_nombres" value={form.us_nombres} placeholder="Nombres" type="text"/>
                    <input onChange={handleChange} name="us_apellidos" value={form.us_apellidos} placeholder="Apellidos" type="text"/>
                    <input onChange={handleChange} name="us_razon_social" value={form.us_razon_social} placeholder="Razón social" type="text"/>
                    <input onChange={handleChange} name="us_tipopersonaempresa" value={form.us_tipopersonaempresa} placeholder="Tipo persona empresa" type="text"/>
                    <input onChange={handleChange} name="us_documento" value={form.us_documento} placeholder="Documento" type="text"/>
                    <input onChange={handleChange} name="us_descripcion" value={form.us_descripcion} placeholder="Descripcion" type="text"/>
                    <input onChange={handleChange} name="us_sitio_web" value={form.us_sitio_web} placeholder="Sitio web" type="text"/>
                    <input onChange={handleChange} name="us_correo" value={form.us_correo} placeholder="Correo" type="text"/>
                    <input onChange={handleChange} name="us_direccion" value={form.us_direccion} placeholder="Direccion" type="text"/>
                    <input onChange={handleChange} name="us_telefono" value={form.us_telefono} placeholder="Telefono" type="text"/>
                    <input onChange={handleChange} name="us_estado" value={form.us_estado} placeholder="Estado" type="text"/>
                    <input onChange={handleChange} name="tipo_usuario_tu_id" value={form.tipo_usuario_tu_id} placeholder="Tipo de usuario" type="number"/>
                    <input onChange={handleChange} name="rol_usuario_rol_id" value={form.rol_usuario_rol_id} placeholder="Rol de usuario" type="text"/>
                    <input onChange={handleChange} name="tipo_identificacion_ti_id" value={form.tipo_identificacion_ti_id} placeholder="Tipo de identificación" type="text"/>
                    <button type="submit" >Enviar formulario</button>
                </form>
                <p>{res.message}</p>
            </section>
            <style jsx>{`
            section{
                display:flex;
                width:100%;
                flex-direction:column;
                align-items:center;
                padding:1rem;
            }
            form{
                padding:1rem;
                box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.2);
                display:flex;
                flex-direction:column;

            }
            `}</style>
        </Layout>
    )
}