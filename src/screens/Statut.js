import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import facebook from '../assets/facebook.png'
import power from '../assets/power.svg'
import video from '../assets/video.png'
import salon from '../assets/salon.png'
import ellipsis from '../assets/ellipsis.svg'
import backgrounda from '../assets/backgrounda.png'
import photo from '../assets/photo.png'
import Publication from '../components/publication'
import RemoveBtn from '../components/removeBtn'

const Statut = props => {
  const [timeLine, setTimeLine] = useState([])
  const [openPopup, setOpenPopup] = useState(false)
  const [openPopupTwo, setOpenPopupTwo] = useState(false)
  const history = useHistory()

  const handleSubmit = (e, status) => {
    e.preventDefault()
    if (status.length > 0) {
      const tl = [...timeLine, status]
      setTimeLine(tl)
      localStorage.setItem('add', JSON.stringify(tl))
      setOpenPopup(false)
    }
  }
  useEffect(() => {
    setTimeLine(JSON.parse(localStorage.getItem('add') || '[]'))
  }, [])

  // deconnexion
  const deconnexion = () => {
    setTimeout(() => {
      localStorage.removeItem('token')
      history.push('/')
    }, 1000)
  }
  const funcNameUser = () => {
    let name = props.location.state.username.toUpperCase()
    if (!name[0]) {
      const namePremier = name[0]
      return namePremier
    } else {
      const namePremier = name[0]
      const nameSecond = name[1]
      return `${namePremier}${nameSecond}`
    }
  }

  const closePopup = () => {
    setOpenPopup(false)
  }

  const closePopupTwo = () => {
    setOpenPopupTwo(false)
  }

  const removeStatut = id => {
    let statut = JSON.parse(localStorage.getItem('add'))
    const filteredStatut = statut.filter((item, index) => {
      return index !== id
    })
    setTimeLine(filteredStatut)
    localStorage.setItem('add', JSON.stringify(filteredStatut))
    setOpenPopupTwo(false)
  }

  return (
    <StatutContainer className='col'>
      <Container>
        <ContainerNav>
          <BlocStatut justifyContent='space-between'>
            <StatutImage width='35%' src={facebook} alt='Image' />
            <LeftStatut>
              <Icon right onClick={deconnexion} width='30px' src={power} />
            </LeftStatut>
          </BlocStatut>
          <BlocStatut>
            <Colgroup padding='20px' backgroundColor='#3b5998'>
              <SpanName> {funcNameUser()} </SpanName>
            </Colgroup>
            <div>
              <p
                style={{ marginLeft: '10px', marginTop: '15px' }}
                onClick={() => setOpenPopup(true)}
              >
                {' '}
                Que voulez-vous dire ?{' '}
              </p>
            </div>
          </BlocStatut>
        </ContainerNav>
        <hr />
        <BlocDown>
          <p>
            <Icon src={salon} />
            <span> En direct &nbsp; |</span>
          </p>
          <p>
            <Icon src={photo} />
            <span> Photo &nbsp;| </span>
          </p>
          <p>
            <Icon src={video} />
            <span> Salon</span>
          </p>
        </BlocDown>
      </Container>
      <Container>
        <Icon background src={backgrounda} />
      </Container>
      <div>
        {timeLine.map((item, index) => (
          <Container key={index}>
            <Card>
              <BlocStatut justifyContent='space-between'>
                <Colgroup padding='20px' backgroundColor='#3b5998'>
                  <SpanName> {funcNameUser()} </SpanName>
                </Colgroup>
                <div>
                  <p
                    style={{
                      width: '100%',
                      fontWeight: 'bold',
                      marginTop: '15px'
                    }}
                  >
                    {' '}
                    {props.location.state.username}{' '}
                  </p>
                </div>
                <Icon onClick={() => setOpenPopupTwo(true)} src={ellipsis} />
              </BlocStatut>
              <TextStatus>{item}</TextStatus>
            </Card>
            {openPopupTwo ? (
              <RemoveBtn
                removeStatut={removeStatut}
                index={index}
                closePopupTwo={closePopupTwo}
              />
            ) : null}
          </Container>
        ))}
      </div>
      {openPopup ? (
        <Publication handleSubmit={handleSubmit} close={closePopup} />
      ) : null}
    </StatutContainer>
  )
}

// !Style
const StatutContainer = styled.div`
  width: 100%;
  margin: 5px auto;
  background-color: #ddd;
`
const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  margin: 5px auto;
  box-shadow: 0 0 1px 0.5px #ffffff;
`
const ContainerNav = styled.div`
  width: 92%;
  margin: 5px auto;
`
const BlocStatut = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: ${props => props.justifyContent};
`
const StatutImage = styled.img`
  width: ${props => props.width};
`
const LeftStatut = styled.div`
  position: relative;
  margin-top: 3px;
  right: 15px;
`
const Colgroup = styled.div`
  margin: 8px 0;
  position: relative;
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  border-radius: 50%;
  float: ${props => props.float};
`
const SpanName = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: sans-serif;
  color: #fff;
  font-weight: 700;
`
const BlocDown = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  p {
    margin: 3px 0;
  }
  span {
    position: relative;
    float: right;
    margin-left: 8px;
    padding: 4px 0;
    font-weight: 500;
  }
`
const Icon = styled.img`
  ${props => {
    if (props.right) {
      return `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: sans-serif;
      border-radius: 50%;
      font-weight: 900;
      color: #f00;
      `
    } else if (props.background) {
      return `
        width: 100%;
      `
    } else {
      return `
        width: 30px;
        float: left;
      `
    }
  }}
`
const Card = styled.div`
  width: 92%;
  margin: 10px auto;
  background-color: #fff;
`
const TextStatus = styled.div`
  margin: 10px 5px;
  padding-bottom: 5px;
`
export default Statut
