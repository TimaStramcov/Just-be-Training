const goTimer = (h = 0, m = 0, s = 0, interv, setHours, setMinutes, setSecond, setInterv, setStart, setPlay) => {
    const hoursInMs = h * 36e5;
    const minutesInMs = m * 6e4;
    const secondInMs = s * 1000;
    const date = +(new Date());
    const timeout = date + hoursInMs + minutesInMs + secondInMs + 1000;

    const run = () => {
        const remains = timeout - +(new Date());
        const msInHours = Math.floor((remains / (1000 * 60 * 60)) % 24);
        const msInMinutes = Math.floor((remains / (1000 * 60)) % 60);
        const msInSecond = Math.floor((remains / 1000) % 60);
        
        if (msInSecond >= 0) {
            setHours(msInHours);
            setMinutes(msInMinutes);
            setSecond(msInSecond)
        } else {
            setPlay(true)
            clearInterval(interv)
        }
    }

    const start = () => {
        setStart(true)
        setInterv(setInterval(() => run(), 1000))
    }

    if (s || m || h > 0) {
        start()
    }
    
}

export default goTimer