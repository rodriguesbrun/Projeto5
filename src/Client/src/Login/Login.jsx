import { useState } from 'react'
import './Login.css'
import BackGround from '../assets/BackGround.svg'
import Aguia from '../assets/Aguia.svg'
import AguiVoando from '../assets/aguiavoando.svg'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* container */}
    <div className='container'>
      {/* retangulo */}
      <div className='rectangle'>
        <img className='aguiaVoandoImg' src={AguiVoando} alt="aguia" />
        <h1 className='lead'>L.E.A.D.</h1>
        <p className='siglaLead'>Liderança, Empatia, Ação, e Desenvolvimento</p>
        <p className='siglaLead'>Levando pessoas ao próximo nível.</p>
      </div>
      {/* background */}
      <div className='right-part'>
      <img className='backgroundImg' src={BackGround} alt="backgroundfecap" />
      </div>
    </div>
    </>  
  )
}

export default Login