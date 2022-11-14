import React, { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import { PFollowStyled, StyledH2, StyledH1 } from '../homeComponent/styled'
import { HistorySection, SectionDiv, SectionStyledHistory, StyledImgHistory } from './styled'

const HistoryComponent = () => {
    const {states} = useContext(GlobalContext)

    const allProfilles = states.profiles && states.profiles.map((profile) => {
        return (
          <SectionDiv>
            <HistorySection key={profile.id}>
            <a href={profile.html_url}><StyledImgHistory src={profile.avatar_url} /></a>
            <SectionStyledHistory>
            <StyledH1>{profile.login}</StyledH1>
            <StyledH2>{profile.name}</StyledH2>
            <PFollowStyled>{profile.location}</PFollowStyled>
            </SectionStyledHistory>
            </HistorySection>
            </SectionDiv>
        )
    })
  return (
    <>
    {states.profiles && states.profiles.length > 0 ? 
      <div>{allProfilles}</div> :
      <div>Nenhum histórico disponível</div>
      }
    
    </>
  )
}

export default HistoryComponent