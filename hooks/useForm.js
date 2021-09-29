import { useState } from "react";
export const useForm=(initial)=>{
    const [form, setForm] = useState(initial);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        if(name==="tipo_usuario_tu_id" || name==="tipo_identificacion_ti_id" || name==="rol_usuario_rol_id" 
        || name==="Estado_Licitacion_el_id" || name==="requisito_re_id" || name==="tipo_contrato_ti_id" || name==="servicio_se_id" ){
            setForm({
                ...form,
                [name]:parseInt(value)
            })
        }else{ 
            setForm({
                ...form,
                [name]:value
            })
        }
    }
    return{
        form,
        handleChange
    }
}