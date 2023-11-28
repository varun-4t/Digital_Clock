//Clock Section 
document.getElementById("alarmcontainer").style.display="none";
document.getElementById("timerContainer").style.display="none";
    

let c = document.getElementsByClassName("nav-item")[0].addEventListener("click", clock);
let clockElement = document.getElementById("clock");

function clock() {
    if (clockElement.style.display === 'none') {
        clockElement.style.display = 'flex'
    } else {
        clockElement.style.display = 'none'
    }

    setInterval(() => {
        date = new Date();
        hrs = date.getHours();
        min = date.getMinutes()
        sec = date.getSeconds()

        if (hrs > 12) {
            hrs = hrs - 12
            hrs = hrs < 10 ? "0" + hrs : hrs;
        }

        min = min < 10 ? "0" + min : min;

        content = `<span>${hrs}</span><span>:${min}</span><span>:${sec}</span>`

        clockElement.innerHTML = content;
        console.log(hrs + ":" + min + ":" + sec);
    }, 1000);
}




// Timer Section
let t = document.getElementsByClassName('nav-item')[1];
let d2 = document.getElementById("timerContainer");

document.getElementById("clock").style.display="none"
document.getElementById("alarmcontainer").style.display="none"
    
function dis() {
    if (d2.style.display === "none") {
        d2.style.display = "flex";
    } else {
        d2.style.display = "none";
    }
}

t.addEventListener("click", dis);

let clk;
document.getElementById("timer").addEventListener('click', startTimer);
document.getElementById("Stop").addEventListener('click', stop);
document.getElementById("Resume").addEventListener('click', resume);
document.getElementById("Reset").addEventListener('click', reset);

let h = 0;
let m = 0;
let s = 1;

function startTimer() {
    clk = setInterval(seconds, 1000);
}

function seconds() {
    s = s < 10 ? "0" + s : s;
    sec.innerHTML = `${s++}`;
    if (s === 60) {
        s = 0;
        m++;
        m = m < 10 ? "0" + m : m;
        min.innerHTML = `${m}`;

        if (m === 60) {
            m = 0;
            min.innerHTML = `${m}`;
            h++;
            h = h < 10 ? "0" + h : h;
            hrs.innerHTML = `${h}`;

            if (h === 24) {
                h = 0;
                hrs.innerHTML = `${h}`;
            }
        }
    }
}

function stop() {
    clearInterval(clk);
}

function resume() {
    startTimer();
}

function reset() {
    h = 0;
    m = 0;
    s = 0;
    hrs.innerHTML = h.toString().padStart(2, "0");
    min.innerHTML = m.toString().padStart(2, "0");
    sec.innerHTML = s.toString().padStart(2, "0");
    stop();
}



//Alarm Section
view=document.querySelector(".view-time");
document.getElementsByClassName("nav-item")[2].addEventListener('click', function () {

    setInterval(() => {
        date = new Date();
        hrs = date.getHours();
        min = date.getMinutes()
        sec = date.getSeconds()

        if (hrs > 12) {
            hrs = hrs - 12
            hrs = hrs < 10 ? "0" + hrs : hrs;
        }

        min = min < 10 ? "0" + min : min;

        content = `<span>${hrs}</span><span>:${min}</span><span>:${sec}</span>`

        view.innerHTML = content;
        console.log(hrs + ":" + min + ":" + sec);
    }, 1000);


    document.getElementById("clock").style.display="none"
    document.getElementById("timerContainer").style.display="none"
    
    if(document.getElementById("alarmcontainer").style.display==="none"){
    document.getElementById("alarmcontainer").style.display='flex';
        }else{
    document.getElementById("alarmcontainer").style.display='none';
    }

const selectMenu = document.querySelectorAll("select");
const alarmBtn = document.querySelector(".alarm-btn");
const ringtone = new Audio("audio/alarm.mp3");
let isAlarmSet;

for (let i = 12; i > 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}" class="hours">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i > 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}" class="minutes">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
  ampm = i === 1 ? "AM" : "PM";
  let option = `<option value="${ampm}" class="ampm">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function alarm() {
  let setAlarm = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

  if (selectMenu[0].value === 'Hrs' || selectMenu[1].value === 'Min' || selectMenu[2].value === 'AM/PM') {
    alert("Please enter valid details");
    return;
  }

  console.log(setAlarm);

  const intervalId = setInterval(() => {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const ampm = currentHours < 12 ? 'AM' : 'PM';

    let formattedHours = currentHours > 12 ? currentHours - 12 : (currentHours === 0 ? 12 : currentHours);
    formattedHours = formattedHours < 10 ? "0" + formattedHours : formattedHours;
    const formattedMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

    const currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    console.log(currentTime);

    if (currentTime === setAlarm && isAlarmSet) {
      selectMenu.forEach(select => select.classList.add("ring"));
      alarmBtn.innerHTML = "Clear Alarm";
      ringtone.play();
      ringtone.loop = true;
      isAlarmSet = false;
    }
  }, 1000);

  alarmBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    ringtone.pause();
    selectMenu.forEach(select => select.classList.remove("ring"));
    alarmBtn.innerHTML = isAlarmSet ? "Set Alarm" : "Clear Alarm";
    isAlarmSet = !isAlarmSet;
  });

  isAlarmSet = true;
}

alarmBtn.addEventListener('click', alarm);
  });


  