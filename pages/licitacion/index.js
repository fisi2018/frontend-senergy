import axios from "axios";
import Layout from "../../components/layout";
import Link from "next/link";
import { API } from "../../tools/api";
export default function Licitaciones({res}){

    return(
        <Layout>
            <section>
                <h1>Licitaciones disponibles</h1>
                <div>
                    <table>
                        <thead>
                            <tr>

                            <th>li_id</th>
                            <th>li_nombre</th>
                            <th>li_descripcion</th>
                            <th>li_fecha_apertura</th>
                            <th>li_fecha_fin_apertura</th>
                            <th>li_fecha_inicio_oferta</th>
                            <th>li_fecha_fin_oferta</th>
                            <th>li_fecha_inicio_auditoria</th>
                            <th>li_fecha_fin_auditoria</th>
                            <th>li_fecha_adjudicacion</th>
                            <th>li_fecha_inicio_vigencia</th>
                            <th>li_fecha_fin_vigencia</th>
                            <th>li_nrocontrato</th>
                            <th>li_fecha_creacionlicitacion</th>
                            <th>puntos_suministro_medicion</th>
                            <th>barra_referencia_generacion</th>
                            <th>factor_planta</th>
                            <th>Estado_Licitacion_el_id</th>
                            <th>requisito_re_id</th>
                            <th>tipo_contrato_ti_id</th>
                            <th>servicio_se_id</th>
                            <th>propuesta_economica_pe_id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {res.data.map((el)=>(
                                <tr key={el.li_id}>
                                    <td>
                                        <Link href={`/licitacion/[id]`} as={`/licitacion/${el.li_id}`}>
                                        <a>
                                        {el.li_id}
                                        </a>
                                        </Link>
                                        </td>
                                    <td>{el.li_nombre}</td>
                            <td>{el.li_descripcion}</td>
                            <td>{el.li_fecha_apertura}</td>
                            <td>{el.li_fecha_fin_apertura}</td>
                            <td>{el.li_fecha_inicio_oferta}</td>
                            <td>{el.li_fecha_fin_oferta}</td>
                            <td>{el.li_fecha_inicio_auditoria}</td>
                            <td>{el.li_fecha_fin_auditoria}</td>
                            <td>{el.li_fecha_adjudicacion}</td>
                            <td>{el.li_fecha_inicio_vigencia}</td>
                            <td>{el.li_fecha_fin_vigencia}</td>
                            <td>{el.li_nrocontrato}</td>
                            <td>{el.li_fecha_creacionlicitacion}</td>
                            <td>{el.puntos_suministro_medicion}</td>
                            <td>{el.barra_referencia_generacion}</td>
                            <td>{el.factor_planta}</td>
                            <td>{el.Estado_Licitacion_el_id}</td>
                            <td>{el.requisito_re_id}</td>
                            <td>{el.tipo_contrato_ti_id}</td>
                            <td>{el.servicio_se_id}</td>
                            <td>{el.propuesta_economica_pe_id}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <style jsx>{`
            section{
                width:100%;
                padding:1rem;
                display:flex;
                flex-direction:column;
                align-items:center;
            }
            td,th{
                padding:0.2rem;
                max-width:7rem;
                overflow:hidden;
            }
            table,td,th{
                 border:1px solid rgba(0,0,0,0.2);
            }
            div{
                max-width:100%;
                overflow-x:scroll;
            }
            `}</style>
        </Layout>
    )
}
export async function getServerSideProps(){
    try{
        const response= await axios.get(`${API}/licitacion/licitaciones`);
        const data=await response.data;

        return{
            props:{
                res:{
                    data
                }
            }
        }
    }catch(err){
        return{
            props:{
                res:err
            }
        }
    }
}