import Layout from "../components/layout";
import {API} from "../tools/api";
import Link from "next/link";
export default function Home(){
    
    return(
        <Layout>

        <div>
            <h1>Senergy</h1>
            <h2>Si aún no está registrado puede hacerlo ahora mismo.</h2>
            <article>
            <Link href="/registrarUsuario">
                <a>Usuario</a>
            </Link>
            <Link href="/registrarEmpresa">
                <a >Empresa</a>
            </Link>
            </article>
            
        </div>
        <style jsx>{`
        div{
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        article{
            display:flex;
            width:50%;
            justify-content:space-evenly;
        }
        a{
            padding:1rem 2rem;
            border-radius:0.3rem;
            background-color:#197616;
            color:#ffffff99;
            transition:all 0.3s ease;
        }
        a:hover{
            background-color:#43853D;
            color:white;
        }
        `}</style>
        </Layout>
    )
}
