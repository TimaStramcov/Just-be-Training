import React, { useEffect, useState } from 'react';
import './ListExercise.scss';
import addBtn from '../../img/btn-add.svg';
import infoBtn from '../../img/info.svg';
import press from '../../img/press.jpeg';
import { useDispatch } from 'react-redux';
import { addExerciseAction } from '../../store/workout/action';
import ExerciseInfo from '../exersiceInfo/ExerciseInfo';
import { getDateId } from '../../utils/getDateId';
import FilterList from '../filterList/FilterList';
import { useSelector } from 'react-redux';
import { ExersicesSelector } from '../../store/exercises/selector';
import { filterExercisesAction, initExercisesAction, showExerciseInfoAction } from '../../store/exercises/action';

function ListExercise() {
    const [info, setInfo] = useState()
    const [search, setSearch] = useState()
    const dispath = useDispatch()
    const date = getDateId(new Date())
    const exercises = useSelector(ExersicesSelector)

    useEffect(() => {
        dispath(filterExercisesAction(exercises.exerciseList, search, 'title'))
    }, [search])

    useEffect(() => {
        dispath(initExercisesAction())
    }, [])

    const addExerciseToList = (infoExercise) => {
        dispath(addExerciseAction(infoExercise))
    }

    const getInfo = (info) => {
        setInfo(info)
        dispath(showExerciseInfoAction(true))
    }

    return (
        <>  
            <div className='search'>
                <input type="text" placeholder='Поиск'  onChange={(e) => setSearch(e.target.value) }/>
            </div>
            <div className='list-exercise__wrapper'>
                <FilterList/>
                {exercises.showInfoExercise 
                    ? 
                    <ExerciseInfo title={info.title} description={info.description} media={press} type={info.type} group={info.group}/>
                    : 
                    <ul className='list-exercise'>
                        {
                        (exercises.filterExerciseList.length > 0 ? exercises.filterExerciseList : exercises.exerciseList).map(({id, title, description, media, type, group}) => 
                        <li key={id} className='list-exercise__item'>
                            <img className='list-exercise__item-img' src={press} alt={title} />
                            <h3 className='list-exercise__item-type'>{type}</h3>
                            <h2 className='list-exercise__item-title'>{title}</h2>
                            <div className='list-exercise__btn'>
                                <button className='list-exercise__btn-info' onClick={() => getInfo({title, description, media, type, group})}>
                                    <img src={infoBtn} alt="Info" />
                                </button>
                                <button className='list-exercise__btn-add' onClick={ () => addExerciseToList({date, id, title, description, media, type, group})}>
                                    <img src={addBtn} alt="Add" />
                                </button>
                            </div>
                        </li>
                        )
                        }
                    </ul>
                }
            </div>
        </>
    )
}

export default ListExercise