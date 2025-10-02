function showTime() {
    const clockElement = document.getElementById('digitalClock');
    if (!clockElement) return;

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

   
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 

   
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${period}`;
    clockElement.textContent = timeString;
}


setInterval(showTime, 1000);


showTime();