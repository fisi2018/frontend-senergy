import Link from "next/link";

export default function Header(){
    return(
        <header>
            <Link href="/">
            <a >Inicio</a>
            </Link>
            <Link href="/crearLicitacion">
            <a>Crear licitacion</a>
            </Link>
            <Link href="/tables" >
            <a >Tablas</a>
            </Link>
            <Link href="/login">
                <a>Login</a>
            </Link>
            <Link href="/licitacion" >
            <a >Licitaciones</a>
            </Link>
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
                background-color:white;
                box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
            }

            `}</style>
        </header>
    )
}