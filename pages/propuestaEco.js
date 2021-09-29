import axios from "axios";
import { useEffect } from "react";
import Layout from "../components/layout";
import { useForm } from "../hooks/useForm";
import { useMethod } from "../hooks/useMethod";
import { useLoginContext } from "../tools/contexts/LoginContext";
import { getDateFormat } from "../tools/tools";
import { API } from "../tools/api";
const initialMethod={
    message:"",
    response:[]
}
const initialForm={
    peh_id:0,
    peh_potencia:"",
    peh_energia_horas_punta:"",
    peh_energia_fuera_horas_punta:"",
    fecha_mensual:"",
    propuesta_pro_id:0
}
export default function PropuestaEco(){
    const {login} = useLoginContext();
    const {res,methodGet}=useMethod(initialMethod);
    const {form,handleChange}=useForm(initialForm);
    const sendProp=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post(`${API}/propuesta_economica_historial/createPropuesta/${login.empresa.propuesta_pro_id}`,form);
            const data=await response.data;
            
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        if(login.empresa){

            const url=`propuesta_economica_historial/historial/${login.empresa.propuesta_pro_id}`;
           
            methodGet(url);
        }
        
    },[login]);
    return(
        <Layout>
            <section>
                <h1>Historial de propuestas económicas</h1>
                <div>
                <table>
                    <thead>
                        <tr className="bg-blue-200" >
                            <th>peh_id</th>
                            <th>peh_potencia</th>
                            <th>peh_energia_horas_punta</th>
                            <th>peh_energia_fuera_horas_punta</th>
                            <th>fecha_mensual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.response.map(prop=>(
                            <tr key={prop.peh_id}>
                                <td>{prop.peh_id}</td>
                                <td>{prop.peh_potencia}</td>
                                <td>{prop.peh_energia_horas_punta}</td>
                                <td>{prop.peh_energia_fuera_horas_punta}</td>
                                <td>{getDateFormat(prop.fecha_mensual)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <form onSubmit={sendProp} >
                    <h3>Registrar propuesta</h3>
                    <input value={form.peh_potencia} onChange={handleChange} name="peh_potencia" placeholder="Potencia" type="text"/>
                    <input value={form.peh_energia_horas_punta} onChange={handleChange} name="peh_energia_horas_punta" placeholder="Energia en horas punta" type="text"/>
                    <input value={form.peh_energia_fuera_horas_punta} onChange={handleChange} name="peh_energia_fuera_horas_punta" placeholder="Energia fuera de horas punta" type="text"/>
                    <span>
                        <label htmlFor="peh_fecha_mensual">Fecha: </label>
                    <input onChange={handleChange} name="fecha_mensual" type="date"/>
                    </span>
                    <button type="submit" >Enviar</button>
                </form>
            </section>
            <style>{`
            form>*{
                margin:0.5rem;
            }
            span{
                display:flex;
                justify-content:space-evenly;
                align-items:center;
            }
            section{
                width:100%;
                display:flex;
                padding:1.5rem;
                flex-direction:column;
                align-items:center;
            }
            form{
                display:flex;
                flex-direction:column;
                border-radius:0.2rem;
                margin-top:1rem;
                box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.2);
                padding:1.5rem;
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
            button{
                background-color:black;
                color:white;
                padding:0.5rem 1rem;
            }
            `}</style>
        </Layout>
    )
}