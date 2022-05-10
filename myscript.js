let day_and_night = 0;

function change_mode() {
    if (day_and_night % 2 == 0) {
        document.getElementById('change-mode').classList.remove('bi-brightness-high-fill');
        document.getElementById('change-mode').classList.add('bi-moon-stars-fill');
        document.body.style.backgroundColor = "grey";
        day_and_night++;
    } else {
        document.getElementById('change-mode').classList.remove('bi-moon-stars-fill');
        document.getElementById('change-mode').classList.add('bi-brightness-high-fill');
        document.body.style.backgroundColor = "rgb(207, 210, 213)";
        day_and_night--;
    }
}

function loadCoupon(){
    document.getElementById("coupon").style.display="block"
}

function closeCoupon(){
    document.getElementById("coupon").style.display="none"
}


navigator.geolocation.getCurrentPosition(position);

async function position(data) {
    const display = document.getElementsByClassName('temp-display');
    const logo = document.getElementById('imG');
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${data.coords.latitude}&lon=${data.coords.longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    let response = await fetch(`${url}`);
    let info = await response.json();
    // json() The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON
    console.log(info);
    display[0].innerHTML = info.list[0].temp.day;
    var iconcode = info.list[0].weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    logo.src = iconurl;
    display[1].innerHTML = info.city.name;
}