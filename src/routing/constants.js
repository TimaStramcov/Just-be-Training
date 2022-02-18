import Workout from '../page/workout/Workout'
import { MAIN_ROUTE, TIMER_ROUTE } from './path'

export const ROUTES = [
    {
        path: MAIN_ROUTE,
        component: <Workout />,
    },
    {
        path: TIMER_ROUTE,
        component: <></>,
    }
]