import axios from "axios";
import { useEffect } from "react";
import Layout from "../components/layout";
import { useForm } from "../hooks/useForm";
import { useMethod } from "../hooks/useMethod";
import { API } from "../tools/api";
import { useLoginContext } from "../tools/contexts/LoginContext";
const initialForm={
    li_id:0,
    li_nombre:"",
    li_descripcion:"",
    li_fecha_apertura:"",
    li_fecha_fin_apertura:"",
    li_fecha_inicio_oferta:"",
    li_fecha_fin_oferta:"",
    li_fecha_inicio_auditoria:"",
    li_fecha_fin_auditoria:"",
    li_fecha_adjudicacion:"",
    li_fecha_inicio_vigencia:"",
    li_fecha_fin_vigencia:"",
    li_nrocontrato:"",
    li_fecha_creacionlicitacion:"",
    puntos_suministro_medicion:"",
    barra_referencia_generacion:"",
    factor_planta:"",
    Estado_Licitacion_el_id:0,
    requisito_re_id:0,
    tipo_contrato_ti_id:0,
    servicio_se_id:0
}
const initialMethod={
    message:"",
    response:""
}
export default function CrearLicitacion({data,err}){
    const {form,handleChange}=useForm(initialForm);
    const {login,setLogin}=useLoginContext();
    const {res,methodPost}=useMethod(initialMethod);
   
    const create=async(e)=>{
        e.preventDefault();
        let url=`/licitacion/createLicitacion/${login.user.us_id}`;
        await methodPost(url,form);
        
    }
    useEffect(()=>{
        if(res.response!==""){
            setLogin({
                ...login,
                user:{
                    ...login.user,
                    li_id:res.response.idLicitacion
                }
            })
        }
    },[res]);
    return(
        <Layout>
            <section>
            <h1>Registrar licitación</h1>
            <h2>{res.message}</h2>
            <form onSubmit={create} >
                <input onChange={handleChange} name="li_nombre" value={form.li_nombre} placeholder="Nombre" type="text"/>
                <input onChange={handleChange} name="li_descripcion" value={form.li_descripcion} placeholder="Descripcion" type="text"/>
                <span>
                <label htmlFor="li_fecha_apertura">Fecha de apertura: </label>
                <input onChange={handleChange}  name="li_fecha_apertura" type="date" />
                </span>
                <span>
                <label htmlFor="li_fecha_fin_apertura">Fecha fin de apertura: </label>
                <input onChange={handleChange} name="li_fecha_fin_apertura"  type="date"/>
                </span>
                <span>
                <label htmlFor="li_fecha_inicio_oferta">Fecha de inicio de oferta:  </label>
                <input onChange={handleChange} name="li_fecha_inicio_oferta" placeholder="Fecha inicio oferta" type="date"/>
                </span>
                <span>
                <label htmlFor="li_fecha_fin_oferta">Fecha de fin de oferta: </label>
                <input onChange={handleChange} name="li_fecha_fin_oferta" placeholder="Fecha fin oferta" type="date"/>
                </span>
                <span>
                    <label htmlFor="li_fecha_inicio_auditoria">Fecha de inicio de auditoria: </label>
                <input onChange={handleChange} name="li_fecha_inicio_auditoria"  placeholder="Fecha inicio auditoria" type="date"/>
                </span>
                <span>
                <label htmlFor="li_fecha_fin_auditoria">Fecha fin de auditoría: </label>
                <input onChange={handleChange} name="li_fecha_fin_auditoria"  placeholder="Fecha fin auditoria" type="date"/>
                </span>
                <span>
                <label htmlFor="li_fecha_adjudicacion">Fecha de adjudicación: </label>
                <input onChange={handleChange} name="li_fecha_adjudicacion"  placeholder="Fecha adjudicacion" type="date"/>
                </span>
                <span>
                <label htmlFor="li_fecha_inicio_vigencia">Fecha de inicio de vigencia: </label>
                <input onChange={handleChange} name="li_fecha_inicio_vigencia"  placeholder="Fecha inicio vigencia" type="date"/>
                </span>
                <span>
                <label htmlFor="li_fecha_fin_vigencia">Fecha de fin de vigencia: </label>
                <input onChange={handleChange} name="li_fecha_fin_vigencia"  placeholder="Fecha fin vigencia" type="date"/>
                </span>
                <input onChange={handleChange} name="li_nrocontrato" value={form.li_nrocontrato} placeholder="Nro contrato" type="text"/>
                <span>
                <label htmlFor="li_fecha_creacionlicitacion">Fecha de cración de licitación: </label>
                <input onChange={handleChange} name="li_fecha_creacionlicitacion"  placeholder="Fecha creacion licitacion" type="date"/>
                </span>
                <input onChange={handleChange} name="puntos_suministro_medicion" value={form.puntos_suministro_medicion} placeholder="Puntos suministro medicion" type="text"/>
                <input onChange={handleChange} name="barra_referencia_generacion" value={form.barra_referencia_generacion} placeholder="Barra referencia generacion" type="text"/>
                <input onChange={handleChange} name="factor_planta" value={form.factor_planta} placeholder="Factor planta" type="text"/>
                <select defaultValue={0} onChange={handleChange} name="Estado_Licitacion_el_id" >
                    <option value={0}>--Selecciona el estado de la licitacion--</option>
                    {data.estadosLicitacion.map(estado=>(
                        <option key={estado.el_id} value={estado.el_id}>{estado.el_nombre}</option>
                    ))}
                </select>
                <select defaultValue={0} onChange={handleChange} name="requisito_re_id" >
                    <option value={0}>--Selecciona un requisito--</option>
                    {data.requisitos.map(req=>(
                        <option key={req.re_id} value={req.re_id}>{req.re_nombre}</option>
                    ))}
                </select>
                <select name="tipo_contrato_ti_id" onChange={handleChange} defaultValue={0}>
                    <option value={0}>--Selecciona el tipo de contrato--</option>
                    {data.tiposContrato.map(tipo=>(
                        <option key={tipo.ti_id} value={tipo.ti_id}>{tipo.ti_nombre}</option>
                    ))}
                </select>
                <select onChange={handleChange} name="servicio_se_id" defaultValue={0}>
                    <option value={0}>--Seleccione el tipo de servicio--</option>
                    {data.servicios.map(servicio=>(
                        <option key={servicio.se_id} value={servicio.se_id}>{servicio.se_nombre}</option>
                    ))}
                </select>
                <button type="submit" >Crear licitacion</button>
            </form>
            </section>
            <style jsx>{`
            button{
                background-color:black;
                color:white;
                padding:0.5rem;
                margin-top:0.5rem;
            }
            section{
                width:100%;
                padding:1rem;
                display:flex;
                flex-direction:column;
                align-items:center;
            }
            span{
                display:flex;
                justify-content:space-between;
                align-items:center;
            }
            h1{
                font-size:1.5rem;
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
            `}</style>
        </Layout>
    )
}
export async function getServerSideProps(){
    try{
        const responseEstadoLicitacion=await axios.get(`${API}/licitacion/details/estado_licitacion`);
        const estadosLicitacion= await responseEstadoLicitacion.data;
        const responseRequisito= await axios.get(`${API}/licitacion/details/requisito`);
        const requisitos= await responseRequisito.data;
        const responseTipoContrato= await axios.get(`${API}/licitacion/details/tipo_contrato`);
        const tiposContrato= await responseTipoContrato.data;
        const responseServicio=await axios.get(`${API}/licitacion/details/servicio`);
        const servicios= await responseServicio.data;
        return{
            props:{
                data:{
                    estadosLicitacion,
                    requisitos,
                    tiposContrato,
                    servicios
                },
                err:""
            }
        }
    }catch(err){

        return{
            props:{
                data:"",
                err
            }
        }
    }
}