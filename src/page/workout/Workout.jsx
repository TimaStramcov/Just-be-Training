import React, { useState } from 'react'
import './Workout.scss'
import addBtn from '../../img/btn-add.svg'
import Modal from '../../components/modal/Modal'
import ListExercise from '../../components/listExercise/ListExercise'
import Timer from '../../components/timer/Timer'
import WorkList from '../../components/workList/WorkList'


function Workout() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='workout__wrapper'>
      <div className='workout'>
        <div className='workout__add'>
          <h3 className='workout__add-header'>Добавить упражнение</h3>
          <button className='workout__add-btn' onClick={() => setOpenModal(true)}>
            <img src= { addBtn } alt="Add" />
          </button>
        </div>
        <WorkList />
      </div>
      <Timer/>
      <Modal active={ openModal } setActive={ setOpenModal }>
        <ListExercise/>
      </Modal>
    </div>
  )
}

export default Workout