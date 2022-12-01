const clockTitle = document.querySelector(".js-clock");


function getDday() {
    const christmas = new Date("2022-12-25");
    const todayTime = new Date();
    
    const distance = christmas - todayTime;

    const dDay = String(Math.floor(distance / (1000*60*60*24))).padStart(2, "0");
    const dHours =String( Math.floor((distance / (1000*60*60)) % 24)).padStart(2,"0");
    const dMin = String(Math.floor((distance / (1000*60)) % 60)).padStart(2,"0");
    const dSec = String(Math.floor(distance / 1000 % 60)).padStart(2,"0");
    
    clockTitle.innerText = `${dDay}d ${dHours}h ${dMin}m ${dSec}s`;
}

getDday();
setInterval(getDday, 1000);