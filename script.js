function update(){
    let birthDate = new Date()
birthDate.setFullYear(2026, 4, 2)
birthDate.setHours(2)
birthDate.setMinutes(43)
birthDate.setSeconds(30)

let count = Date.UTC(2026, 4, 2)
let now = Date.now()
let counting = now - count;
let days = Math.floor(counting/86400000); 

document.getElementById("days").innerHTML = days;

// Day fixed 

let hour = Math.floor((now - count)/(1000*60*60));

document.getElementById("hour").innerHTML = hour;

// hour fixed 

let minutes = Math.floor((now-count) / (1000*60));

document.getElementById("minute").innerHTML = minutes;

// minutes fixed 

let second = Math.floor((now-count) / (1000));

document.getElementById("second").innerHTML = second;


// second fixed
}

update();
setInterval (update , 1000);
