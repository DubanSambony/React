import { useState } from 'react'
import './App.css'
import Counter from './components/boton'
import UserProfile from './Objetos'
import WelcomeMessage from './components/bienvenido'
import OldNewsPapers from './components/titulo'
import StateCompo from './context/StateCompo'


function App() {
  

  return (
    <>
<StateCompo> 
<Counter/>
<UserProfile/>
<WelcomeMessage/>
<br></br>
<OldNewsPapers/>
</StateCompo>

    </>
  )
}

export default App
