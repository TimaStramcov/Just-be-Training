import React from 'react'
import './FilterList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { filterExercisesAction, initExercisesAction } from '../../store/exercises/action'
import { ExersicesSelector } from '../../store/exercises/selector'
import { uid } from '../../utils/uid'

function FilterList() {
  const dispath = useDispatch()
  const exercises = useSelector(ExersicesSelector)

  const groups = [...new Set(exercises.exerciseList.map(el => el.group))]
  const type = [...new Set(exercises.exerciseList.map(el => el.type))]

  return (
    <section className='filterList'>
        <button className='filterList-btn-reset' onClick={() => dispath(initExercisesAction())}>Показать все</button>
        <ul>
            <li><h2>Группа мышц</h2></li>
            {groups.map(exercise => (
                <li key={uid()}>
                    <button className='filterList-btn'
                            onClick={() => dispath(filterExercisesAction(exercises.exerciseList, exercise, 'group'))}>
                    {exercise}
                    </button>
                </li>
            ))}
        </ul>
        <ul>
            <li><h2>Развитие</h2></li>
            {type.map(exercise => (
                <li key={uid()}>
                    <button className='filterList-btn' 
                            onClick={() => dispath(filterExercisesAction(exercises.exerciseList, exercise, 'type'))}>
                    {exercise}
                    </button>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default FilterList