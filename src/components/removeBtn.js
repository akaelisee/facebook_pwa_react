import React from 'react'
import trash from '../assets/trash.svg'
import { HrBar, PageRemove } from '../styles/BtnRemove'
import { Span } from '../styles/Container'
import { Icon } from '../styles/StatutStyted'
import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'


const RemoveBtn = ({index, isOpenBtn, togglePopupBtn, removeStatut}) => {
  
  return (
    <PageRemove>
      <div className={`grid-btn ${isOpenBtn ? 'show-grid': ''}`}>
        <div className="close" onClick={togglePopupBtn}>
          <AiOutlineClose />
        </div>
        <div className="card-remove">
          <HrBar />
          <div className='container-remove'>
            <div className="btn-remove" onClick={() => removeStatut(index)}>
              <Icon remove src={trash} />
              <Span>Sumprimer la publication</Span>
            </div>
          </div>
        </div>
      </div>
    </PageRemove>
  )
}

RemoveBtn.propTypes = {
  index: PropTypes.number,
  isOpenBtn: PropTypes.bool,
  togglePopupBtn: PropTypes.func,
  removeStatut: PropTypes.func
}

export default RemoveBtn

