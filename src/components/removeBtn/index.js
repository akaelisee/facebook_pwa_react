import React from 'react'
import close from '../../assets/close.svg'
import trash from '../../assets/trash.svg'
import Styles from '../styledComponents'

const RemoveBtn = props => {
  return (
    <Styles.PageRemove>
      <Styles.ClosePage onClick={props.closePopupTwo}>
        <Styles.Icon close src={close} />
      </Styles.ClosePage>
      <Styles.CardRemove>
        <Styles.HrBar />
        <Styles.ContainerRemove>
          <Styles.BtnGroup onClick={() => props.removeStatut(props.index)}>
            <Styles.Icon remove src={trash} />
            <Styles.Span>Sumprimer la publication</Styles.Span>
          </Styles.BtnGroup>
        </Styles.ContainerRemove>
      </Styles.CardRemove>
    </Styles.PageRemove>
  )
}

export default RemoveBtn
