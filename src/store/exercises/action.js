import { FILTER_EXERCISES_ACTION, INIT_EXERCISES_ACTION, SHOW_EXERSCISE_INFO_ACTION } from "./constants";
import url from '../../api/object.json';

export const initExercisesAction = () => ({
    type: INIT_EXERCISES_ACTION,
    payload: url
})

export const filterExercisesAction = (arr, filtration, type) => ({
    type: FILTER_EXERCISES_ACTION,
    payload: {arr, filtration, type}
})

export const showExerciseInfoAction = (boolean) => ({
    type: SHOW_EXERSCISE_INFO_ACTION,
    payload: boolean
})