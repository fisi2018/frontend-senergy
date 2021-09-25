import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";
import {useForm} from "../../hooks/useForm";
import {useMethod} from "../../hooks/useMethod";

import { API } from "../../tools/api";
const initialForm={
    pro_id:0
}
const initialMethod={
    message:"",
    response:""
}
export default function Licitacion({resp}){
    const {form,handleChange}=useForm(initialForm);
    const {res,methodPut}=useMethod(initialMethod);
    const router=useRouter();
    const startLicitacion=()=>{
        let url=`propuesta/${form.pro_id}`;
        methodPut(url,{
            Licitacion_li_id:resp[0].li_id
        });
    }
    if(router.isFallback){
        <h1>CARGANDO...</h1>
    }
    return(
        <Layout>
            <section>
                <h1>Licitación</h1>
                <h2>{res.message}</h2>
                <h3>{resp[0].li_id}</h3>
                <h3>{resp[0].li_nombre}</h3>
                <h3>{resp[0].li_descripcion}</h3>
                <h3>{resp[0].li_fecha_apertura}</h3>
                            <h3>{resp[0].li_fecha_fin_apertura}</h3>
                            <h3>{resp[0].li_fecha_inicio_oferta}</h3>
                            <h3>{resp[0].li_fecha_fin_oferta}</h3>
                            <h3>{resp[0].li_fecha_inicio_auditoria}</h3>
                            <h3>{resp[0].li_fecha_fin_auditoria}</h3>
                            <h3>{resp[0].li_fecha_adjudicacion}</h3>
                            <h3>{resp[0].li_fecha_inicio_vigencia}</h3>
                            <h3>{resp[0].li_fecha_fin_vigencia}</h3>
                            <h3>{resp[0].li_nrocontrato}</h3>
                            <h3>{resp[0].li_fecha_creacionlicitacion}</h3>
                            <h3>{resp[0].puntos_suministro_medicion}</h3>
                            <h3>{resp[0].barra_referencia_generacion}</h3>
                            <h3>{resp[0].factor_planta}</h3>
                            <h3>{resp[0].Estado_Licitacion_el_id}</h3>
                            <h3>{resp[0].requisito_re_id}</h3>
                            <h3>{resp[0].tipo_contrato_ti_id}</h3>
                            <h3>{resp[0].servicio_se_id}</h3>
                            <h3>{resp[0].propuesta_economica_pe_id}</h3>
                            <input onChange={handleChange} value={form.pro_id} name="pro_id" placeholder="ID de empresa" type="number"/>
                            <button onClick={startLicitacion} >Participar de la licitacion</button>
            </section>
            <style jsx>{`
            button{
                padding:1rem 2rem;
                cursor:pointer;
                border-radius:0.5rem;
                background-color:lightblue;
                font-size:1rem;
                font-weight:bolder;
            }
            section{
                width:100%;
                padding:1rem;
                display:flex;
                flex-direction:column;
                align-items:center;
            }
            `}</style>
        </Layout>
    )
}
export async function getServerSidePaths(){
    try{
        let url=`${API}/licitacion/licitaciones`;
        const response= await axios.get(url);
        const data=await response.data;
        const paths=data.map((el)=>{
            return{
                params:{id:el.li_id}
            }
        })
        return{
            paths,
            isFallback:true
        }
    }catch(err){
        console.log(err);
    }
}
export async function getServerSideProps({params}){
    try{
        const response= await axios.get(`${API}/licitacion/${params.id}`);
        const data=await response.data;
       
        return{
            props:{
                resp:data
            }
        }
    }catch(err){
        console.log(err);
    }
}