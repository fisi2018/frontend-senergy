
import { LoginProvider } from "../tools/contexts/LoginContext";
import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";
export default function MyApp ({Component,pageProps}){
 
        return(
            <LoginProvider>

                <Component {...pageProps}/>
            </LoginProvider>
            
        )
}