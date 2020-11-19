import React from 'react'
import Styles from '../styledComponents'
import ofline from '../../assets/ofline.png'
const Offline = () => {
  return (
    <Styles.PageOffline>
      <Styles.Container offline>
        <div style={{ margin: '25px', fontSize: '25px', width: '200px' }}>
          <p> Pas de connexion</p>
        </div>
        <div>
          <Styles.Icon offline src={ofline} />
        </div>
        <div style={{ margin: '25px', fontSize: '25px', width: '200px' }}>
          <p> Veuillez réessayer</p>
        </div>
      </Styles.Container>
    </Styles.PageOffline>
  )
}

export default Offline
