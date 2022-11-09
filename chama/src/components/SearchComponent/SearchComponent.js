import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../constants/BASEURL'
import GlobalContext from '../../Global/GlobalContext'
import { useForm } from '../../hooks/useForm'
import { FormStyled } from './styled'
import 'react-toastify/dist/ReactToastify.css';
const SearchComponent = () => {

  const { form, handleChange, cleanFields } = useForm({
    name: ""
  })
  const { states, setters } = useContext(GlobalContext)

  const onSubmit = async (event) => {
    await event.preventDefault()


    await axios.get(`${BASE_URL}/users/${form.name}`)
      .then((res) => {
        states.profile && states.profile && setters.setProfile && setters.setProfile(res.data)
        const newProfile = res.data
        console.log(newProfile)
        newProfile.dateSearch = Date.now()
        states.profiles.push(newProfile)
        setters.setProfileExist && setters.setProfileExist(true)
        const newProfileList = [...states.profiles, states.profiles]
        localStorage.setItem("profiles", JSON.stringify(newProfileList))
        cleanFields()
        toast.success("Buscando usuário aguarde um momento")
        setters.setWatcher(states.watcher + 1)
      })
      .catch((err) => {
        const errCode = err.response.status
        if (errCode >= 400 && errCode < 500) {
          toast.error("Usuário não encontrado", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        } else {
          toast.error("Error de servidor, API fora do ar.")
        }
      })
  }

  useEffect(() => {
    onSubmit()
  }, [states.watcher && states.watcher])

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