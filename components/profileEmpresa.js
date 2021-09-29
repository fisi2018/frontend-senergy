import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBuilding} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function ProfileEmpresa({empresa}){
    return(
        <div>
            <span>
                <FontAwesomeIcon size="3x" color="white" icon={faBuilding} />
            </span>
            <h1>{empresa.e_nombre}</h1>
            <h2>{empresa.e_ruc}</h2>
            <h2>{empresa.e_correo}</h2>
            <h2>{empresa.e_web}</h2>
            <h2>{empresa.e_contacto}</h2>
            <Link href="/propuestaEco" >
                <a> Actualizar historial </a>
            </Link>
            <style jsx>{`
                a{
            position:relative;
            padding:0.5rem 1rem;
        }
        a:before{
            content:"";
            display:block;
            border:0.1rem solid black;
            border-width:0.1rem 0 0 0.1rem;
            position:absolute;
            width:25%;
            height:25%;
            top:0;
            left:0;
            transition: all 0.3s ease;
        }
        a:hover:before{
            width:105%;
            height:110%;
            border-width:0.1rem;
        }
        a:after{
            content:"";
            display:block;
            border:0.1rem solid black;
            border-width:0 0.1rem 0.1rem 0;
            position:absolute;
            width:25%;
            height:25%;
            bottom:0;
            right:0;
            transition: all 0.3s ease;
        }
        a:hover:after{
            width:105%;
            height:110%;
            border-width:0.1rem;
        }

                span{
                    display:flex;
                    background-color:black;
                    border-radius:50%;
                    padding:1rem;
                }
                div>*{
                    margin:0.5rem 0;
                }
                div{
                    display:flex;
                    border-radius:0.2rem;
                    padding:2rem;
                    flex-direction:column;
                    align-items:center;
                    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.2);
                }
            `}</style>
        </div>
    )
}