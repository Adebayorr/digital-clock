const getTimeAndDate = () => {
    const time = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday']
    document.querySelector('.day').textContent = days[time.getDay()]
    document.querySelector('.hour').textContent = time.getHours() < 10 ? "0"+ (time.getHours() - 1) : time.getHours()
    document.querySelector('.minutes').textContent = time.getMinutes() < 10 ? "0"+ time.getMinutes() : time.getMinutes()
    document.querySelector('.seconds').textContent = time.getSeconds() < 10 ? "0"+ time.getSeconds() : time.getSeconds()
    if (time.getHours() > 12) {
        document.querySelector('.hour').textContent = '0' + (time.getHours() - 12)
    }

}

setInterval(getTimeAndDate, 1000)