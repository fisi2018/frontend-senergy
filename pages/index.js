import Layout from "../components/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser,faBuilding} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {API} from "../tools/api";
import Link from "next/link";
export default function Home(){
    
    return(
        <Layout>

        <section>
            <h1>Senergy</h1>
            <h2>Si aún no está registrado puede hacerlo ahora mismo.</h2>
            <article>
            <Link href="/registrarUsuario">
                <a> <FontAwesomeIcon icon={faUser} size="lg" /> Usuario</a>
            </Link>
            <Link href="/registrarEmpresa">
                <a> <FontAwesomeIcon icon={faBuilding} size="lg" /> Empresa</a>
            </Link>
            </article>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#00cba9" fill-opacity="1" d="M0,128L0,128L60,128L60,64L120,64L120,160L180,160L180,160L240,160L240,160L300,160L300,224L360,224L360,288L420,288L420,128L480,128L480,64L540,64L540,0L600,0L600,224L660,224L660,32L720,32L720,224L780,224L780,32L840,32L840,64L900,64L900,128L960,128L960,32L1020,32L1020,288L1080,288L1080,288L1140,288L1140,288L1200,288L1200,224L1260,224L1260,128L1320,128L1320,128L1380,128L1380,288L1440,288L1440,320L1380,320L1380,320L1320,320L1320,320L1260,320L1260,320L1200,320L1200,320L1140,320L1140,320L1080,320L1080,320L1020,320L1020,320L960,320L960,320L900,320L900,320L840,320L840,320L780,320L780,320L720,320L720,320L660,320L660,320L600,320L600,320L540,320L540,320L480,320L480,320L420,320L420,320L360,320L360,320L300,320L300,320L240,320L240,320L180,320L180,320L120,320L120,320L60,320L60,320L0,320L0,320Z"></path>
            </svg>
            
        </section>
        <style jsx>{`
       
        h1{
            font-size:5rem;
            font-weight:700;
        }
        h2{
            font-size:2rem;
            font-weight:100;
        }
        section{
            padding:1rem 0 0 0;
        
            width:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        article{
            display:flex;
            padding:1rem;
            width:50%;
            justify-content:space-evenly;
        }
        a{
            padding:1rem 2rem;
            border-radius:1.5rem;
            
            font-weight:650;
            background-color:black;
            color: rgba(255, 255, 255, 0.9);;
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
