import axios from "axios";
import { useState } from "react";
import {API} from "../tools/api";
export const useMethod=(initial)=>{
    const [res, setRes] = useState(initial);
    const methodGet=async(url)=>{
        try{
            const response=await axios.get(`${API}/${url}`);
            const json= await response.data;
            setRes({
                message:"Información conseguida exitosamente",
                response:json
            })
        }catch(err){
            setRes({
                message:"Ha ocurrido un error",
                response:err
            })
        }
    }
    const methodGetReturn=async(url)=>{
        try{
            const response=await axios.get(`${API}/${url}`);
            const data=await response.data;
            return data;
        }catch(err){
            return false;
        }
    }
    const methodLogin=async(form)=>{
        try{
            const response=await axios.post(`${API}/user/login`,form);
            const data=await response.data;
            if(data[0].err){
                setRes({
                    message:data[0].err,
                    response:data[0].err
                })
            }else{
                setRes({
                    message:"Acaba de iniciar sesión",
                    response:data
                })
                return data;
            }
        }catch(err){
            setRes(
                {
                    ...res,
                    message:"Usuario no registrado"
                }
            )
        }
    }
    const methodPost=async(url,form)=>{
        try{
            const response=await axios.post(`${API}${url}`,form);
            const json=await response.data;
            setRes({
                message:json.message,
                response:json
            })
        }catch(err){
            setRes({
                message:"Ha ocurrido un error",
                response:err
            })
        }
    }
    const methodDelete=async(url,id)=>{
        try{
            const response= await axios.delete(`${API}/${url}/${id}`);
            const json=await response.data;
            setRes({
                message:json.message,
                response:json
            })
        }catch(err){
            setRes({
                message:"Ha ocurrido un error",
                response:err
            })
        }
    }
    const methodPut=async(url,form)=>{
        try{
            const response= await axios.put(`${API}/${url}`,form);
            const json=await response.data;
            setRes({
                message:json.message,
                response:json
            })
        }catch(err){
            setRes({
                message:"Ha ocurrido un error",
                response:err
            })
        }
    }
    return{
        res,
        methodGet,
        methodGetReturn,
        methodPost,
        methodDelete,
        methodLogin,
        methodPut
    }
}