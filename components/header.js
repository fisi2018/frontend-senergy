import Link from "next/link";
import { useLoginContext } from "../tools/contexts/LoginContext";

export default function Header(){
    const {login}=useLoginContext();
    return(
        <header>
            {!login.isLogin?
            <>   
            <Link href="/login">
            <a className="link-element" >Usuario login</a>
            </Link>
            <Link href="/" >
            <a>Inicio</a>
            </Link>
            <Link href="/loginEmpresa">
            <a className="link-element" >Empresa login</a>
            </Link>
            </>
            :
            <> 
            {login.empresa?
            <></>
            :
            login.user.li_id!==0?
            <></>
            :
            <Link href="/crearLicitacion">
            <a>Crear licitacion</a>
            </Link>
             }
            <Link href="/tables" >
            <a >Tablas</a>
            </Link>
            {login.empresa?
            <Link href="/loginEmpresa">
                <a>Perfil</a>
            </Link>
            :
            <Link href="/login">
                <a>Perfil</a>
            </Link>
            }
            <Link href="/licitacion" >
            <a >Licitaciones</a>
            </Link>
            </>
            }
            <style>{`
            header{
                top:0;
                left:0;
                z-index:999;
                right:0;
                position:sticky;
                padding:1rem;
                display:flex;
                justify-content:space-evenly;
                align-items:center;
                background-color:white;
                box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
            }
            .link-element{
                border:0.1rem solid black;
                padding: 0.5rem 1rem;
                font-weight:700;
                border-radius:1.5rem;
            }

            `}</style>
        </header>
    )
}