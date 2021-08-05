import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import power from '../assets/power.svg'
import video from '../assets/video.png'
import salon from '../assets/salon.png'
import ellipsis from '../assets/ellipsis.svg'
import backgrounda from '../assets/backgrounda.png'
import photo from '../assets/photo.png'
import Publication from '../components/publication'
import RemoveBtn from '../components/removeBtn'
import Styles from '../components/styledComponents'
import { Detector } from 'react-detect-offline'
import Offline from '../components/offline'
import { MdVideoCall } from 'react-icons/md'
import { ImFilePicture } from 'react-icons/im'
import { IoMdVideocam } from 'react-icons/io'

import {
  ContainerNav,
  Icon,
  StatutContainer,
  StatutImage,
  Colgroup,
  BlocDown
} from '../styles/StatutStyted'

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
    // setTimeLine(JSON.parse(localStorage.getItem('add') || '[]'))
  }, [])

  // deconnexion
  const deconnexion = () => {
    setTimeout(() => {
      localStorage.removeItem('token')
      history.push('/')
    }, 1000)
  }
  const funcNameUser = () => {
    let name = props.location?.state?.username.toUpperCase()
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
              <Styles.SpanName>
                {props.location?.state?.username ? funcNameUser() : ''}
              </Styles.SpanName>
            </Colgroup>
            <div>
              <p
                style={{ marginLeft: '10px', marginTop: '15px' }}
                onClick={() => setOpenPopup(true)}
              >
                Que voulez-vous dire ?
              </p>
            </div>
          </div>
        </div>
        <hr />
        <BlocDown>
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
        </BlocDown>
      </div>

      <Styles.Container>
        elisee
        {/* <Styles.Icon background src={backgrounda} /> */}
      </Styles.Container>

      {/* <div>
        {timeLine.length ? (
          timeLine.map((item, index) => (
            <Styles.Container key={index}>
              <Styles.Card>
                <Styles.BlocStatut justifyContent='space-between'>
                  <Styles.Colgroup padding='20px' backgroundColor='#3b5998'>
                    <Styles.SpanName>
                      {props.location?.state?.username ? funcNameUser() : ''}{' '}
                    </Styles.SpanName>
                  </Styles.Colgroup>
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
                  <Styles.Icon
                    onClick={() => setOpenPopupTwo(true)}
                    src={ellipsis}
                  />
                </Styles.BlocStatut>
                <Styles.TextStatus>{item}</Styles.TextStatus>
              </Styles.Card>
              {openPopupTwo ? (
                <RemoveBtn
                  removeStatut={removeStatut}
                  index={index}
                  closePopupTwo={closePopupTwo}
                />
              ) : null}
            </Styles.Container>
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
      </div> */}
      {openPopup ? (
        <Publication handleSubmit={handleSubmit} close={closePopup} />
      ) : null}
      {/* <Detector
        render={({ online }) => {
          if (!online) {
            return <Offline />
          }
          return <></>
        }}
      /> */}
    </StatutContainer>
  )
}

export default Statut
