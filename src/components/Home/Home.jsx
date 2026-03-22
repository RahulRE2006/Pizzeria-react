import './Home.css'
import CardPizza from "../CardPizza/CardPizza";

function Home (){
    return(
    <div>
        <main className="menu">
        <CardPizza
            url={'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg'}
            nombre={"Pizza peperoni"}
            ingredientes={'pizza , tomate , chesse , peperoni , pizza'}
            precio={100000}
        />
        <CardPizza
                    url={'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg'}
            nombre={"Pizza peperoni 2"}
            ingredientes={'pizza , tomate , otros ingredientes , chesse , peperoni , pizza'}
            precio={120000}/>
        <CardPizza
                    url={'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg'}
            nombre={"Pizza peperoni??"}
            ingredientes={' tomate ,Oro laminado, chesse , peperoni , pizza'}
            precio={140000}/>            
        </main>
    </div>
    )
}

export default Home;