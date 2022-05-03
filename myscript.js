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