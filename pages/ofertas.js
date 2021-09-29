import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { useMethod } from "../hooks/useMethod";
import { API } from "../tools/api";
import { useLoginContext } from "../tools/contexts/LoginContext";
var Highcharts=require("highcharts");

const initialMethod={
    message:"",
    response:[]
}
export default function Ofertas(){
   const{login}= useLoginContext();
   const{res,methodGet,methodGetReturn}= useMethod(initialMethod);
   const [button,setButton]=useState({
       preciosMonomicos:false,
       preciosPotencia:false,
       preciosEnergia:false,
       factorActPot:false,
       factorActEner:false
   });
   const getFormatDate=(date)=>{
        const newDate=new Date(date);
        const fechaFormat=newDate.toLocaleDateString();
        return fechaFormat;
   }
   const monomicoCalc=(pot,ph,pfh)=>{
        const result=(parseFloat(pot)*1000/(720*0.79751092507001))+( parseFloat(ph)*5/24)+( parseFloat(pfh)*19/24);
        return result;
   }
   const getSeriesPotencia=(potencia,e1,e2)=>{
        return parseFloat(potencia);
   }
   const getSeriesEnergia=(pot,e1,e2)=>{
    return parseFloat(e1);
   }
   const getSeriesFactor=(fechas,results,calcOperation)=>{
        let series=[];
        const size=fechas.length;
        let initArray=[];
        for(let i=0;i<size;i++){
            initArray.push(null);
        }
        res.response.forEach((el)=>{
            series=[...series,{
                name:el.e_nombre,
                data:new Array(initArray)
            }]
        });
        fechas.forEach((el,index)=>{
            results.forEach((item)=>{
                const date=new Date(item.fecha_mensual);
            const month=date.getMonth()+1; 
            const year=date.getFullYear();
            const fecha=`${year}/${month}`; 
            const obj=res.response.find(dat=>dat.pro_id===item.propuesta_pro_id);
            const mono=calcOperation(item.peh_potencia,item.peh_energia_horas_punta,item.peh_energia_fuera_horas_punta);
                if(fecha===el){
                    series=series.map(empresa=>{
                        if(empresa.name===obj.e_nombre){
                            empresa.data[index]=mono;
                        }
                        return empresa;
                    })
                }
            });
        });
        series.forEach((el,i)=>{
            let newData=[]
            el.data.forEach((item,index)=>{
                item===null && index===0?newData.push(null):item!==null && index===0?newData.push(1):el.data[index-1]!==null?newData.push(item/el.data[index-1]):newData.push(1);
            });
            series[i].data=newData;
        });

        return series;
   }
   const getSeries=(fechas,results,calcOperation)=>{
        let series=[];

        const size=fechas.length;
        let initArray=[];
      
        for(let i=0;i<size;i++){
            initArray.push(null);
        };
        res.response.forEach((el)=>{
            series=[...series,{
                name:el.e_nombre,
                data:new Array(initArray)
            }]
        });
        fechas.forEach((el,index)=>{
            results.forEach((item)=>{
                const date=new Date(item.fecha_mensual);
            const month=date.getMonth()+1; 
            const year=date.getFullYear();
            const fecha=`${year}/${month}`; 
            const mono=calcOperation(item.peh_potencia,item.peh_energia_horas_punta,item.peh_energia_fuera_horas_punta);
                if(fecha===el){
                    series=series.map(empresa=>{
                        const obj=res.response.find(dat=>dat.pro_id===item.propuesta_pro_id);
                        if(empresa.name===obj.e_nombre){
                            empresa.data[index]=mono;
                        }
                        return empresa;
                    })
                }
            });
        });
        //
  
        return series;
   }
   const getFechaList=(results)=>{
        let meses=[];
        
        results.forEach((el)=>{
            const date=new Date(el.fecha_mensual);
            const month=date.getMonth()+1; 
            const year=date.getFullYear();
            const fecha=`${year}/${month}`;            
            if(!meses.find(mes=>mes===fecha)){
                meses=[...meses,fecha]
            }
        })
        
        meses.sort((a,b)=>{
            let array=a.split("/");
            let array2=b.split("/");
            let first=parseInt(array[0])-parseInt(array2[0]);
            let second=parseInt(array[1])-parseInt(array2[1]);
            if(first<0){
                return -1
            }else{
                if(first>0){
                    return +1
                }else{

                    if(second<0){
                        return -1
                    }
                    else{
                        return +1
                    }
                }
            }
        })
    
        return meses;
   }
   const loadChart=async(name,url2,containerName,title,subTitle,getFecha,getSerie,calcOp)=>{
       const results=await methodGetReturn(url2);
       let categories=getFecha(results);
      
       let series=getSerie(categories,results,calcOp);
       
       const chart = Highcharts.chart(`${containerName}`, {
            chart: {
                type: 'line'
            },
            title: {
                text: `${title}`
            },
            xAxis: {
                categories
            },
            yAxis: {
                title: {
                    text: `${subTitle}`
                }
            },
            series,
            credits:{
                enabled:false
            }
        });
        
        setButton({
            ...button,
            [name]:true
        });
          
   }
   
useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"));
    let url=`propuesta/showProps/${user.us_id}`;
    methodGet(url);
   
    
},[]);
const closeChart=(id,name)=>{
    setButton({
        ...button,
        [name]:false
    });
    document.getElementById(id).innerHTML="";
}
    return(
        <Layout>
            <section>
                <h1>Ofertas disponibles</h1>
                <div>
                    <table>
                        <thead>
                            <tr className="bg-blue-200" >
                                <th>pro_id</th>
                                <th>pro_fecha</th>
                                <th>pro_auditada</th>
                                <th>pro_adjudicada</th>
                                <th>e_id</th>
                                <th>e_nombre</th>
                                <th>e_ruc</th>
                                <th>e_correo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {res.response.map((el)=>(
                                <tr key={el.pro_id}>
                                    <td>{el.pro_id}</td>
                                    <td>{getFormatDate(el.pro_fecha)}</td>
                                    <td>{el.pro_auditada}</td>
                                    <td>{el.pro_adjudicada}</td>
                                    <td>{el.e_id}</td>
                                    <td>{el.e_nombre}</td>
                                    <td>{el.e_ruc}</td>
                                    <td>{el.e_correo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h2>Gráficos de ofertas</h2>
                {
                    button.preciosMonomicos?
                    <button onClick={()=>{closeChart("container","preciosMonomicos")}} >Cerrar</button>
                    :
<button onClick={()=>loadChart("preciosMonomicos",`propuesta/propEco/${login.user.li_id}`,"container","Precios monomicos","Valor de precios",getFechaList,getSeries,monomicoCalc)} >Ver gráfico de precios monómicos</button>
                }
                
                <aside id="container" >     
                </aside>
                <a href={`${API}/propuesta/downloadExcel/${login.user.li_id}`} download="Propuesta_economica.xslx" >Descargar informe en excel</a>
                {
                    button.preciosPotencia?
                    <button onClick={()=>closeChart("potencia","preciosPotencia")} >Cerrar</button>
                    :
                <button onClick={()=>loadChart("preciosPotencia",`propuesta/propEco/${login.user.li_id}`,"potencia","Precios ofertados de potencia","Valor de los precios",getFechaList,getSeries,getSeriesPotencia)} >Ver gráfico de potencia</button>
                }
                <aside id="potencia"></aside>
                {button.preciosEnergia?
                <button onClick={()=>closeChart("energia","preciosEnergia")} >Cerrar</button>
                :
                <button onClick={()=>loadChart("preciosEnergia",`propuesta/propEco/${login.user.li_id}`,"energia","Precios de energía","Valor de preios",getFechaList,getSeries,getSeriesEnergia)  } >Ver gráfico de energía</button>
                }
                <aside id="energia"></aside>
                {button.factorActPot?
                <button onClick={()=>closeChart("factorPotencia","factorActPot")} >Cerrar</button>
                :
                <button onClick={()=>loadChart("factorActPot",`propuesta/propEco/${login.user.li_id}`,"factorPotencia","Factor de actualización de potencia","Valor del factor",getFechaList,getSeriesFactor,getSeriesPotencia)} >Ver factor de actualizacion de potencia</button>
                }
                <aside id="factorPotencia"></aside>
                {button.factorActEner?
                <button onClick={()=>closeChart("factorEnergia","factorActEner")} >Cerrar</button>
                :
                <button onClick={()=>loadChart("factorActEner",`propuesta/propEco/${login.user.li_id}`,"factorEnergia","Factor de actualización de precios de energía","Valor del factor",getFechaList,getSeriesFactor,getSeriesEnergia)} >Ver factor de actualizacion de energia</button>
                }
                <aside id="factorEnergia" ></aside>
                <aside id="test" ></aside>
            </section>
            <style jsx>{`
            a{
                padding:0.5rem 1rem;
                background-color:green;
                color:white;
            }
            button{
                background-color:black;
                color:white;
                border-radius:0.2rem;
                padding:0.5rem 1rem;
                margin:0.5rem 0;
            }
            section{
                width:100%;
                display:flex;
                flex-direction:column;
                padding:1rem;
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
