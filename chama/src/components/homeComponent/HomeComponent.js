import React, { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import { MainContainer, PFollowStyled, RepositoryNumber, RepositoryStyled, StyledBio, StyledDivBio, StyledFollowDiv, StyledH1, StyledH2, StyledImg } from './styled'

const HomeComponent = () => {
  const { states} = useContext(GlobalContext)
  const profile = states.profile && states.profile
  const profileExist = states.profileExist && states.profileExist
  return (
    <>
      { profileExist === true ?
        <MainContainer key={profile.id}>
          <StyledDivBio>
          <StyledImg src={profile.avatar_url} />
          <StyledH1>{profile.login}</StyledH1>
          <StyledH2>{profile.name}</StyledH2>
          </StyledDivBio>
          <StyledBio>{profile.bio}</StyledBio>
          <StyledBio>{profile.location}</StyledBio>
          <StyledFollowDiv>
          <PFollowStyled> Seguidores</PFollowStyled>
          <p>{profile.followers}</p>
          <PFollowStyled> Seguindo</PFollowStyled>
          <p>{profile.following}</p>
          </StyledFollowDiv>
          <RepositoryStyled>
          <p>Repositórios</p>
          <RepositoryNumber>{profile.public_repos}</RepositoryNumber>
          </RepositoryStyled>
        </MainContainer> :
        <></>
      }
    </>

  )
}

export default HomeComponent