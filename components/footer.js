export default function Footer(){
    return(
        <footer>
            <h2>THIS IS FOOTER</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa minus accusantium obcaecati sequi, repudiandae reiciendis, doloribus perspiciatis excepturi laborum eaque. Repudiandae possimus quos natus vero deleniti optio, facere illum.</p>
            <style jsx>{`
                footer{
                    display:flex;
                    width:100%;
                    padding:1.5rem;
                    flex-direction:column;
                    flex:1;
                    background-color:rgba(0,0,0,0.2);
                }
            `}</style>
        </footer>
    )
}