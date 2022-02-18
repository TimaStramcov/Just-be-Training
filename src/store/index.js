import { combineReducers, createStore } from 'redux'
import { exercisesReducer } from './exercises/reducer'
import { workoutReducer } from './workout/reducer'


const rootReducer = combineReducers({
    workout: workoutReducer,
    exercises: exercisesReducer,
})
export const store = createStore(rootReducer)