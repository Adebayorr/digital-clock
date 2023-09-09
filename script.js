const getTimeAndDate = () => {
    const time = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    document.querySelector('.day').textContent = days[time.getDay()]
    document.querySelector('.time').textContent = Date.now()

}

setInterval(getTimeAndDate, 1000)
