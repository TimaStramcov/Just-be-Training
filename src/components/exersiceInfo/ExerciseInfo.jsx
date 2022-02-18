import React from 'react'
import { useDispatch } from 'react-redux'
import { showExerciseInfoAction } from '../../store/exercises/action'
import './ExerciseInfo.scss'
import backBtn from '../../img/arrow-back.svg'

function ExerciseInfo({title, description, media, type, group}) {
  const dispath = useDispatch()

  return (
    <section className='exercise-info'>
        <div>
            {/* {media} */}
            <img className='list-exercise__item-img' src={media} alt={title} />
        </div>
        <h2 className='exercise-info__title'>{title}</h2>
        <div className='exercise-info__description'>
            {description}
        </div>
        <div className='exercise-info__tags'>
            <h3 className='exercise-info__tags-group'>{group}</h3>
            <h3 className='exercise-info__tags-type'>{type}</h3>
        </div>
        <button className='exercise-info-btn' onClick={() => dispath(showExerciseInfoAction(false))}>
          <img src={backBtn} alt="Info" />
        </button>
    </section>  
  )
}

export default ExerciseInfo