//? Analog Clock

function setAnalog(){

  let currentDate = new Date();
  let second = currentDate.getSeconds();
  let minute = currentDate.getMinutes();
  let hour = currentDate.getHours();

  let secondAngle = second * 6;
  let minuteAngle = (minute * 6) + (secondAngle / 60);
  let hourAngle = (hour * 30) + (minuteAngle / 12);

  document.querySelector('[data-hour-hand]').style.setProperty('--rotation', hourAngle)
  document.querySelector('[data-minute-hand]').style.setProperty('--rotation', minuteAngle)
  document.querySelector('[data-second-hand]').style.setProperty('--rotation', secondAngle)

}

setAnalog()
setInterval(setAnalog, 1000);


//? Digital Clock

function setDigital(){

let currentDate = new Date()

second = currentDate.getSeconds()
minute = currentDate.getMinutes()
hour = currentDate.getHours()

hour = hour < 10 ? '0'+hour : hour;
minute = minute < 10 ? '0'+minute : minute;
second = second < 10 ? '0'+second : second;

midday = hour >= 12 ? 'PM' : 'AM'

hour = hour > 12 ? hour % 12 : hour;

document.querySelector('.digital').innerText = `${hour}:${minute}:${second} ${midday}`
}

setDigital()
setInterval(setDigital, 1000)