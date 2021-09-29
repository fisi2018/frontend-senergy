import axios from "axios";
import Layout from "../../components/layout";
import Link from "next/link";
import { API } from "../../tools/api";
import { useLoginContext } from "../../tools/contexts/LoginContext";
import { getDateFormat } from "../../tools/tools";
export default function Licitaciones({res}){
    const {login}= useLoginContext();
    
    return(
        <Layout>
            <section>
                <h1>Licitaciones disponibles</h1>
                <h2>En esta sección podrá visualizar todas las licitaciones disponibles, y si es una empresa proveedora podrá participar de alguna de ellas.
                </h2>
                <p>Nota: La licitación resaltada es a la que se encuentra afiliado, ya sea como creador de la licitación o como participante de esta.</p>
                <div>
                    <table>
                        <thead>
                            <tr className="bg-blue-200" >

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
                                <tr className={`${(!login.user && login.empresa.li_id===el.li_id) || (!login.empresa && login.user.li_id===el.li_id) ?"bg-blue-200":""}`}  key={el.li_id}>
                                    <td>
                                        <Link href={`/licitacion/[id]`} as={`/licitacion/${el.li_id}`}>
                                        <a>
                                        {el.li_id}
                                        </a>
                                        </Link>
                                        </td>
                                    <td>{el.li_nombre}</td>
                            <td>{el.li_descripcion}</td>
                            <td>{getDateFormat(el.li_fecha_apertura)}</td>
                            <td>{getDateFormat(el.li_fecha_fin_apertura)}</td>
                            <td>{getDateFormat(el.li_fecha_inicio_oferta)}</td>
                            <td>{getDateFormat(el.li_fecha_fin_oferta)}</td>
                            <td>{getDateFormat(el.li_fecha_inicio_auditoria)}</td>
                            <td>{getDateFormat(el.li_fecha_fin_auditoria)}</td>
                            <td>{getDateFormat(el.li_fecha_adjudicacion)}</td>
                            <td>{getDateFormat(el.li_fecha_inicio_vigencia)}</td>
                            <td>{getDateFormat(el.li_fecha_fin_vigencia)}</td>
                            <td>{el.li_nrocontrato}</td>
                            <td>{getDateFormat(el.li_fecha_creacionlicitacion)}</td>
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
            a{
                text-decoration:underline;
            }
            p{
                margin:1rem 0;
            }
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
            h1{
                font-size:2rem;
            }
            h2{
                font-size:1rem;
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