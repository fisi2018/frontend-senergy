import { LoginProvider } from "../tools/contexts/LoginContext";
import "tailwindcss/dist/base.min.css";
import "tailwindcss/dist/components.min.css";
import "tailwindcss/dist/utilities.min.css";
export default function MyApp ({Component,pageProps}){
 
        return(
            <LoginProvider>

                <Component {...pageProps}/>
            </LoginProvider>
            
        )
}