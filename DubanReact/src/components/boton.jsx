import React, { useState } from 'react';
import { useContext } from 'react';
import { counterContext } from '../context/counterContext';
function Counter(){
    const [count, setCount] = useState(0);

    const { reset } = useContext(counterContext)

    return (
        <>
        <div>
        <p>  you clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <br></br>
        <button onClick={()=> reset()}>RESET</button>


        </>
    );
}




export default Counter