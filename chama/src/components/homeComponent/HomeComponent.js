import React, { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'

const HomeComponent = () => {
    const {states, setters} = useContext(GlobalContext)
    const profile = states.profile && states.profile

  return (
    <div key={profile.id}>
        <img src={profile.avatar_url}/>
        <h1>{profile.bio}</h1>
        <h2>{profile.name}</h2>
        <p> {profile.followers}</p>
        <p> {profile.following}</p>
        <p>{profile.public_repos}</p>
    </div>
  )
}

export default HomeComponent