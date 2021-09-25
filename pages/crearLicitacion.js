import Layout from "../components/layout";
import { useForm } from "../hooks/useForm";
import { useMethod } from "../hooks/useMethod";
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
    servicio_se_id:0,
    propuesta_economica_pe_id:0
}
const initialMethod={
    message:"",
    response:""
}
export default function CrearLicitacion(){
    const {form,handleChange}=useForm(initialForm);
    const {login}=useLoginContext();
    const {res,methodPost}=useMethod(initialMethod);
    const create=(e)=>{
        e.preventDefault();
        let url=`/licitacion/createLicitacion/${login.user.us_id}`;
        methodPost(url,form)
    }
    return(
        <Layout>
            <section>
            <h1>Registrar licitación</h1>
            <h2>{res.message}</h2>
            <form onSubmit={create} >
                <input onChange={handleChange} name="li_nombre" value={form.li_nombre} placeholder="Nombre" type="text"/>
                <input onChange={handleChange} name="li_descripcion" value={form.li_descripcion} placeholder="Descripcion" type="text"/>
                <input onChange={handleChange} name="li_fecha_apertura" value={form.li_fecha_apertura} placeholder="Fecha apertura" type="text"/>
                <input onChange={handleChange} name="li_fecha_fin_apertura" value={form.li_fecha_fin_apertura} placeholder="Fecha fin apertura" type="text"/>
                <input onChange={handleChange} name="li_fecha_inicio_oferta" value={form.li_fecha_inicio_oferta} placeholder="Fecha inicio oferta" type="text"/>
                <input onChange={handleChange} name="li_fecha_fin_oferta" value={form.li_fecha_fin_oferta} placeholder="Fecha fin oferta" type="text"/>
                <input onChange={handleChange} name="li_fecha_inicio_auditoria" value={form.li_fecha_inicio_auditoria} placeholder="Fecha inicio auditoria" type="text"/>
                <input onChange={handleChange} name="li_fecha_fin_auditoria" value={form.li_fecha_fin_auditoria} placeholder="Fecha fin auditoria" type="text"/>
                <input onChange={handleChange} name="li_fecha_adjudicacion" value={form.li_fecha_adjudicacion} placeholder="Fecha adjudicacion" type="text"/>
                <input onChange={handleChange} name="li_fecha_inicio_vigencia" value={form.li_fecha_inicio_vigencia} placeholder="Fecha inicio vigencia" type="text"/>
                <input onChange={handleChange} name="li_fecha_fin_vigencia" value={form.li_fecha_fin_vigencia} placeholder="Fecha fin vigencia" type="text"/>
                <input onChange={handleChange} name="li_nrocontrato" value={form.li_nrocontrato} placeholder="Nro contrato" type="text"/>
                <input onChange={handleChange} name="li_fecha_creacionlicitacion" value={form.li_fecha_creacionlicitacion} placeholder="Fecha creacion licitacion" type="text"/>
                <input onChange={handleChange} name="puntos_suministro_medicion" value={form.puntos_suministro_medicion} placeholder="Puntos suministro medicion" type="text"/>
                <input onChange={handleChange} name="barra_referencia_generacion" value={form.barra_referencia_generacion} placeholder="Barra referencia generacion" type="text"/>
                <input onChange={handleChange} name="factor_planta" value={form.factor_planta} placeholder="Factor planta" type="text"/>
                <input onChange={handleChange} name="Estado_Licitacion_el_id" value={form.Estado_Licitacion_el_id} placeholder="Estado de la licitacion" type="number"/>
                <input onChange={handleChange} name="requisito_re_id" value={form.requisito_re_id} placeholder="Requisito id" type="number"/>
                <input onChange={handleChange} name="tipo_contrato_ti_id" value={form.tipo_contrato_ti_id} placeholder="Tipo de contrato" type="number"/>
                <input onChange={handleChange} name="servicio_se_id" value={form.servicio_se_id} placeholder="Servicio id" type="number"/>
                <input onChange={handleChange} name="propuesta_economica_pe_id" value={form.propuesta_economica_pe_id} placeholder="Propuesta economica" type="number"/>
                <button type="submit" >Crear licitacion</button>
            </form>
            </section>
            <style jsx>{`
            section{
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
            }
            form{
                box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.2);
                padding:1rem;
                display:flex;
                flex-direction:column;
            }
            `}</style>
        </Layout>
    )
}