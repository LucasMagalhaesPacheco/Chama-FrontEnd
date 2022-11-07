import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../constants/BASEURL'
import GlobalContext from './GlobalContext'


const GlobalState = (props) => {
    const [profile, setProfile] = useState({})
    const [profiles, setProfiles] = useState([])
    const [watcher, setWatcher] = useState(0)
    const [search, setSearch] = useState("")
 

    useEffect(() => {
        const historicProfiles = localStorage.getItem("profiles")
        const newListProfiles = JSON.parse(historicProfiles)
        console.log(newListProfiles)
        setProfiles([...profiles, newListProfiles])
    },[watcher])

    const states = {profile, profiles, watcher, search}
    const setters = {setProfile, setProfiles, setWatcher, setSearch}

    return (
        <GlobalContext.Provider  value={{states, setters}}>
             {props.children}
        </GlobalContext.Provider>
    )

}

export default GlobalState