import React from 'react'
import './Modal.scss'
import btnClose from '../../img/close.svg'

function Modal({ active, setActive, children}) {

  return (
    <div className={ active ? 'modal active' : 'modal' } onClick={ () => setActive(false)}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <button className='modal__content-btn-close' onClick={ () => setActive(false)}>
            <img src={ btnClose } alt="close" />
          </button>
          {children}
        </div>
    </div>
  )
}

export default Modal