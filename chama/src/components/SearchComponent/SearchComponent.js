import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { BASE_URL } from '../../constants/BASEURL'
import GlobalContext from '../../Global/GlobalContext'
import { useForm } from '../../hooks/useForm'
import { FormStyled } from './styled'

const SearchComponent = () => {

    const {form, handleChange, cleanFields} = useForm({
      name: ""
    })
    const { states, setters } = useContext(GlobalContext)

    const onSubmit = async (event) => {
      await event.preventDefault()
      
      
      await axios.get(`${BASE_URL}/users/${form.name}`)
      .then((res) => {
        states.profile && states.profile && setters.setProfile && setters.setProfile(res.data)
        const newProfile = res.data
        newProfile.dateSearch = Date.now()
        states.profiles.push(newProfile)
        const newProfileList = [...states.profiles, states.profiles]
        localStorage.setItem("profiles", JSON.stringify(newProfileList))
        cleanFields()
        setters.setWatcher(states.watcher + 1)
        alert("Busca de perfil")
        
      })
      .catch((err) => {
        console.log(err)
      })
    }

    useEffect(() => {
      onSubmit()
    },[states.watcher && states.watcher])
  return (
    <FormStyled onSubmit={onSubmit}>
    <input 
     name='name'
     type="text"
     value={form.name}
     onChange={handleChange}
     placeholder="Usuário do GitHub"
     required />
   <button> Procurar </button>
  </FormStyled>
  )
}

export default SearchComponent