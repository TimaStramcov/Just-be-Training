import { FILTER_EXERCISES_ACTION, INIT_EXERCISES_ACTION, SHOW_EXERSCISE_INFO_ACTION } from "./constants"

const initialState = {
    exerciseList: [],
    filterExerciseList: [],
    showInfoExercise: false,
}

export const exercisesReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_EXERCISES_ACTION:
            return {
                ...state,
                exerciseList: [...action.payload],
                filterExerciseList: [],
            }
        case FILTER_EXERCISES_ACTION:
            const {arr, filtration, type} = action.payload
            return {
                ...state,
                filterExerciseList: [...arr.filter(elem => elem[type].indexOf(filtration) !== -1)],
                showInfoExercise: false,
            }
        case SHOW_EXERSCISE_INFO_ACTION:
            return {
                ...state,
                showInfoExercise: action.payload,
            }
        default: 
            return state
    }
}