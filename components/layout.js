import Footer from "./footer";
import Header from "./header";
export default function Layout({children}){
    return(
        <div className="block-document-all" >
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap');
                *{
                    font-family:"Nunito",sans-serif;
                }
                .block-document-all{
                    display:flex;
                    flex-direction:column;
                    width:100%;
                }
                html,body{
                    box-sizing:border-box;
                    margin:0;
                }
                html{
                    overflow-x:hidden;
                    scroll-behavior:smooth;
                }
                *,
                *::after,
                *::before{
                    box-sizing:border-box;
                    margin:0;
                    text-decoration:none;
                    padding:0;
                    outline:0;
                    border:0;
                }
            `}</style>
        </div>
    )
}