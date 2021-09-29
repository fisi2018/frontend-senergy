import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Profile({user}){
    return(
    <div>
        <span>
            <FontAwesomeIcon color="white" size="3x" icon={faUser} />
        </span>
        <h1>{user.us_razon_social}</h1>
        <h2>{user.us_nombres} {user.us_apellidos}</h2>
        <h2>{user.us_correo}</h2>
        <h2>{user.us_sitio_web}</h2>
        <h2>{user.us_telefono}</h2>
        <Link href="/ofertas" >
        <a>Ver ofertantes</a>
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
        div{
            display:flex;
            flex-direction:column;
            align-items:center;
            box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.2);
            border-radius:0.3rem;
            padding:2rem;
        }
        div>*{
            margin:0.5rem 0;
        }
        span{
            display:flex;
            padding:1rem;
            border-radius:50%;
            background-color:black;
        }
        `}</style>
    </div>
    )
}