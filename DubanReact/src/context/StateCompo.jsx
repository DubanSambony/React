import { useState } from 'react'
import { counterContext } from './counterContext'

const StateCompo = ({children}) => {

const [counter, setCounter] = useState (0)

const increment = () => {
    setCounter (prev => prev + 1)
}

const decrement = () => {
    setCounter (prev => prev - 1)
}


const reset = () => {
    setCounter (0)
}


  return (
    <counterContext.Provider
    value={{
        counter,
        increment, 
        reset,
        decrement,
    } }
    >
        {children}
    </counterContext.Provider>
  )
}

export default StateCompo