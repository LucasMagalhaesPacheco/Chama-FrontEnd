import React from 'react'
import HomeComponent from '../../components/homeComponent/HomeComponent'
import SearchComponent from '../../components/SearchComponent/SearchComponent'
import { HomeMainSection, MainSection } from './Styled'

const HomePage = () => {
  return (
   <MainSection>
    <SearchComponent />
     <HomeMainSection>
        <HomeComponent />
    </HomeMainSection>
   </MainSection>
  )
}

export default HomePage