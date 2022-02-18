import React, { useState } from 'react'
import './WorkList.scss'
import infoBtn from '../../img/info.svg';
import openBtn from '../../img/arrow.svg';
import note from '../../img/note.svg';
import close from '../../img/close.svg';
import { useSelector } from 'react-redux'
import { WorkoutSelector } from '../../store/workout/selector'
import { getDateId } from '../../utils/getDateId'
import { uid } from '../../utils/uid'
import { useDispatch } from 'react-redux';
import { addSetAction } from '../../store/workout/action';

function WorkList() {
    const exercises = useSelector(WorkoutSelector);
    const dateId = getDateId(new Date());
    const workList = exercises[dateId] || exercises.date;
    const dispatch = useDispatch()
    const addSet = (i, date) => {
      dispatch(addSetAction(i, date))
    }


    return (
      <>
        {exercises[dateId] 
        ?
          <ul className='work-list'>
            {workList.map((exercise, i )=> (
              <li key={uid()} className='work-list__item'>
                  <div className='work-list__item-title'>
                    <h3>{exercise.title}</h3>
                    <div className='work-list__item-title-btn'>
                      <button><img src={infoBtn} alt="Info" /></button>
                      <button><img src={note} alt="Note" /></button>
                      <button><img src={openBtn} alt="Open" /></button>
                      <button><img src={close} alt="Close"/></button>
                    </div>
                  </div>
                  <ul className='work-list__sets'>
                    <li className='work-list__sets-header'>
                      <h3>Серия</h3>
                      <h3>Вес</h3>
                      <h3>х</h3>
                      <h3>Повторения</h3>
                      <h3>Отдых</h3>
                      <h3>Done</h3>
                    </li>
                    {exercises[dateId][i].sets?.map((set, j) => (
                      <li className='work-list__sets-body' key={uid()}>
                        <div>{exercises[dateId][i].sets[j].set}</div>
                        <div>Вес</div>
                        <div>х</div>
                        <div>Повторения</div>
                        <div>Отдых</div>
                        <div>Done</div>
                      </li>
                    ))}
                    <li className='work-list__sets-btn-add'>
                      <button onClick={() => addSet(i, dateId)}>+ New set</button>
                    </li>
                  </ul>
              </li>
            ))}
          </ul>
        :
        <div className='work-list-error'>
          <h2 className='work-list-error__undefined'>
            Создайте тренировку
          </h2>
        </div>
        }
      </>
    )
}

export default WorkList