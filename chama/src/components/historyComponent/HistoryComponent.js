import React, { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'

const HistoryComponent = () => {
    const {states, setters} = useContext(GlobalContext)

    const allProfilles = states.profiles && states.profiles.map((profile) => {
        return (
            <section key={profile.id}>
            <p>{profile.dateSearch}</p>
            <p>{profile.login}</p>
            <a href={profile.html_url}><img src={profile.avatar_url} /></a>
            </section>
        )
    })
  return (
    <div>{allProfilles}</div>
  )
}

export default HistoryComponent