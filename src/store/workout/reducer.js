import { ADD_EXERCISE_ACTION, ADD_SET_ACTION } from "./constants"

const initialState = {
    date: [
            {
            id: "",
            title: "",
            description: "",
            media: "",
            type: "",
            group: "",
            sets: [
                {   
                    set: "",
                    reps: "",
                    weight: "",
                    rir: "",
                }
            ],
        },
    ]
}

export const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXERCISE_ACTION:
            const {date, id, title, description, media, type, group} = action.payload;
            // const uid = "id" + Math.random().toString(16).slice(2)
            const currentDateWorkList = state[date] || [];
            return {
                ...state,
                [date]: [
                    ...currentDateWorkList, {id, title, description, media, type, group},
                ]
            }
        case ADD_SET_ACTION:
            const { index, dateId } = action.payload;
            let currentWorkout = state[dateId];
            const currentExercise = state[dateId][index];
            const currentSets = state[dateId][index].sets || [];
            return {
                ...state,
                [dateId]: [
                    ...currentWorkout.map((el, i) => {
                        console.log('current value: ', currentExercise)
                        console.log('index: ', i)
                        if (i === index) {
                            return {
                                ...currentExercise,
                                sets: [
                                    ...currentSets,
                                    {
                                        set: currentSets.length + 1,
                                        reps: "",
                                        weight: "",
                                        rir: "",
                                    }
                                ]
                            }
                        } else {
                            console.log('not index: ', el)
                            return el
                        }
                    })
                ]
            }
        default: 
            return state
    }
}