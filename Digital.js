function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const date = now.toDateString();

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('date').textContent = date;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display time immediately

let alarmTime = null;

function setAlarm() {
    const alarmInput = document.getElementById('alarmTime').value;
    if (alarmInput) {
        alarmTime = new Date();
        const [hours, minutes] = alarmInput.split(':');
        alarmTime.setHours(hours);
        alarmTime.setMinutes(minutes);
        alarmTime.setSeconds(0);

        document.getElementById('alarmStatus').textContent = `Alarm set for ${alarmInput}`;
    }
}

setInterval(() => {
    if (alarmTime && new Date().getTime() >= alarmTime.getTime()) {
        alert('Alarm ringing!');
        alarmTime = null; // Reset the alarm
        document.getElementById('alarmStatus').textContent = '';
    }
}, 1000);
