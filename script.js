const clock = document.getElementById("clock");
const calendar = document.getElementById("calendar");
const isSecond = false;

function updateTime() {
    const now = new Date();

    const giorni_della_settimana = ["domenica","lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
    const mesi_dell_anno = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const date = now.getDate();
    const day = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();

    let clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const calendarStr = giorni_della_settimana[day] + " " + date.toString().padStart(2, '0') + " " + mesi_dell_anno[month] + " " + year.toString();

    if (isSecond){
        clockStr += `:${seconds.toString().padStart(2, '0')}`;
    }


    clock.innerText = clockStr;
    calendar.innerText = calendarStr;
}

updateTime();
setInterval(updateTime, 1000);

