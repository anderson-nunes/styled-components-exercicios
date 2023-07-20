import styled from 'styled-components'

export const StyleCardVideo = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;

  img{
  width: 100%;
  height: 200px;  
}

`

export const StyleHeader = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;

`

export const StyleMain = styled.main`
  min-height: 80%;
  display: flex;
`

export const StyleNav = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;

  li{
  list-style-type: none;
  
  }

`

export const StylePainelVideos = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
  
  `

export const StyleContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`