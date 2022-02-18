import React, { useEffect, useState } from 'react'
import './Timer.scss'
import clock from '../../img/clock.svg'
import goTimer from './goTimer'
import sound from '../../sounds/end-timer.mp3'

function Timer() {
    const [hours, setHours] = useState() 
    const [minutes, setMinutes] = useState() 
    const [second, setSecond] = useState()
    const [interv, setInterv] = useState()
    const [start, setStart] = useState(false)
    const [play, setPlay] = useState()
    const audio = new Audio(sound);
    
    const numValid = (e, callback) => {
        if(!!+e.target.value || (e.target.value === '')) {
            console.log(e.target.value)
            callback(e.target.value)
        } else {
            callback('')
        }
    }

    useEffect(() => {
        if(play) {
            audio.play();
        }
    }, [play])

    const reset = () => {
        clearTimeout(interv)
        setStart(false)
        audio.currentTime = 0;
        audio.pause();
        setPlay(false)
        setHours('')
        setMinutes('')
        setSecond('')
    }

    return (
        <div className='timer'>
            <button className="timer__clock" onClick={() => 
                        goTimer(hours, minutes, second, interv, setHours, setMinutes, setSecond, setInterv, setStart, setPlay)
                }>
                <img className='timer__clock-btn' src={ clock } alt="clock" />
            </button>
            <div className="timer__time">
                <form action="">
                    <label htmlFor="hours">Часы</label>
                    <div></div>
                    <label htmlFor="minutes">Минуты</label>
                    <div></div>
                    <label htmlFor="second">Секунды</label>
                    <input id="hours" type="text" maxLength={2} placeholder='00'  value={hours} onChange={(e) => numValid(e, setHours)}/>
                    <div>:</div>
                    <input id="minutes" type="text" maxLength={2} placeholder='00'  value={minutes} onChange={(e) => numValid(e, setMinutes)}/>
                    <div>:</div>
                    <input id="second" type="text" maxLength={2} placeholder='00'  value={second} onChange={(e) => numValid(e, setSecond)}/>
                </form>
            </div>
            <div className={start ? 'timer__btn' : 'timer__btn timer__btn--start'}>
                <button className={play ? 'timer__btn-stop timer__btn-stop--invisible' : 'timer__btn-stop'} onClick={() => clearTimeout(interv)}>Пауза</button>
                <button className='timer__btn-reset' onClick={() => reset()}>Сброс</button>
            </div>
        </div>
  )
}

export default Timer