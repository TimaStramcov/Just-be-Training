import { ADD_EXERCISE_ACTION, ADD_SET_ACTION } from "./constants";

export const addExerciseAction = ({date, id, title, description, media, type, group}) => ({
    type: ADD_EXERCISE_ACTION,
    payload: {date, id, title, description, media, type, group }
})

export const addSetAction = (index, dateId) => ({
    type: ADD_SET_ACTION,
    payload: {index, dateId}
})