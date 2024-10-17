import  { useContext, } from "react";
import  {counterContext} from "../context/counterContext";

const WelcomeMessage = () => {
    //Creamos un efecto en nuestro componente 
    // que se va a ejecutar solo una vez despues del primer render
    const { counter, increment }= useContext(counterContext)
    
    
    return (
        <div>
            <h1>Bienvenido</h1>

            <h4>{counter}</h4>
            <button onClick={()=> increment()}>Increment</button>
        </div>
    );

};

export default WelcomeMessage