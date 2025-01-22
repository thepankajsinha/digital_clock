function updateTime(){

    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let amorpm = document.getElementById('am-pm');

    if(hours >= 12){
        amorpm.innerHTML = "PM";
    }
    else
    {
        amorpm.innerHTML = "AM";
    }

    if(hours > 12){
        hours = hours - 12;
    }

    document.getElementById('hrs').innerHTML = hours;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
}

setInterval(updateTime, 1000);
