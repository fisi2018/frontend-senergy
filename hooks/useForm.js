import { useState } from "react";
export const useForm=(initial)=>{
    const [form, setForm] = useState(initial);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    return{
        form,
        handleChange
    }
}