import Layout from "../components/layout";
import "tailwindcss/tailwind.css";
import { API } from "../tools/api";
import axios from "axios";

export default function Tables({res}){
    console.log(res);
    return(
        <Layout>
            <section>
                <h2>Empresas table</h2>
                <div>

                <table className="table-auto" >
                    <thead>
                        <tr className={`bg-blue-200`}>
                            <th>e_id</th>
                            <th>e_nombre</th>
                            <th>e_ruc</th>
                            <th>e_direccion</th>
                            <th>e_telefono</th>
                            <th>e_correo</th>
                            <th>e_web</th>
                            <th>e_contacto</th>
                            <th>e_pais</th>
                            <th>propuesta_pro_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.empresas.map((el)=>(
                            <tr key={el.e_id}>
                                <td>{el.e_id}</td>
                                <td>{el.e_nombre}</td>
                                <td>{el.e_ruc}</td>
                                <td>{el.e_direccion}</td>
                                <td>{el.e_telefono}</td>
                                <td>{el.e_correo}</td>
                                <td>{el.e_web}</td>
                                <td>{el.e_contacto}</td>
                                <td>{el.e_pais}</td>
                                <td>{el.propuesta_pro_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </section>
            <section>
                <h2>Usuarios table</h2>
                <div>

                <table>
                    <thead>
                        <tr className="bg-blue-200" >
                            <th>
                                us_id
                            </th>
                            <th>us_login</th>
                            <th>us_pass</th>
                            <th>us_nombres</th>
                            <th>us_apellidos</th>
                            <th>us_razon_social</th>
                            <th>us_tipopersonaempresa</th>
                            <th>us_documento</th>
                            <th>us_descripcion</th>
                            <th>us_fecha</th>
                            <th>us_sitio_web</th>
                            <th>us_correo</th>
                            <th>us_direccion</th>
                            <th>us_telefono</th>
                            <th>us_estado</th>
                            <th>tipo_usuario_tu_id</th>
                            <th>rol_usuario_rol_id</th>
                            <th>FeedBack_fb_id</th>
                            <th>tipo_identificacion_ti_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.users.map((el)=>(
                            <tr key={el.us_id} >
                                <td>{el.us_id}</td>
                                <td>{el.us_login}</td>
                                <td>{el.us_pass}</td>
                                <td>{el.us_nombres}</td>
                                <td>{el.us_apellidos}</td>
                                <td>{el.us_razon_social}</td>
                                <td>{el.us_tipopersonaempresa}</td>
                                <td>{el.us_documento}</td>
                                <td>{el.us_descripcion}</td>
                                <td>{el.us_fecha}</td>
                                <td>{el.us_sitio_web}</td>
                                <td>{el.us_correo}</td>
                                <td>{el.us_direccion}</td>
                                <td>{el.us_telefono}</td>
                                <td>{el.us_estado}</td>
                                <td>{el.tipo_usuario_tu_id}</td>
                                <td>{el.rol_usuario_rol_id}</td>
                                <td>{el.FeedBack_fb_id}</td>
                                <td>{el.tipo_identificacion_ti_id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </section>
            <section>
                <h2>Observaciones de licitaciones</h2>
                <div>
                    <table>
                        <thead>
                            <tr className="bg-blue-200" >
                                <th>ol_id</th>
                                <th>ol_observacion</th>
                                <th>ol_fechaobservacion</th>
                                <th>Licitacion_li_id</th>
                                <th>us_usuario_us_id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {res.obs.map((el)=>(
                                <tr key={el.ol_id}>
                                    <td>{el.ol_id}</td>
                                    <td>{el.ol_observacion}</td>
                                    <td>{el.ol_fechaobservacion}</td>
                                    <td>{el.Licitacion_li_id}</td>
                                    <td>{el.us_usuario_us_id}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h2>Propuesta tables</h2>
                <div>
                    <table>
                        <thead>
                            <tr className="bg-blue-200" >
                                <th>pro_id</th>
                                <th>pro_fecha</th>
                                <th>pro_auditada</th>
                                <th>pro_adjudicada</th>
                                <th>Licitacion_li_id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {res.propuestas.map((el)=>(
                                <tr key={el.pro_id}>
                                    <td>{el.pro_id}</td>
                                    <td>{el.pro_fecha}</td>
                                    <td>{el.pro_auditada}</td>
                                    <td>{el.pro_adjudicada}</td>
                                    <td>{el.Licitacion_li_id}</td>
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
    const url=`${API}/empresa/empresas`;
    const url2=`${API}/user/users`;
    const url3=`${API}/observacion_licitacion/observaciones`;
    const url4=`${API}/propuesta/propuestas`;
    try{
        const response=await axios.get(url);
        const data=await response.data;
        const response2=await axios.get(url2);
        const data2=await response2.data;
        const response3= await axios.get(url3);
        const data3=await response3.data;
        const response4= await axios.get(url4);
        const data4=await response4.data;
        return{
            props:{
                res:{
                    empresas:data,
                    users:data2,
                    obs:data3,
                    propuestas:data4
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