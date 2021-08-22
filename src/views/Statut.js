import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import power from '../assets/power.svg'
import ellipsis from '../assets/ellipsis.svg'
import Publication from '../components/publication'
import RemoveBtn from '../components/removeBtn'
import { Detector } from 'react-detect-offline'
import Offline from '../components/offine'
import { MdVideoCall } from 'react-icons/md'
import { ImFilePicture } from 'react-icons/im'
import { IoMdVideocam } from 'react-icons/io'
import Slide from '../components/swiper'

import {
  Container,
  Icon,
  StatutContainer,
  StatutImage,
  Colgroup,
  Card,
  BlocStatut,
  TextStatus
} from '../styles/StatutStyted'

const Statut = props => {
  const [timeLine, setTimeLine] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenBtn, setIsOpenBtn] = useState(false)
  const history = useHistory()

  const handleSubmit = (e, status) => {
    e.preventDefault()
    if (status.length > 0) {
      const tl = [...timeLine, status]
      setTimeLine(tl)
      localStorage.setItem('add', JSON.stringify(tl))
      setIsOpen(!isOpen)
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
    let lastname = props.location?.state?.data.lastname.toUpperCase()
    let firstname = props.location?.state?.data.firstname.toUpperCase()

    return `${lastname[0]}${firstname[0]}`
  }

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const togglePopupBtn = () => {
    setIsOpenBtn(!isOpenBtn)
  }

  const removeStatut = id => {
    let statut = JSON.parse(localStorage.getItem('add'))
    const filteredStatut = statut.filter((item, index) => {
      return index !== id
    })
    setTimeLine(filteredStatut)
    localStorage.setItem('add', JSON.stringify(filteredStatut))
    togglePopupBtn()
  }

  return (
    <StatutContainer className='col'>
      <div className='container-statut'>
        <div className='col-st'>
          <div className='rows-status'>
            <StatutImage width='35%' src={facebook} alt='Image' />
            <div className='power'>
              <Icon right onClick={deconnexion} width='30px' src={power} />
            </div>
          </div>
          <div className='bloc-text'>
            <Colgroup padding='20px' backgroundColor='#3b5998'>
              <span>{props.location?.state ? funcNameUser() : ''}</span>
            </Colgroup>
            <div>
              <p
                style={{ marginLeft: '10px', marginTop: '15px' }}
                onClick={() => togglePopup()}
              >
                Que voulez-vous dire ?
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className='video'>
          <div className='deo direct'>
            <IoMdVideocam />
            <span> En direct &nbsp; |</span>
          </div>
          <div className='deo tof'>
            <ImFilePicture />
            <span> Photo &nbsp;| </span>
          </div>
          <div className='deo salon'>
            <MdVideoCall />
            <span> Salon</span>
          </div>
        </div>
      </div>

      <Container>
        <Slide />
      </Container>

      <div>
        {timeLine.length ? (
          timeLine.map((item, index) => (
            <Container key={index}>
              <Card>
                <BlocStatut justifyContent='space-between'>
                  <Colgroup padding='20px' backgroundColor='#3b5998'>
                    <span>{props.location?.state ? funcNameUser() : ''}</span>
                  </Colgroup>
                  <div>
                    <p
                      style={{
                        width: '100%',
                        fontWeight: 'bold',
                        marginTop: '15px'
                      }}
                    >
                      {props.location?.state?.username
                        ? props.location?.state?.username
                        : ' '}
                    </p>
                  </div>
                  <Icon onClick={togglePopupBtn} src={ellipsis} />
                </BlocStatut>
                <TextStatus>{item}</TextStatus>
              </Card>

              {/* Btn remove */}
              <RemoveBtn
                removeStatut={removeStatut}
                index={index}
                isOpenBtn={isOpenBtn}
                togglePopupBtn={togglePopupBtn}
              />
            </Container>
          ))
        ) : (
          <p
            style={{
              backgroundColor: '#fff',
              fontSize: '20px',
              margin: 0,
              textAlign: 'center',
              fontWeight: 'bold',
              paddingTop: '10px'
            }}
          >
            {' '}
            Pas de publication{' '}
          </p>
        )}
      </div>
      <Publication
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        togglePopup={togglePopup}
      />

      <Detector
        render={({ online }) => {
          if (!online) {
            return <Offline />
          }
          return <></>
        }}
      />
    </StatutContainer>
  )
}

export default Statut
