
import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'


const GlobalState = (props) => {
    const [profile, setProfile] = useState({})
    const [profiles, setProfiles] = useState([])
    const [watcher, setWatcher] = useState(0)
    const [search, setSearch] = useState("")
    const [profileExist, setProfileExist] = useState(false)
 

    useEffect(() => {
        const historicProfiles = localStorage.getItem("profiles")
        const newListProfiles = JSON.parse(historicProfiles)
        setProfiles([...profiles, newListProfiles])
    },[watcher])

    const states = {profile, profiles, watcher, search, profileExist}
    const setters = {setProfile, setProfiles, setWatcher, setSearch, setProfileExist}


    return (
        <GlobalContext.Provider  value={{states, setters}}>
             {props.children}
        </GlobalContext.Provider>
    )

}

export default GlobalState