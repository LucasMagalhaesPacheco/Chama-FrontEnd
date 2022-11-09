import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { goToHome, goToHistoric } from '../../routes/coordinator'
import { HeaderStyled } from './styled'


const Headers = () => {
    const navigate = useNavigate()
   

    
  return (
    <HeaderStyled>
    <img  src={Logo} alt="Logotipo GitHub" onClick={() => goToHome(navigate)}/>
    {
        window.location.pathname === "/" ? 
        <button onClick={() => goToHistoric(navigate)}> Histórico </button> :
        <button onClick={() => goToHome(navigate)}> Home Page</button>
    }
   
    </HeaderStyled>
  )
}

export default Headers