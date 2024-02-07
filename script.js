let day_night = document.getElementById("night");
let day_day = document.getElementById("day");

day_day.style.display = "none";

day_night.addEventListener('click', () => {
    document.documentElement.style.setProperty("--primary-color", "rgb(184,184,184,.5)");
    document.documentElement.style.setProperty("--secondary-color", "#000");
    document.documentElement.style.setProperty("--color-3", "#fff");
    document.documentElement.style.setProperty("--color-4", "rgb(0,0,0,.5)");
    document.documentElement.style.setProperty("--color-5", "#663DA6");
    day_night.style.display = "none";
    day_day.style.display = "unset";
});

day_day.addEventListener('click', () => {
    document.documentElement.style.setProperty("--primary-color", "#262B3F");
    document.documentElement.style.setProperty("--secondary-color", "#FFF");
    document.documentElement.style.setProperty("--color-3", "#1E2337");
    document.documentElement.style.setProperty("--color-4", "rgb(255,255,255,.5)");
    document.documentElement.style.setProperty("--color-5", "greenyellow");
    day_night.style.display = "unset";
    day_day.style.display = "none";
});

// battery
let active_battery = document.getElementById("active_battery");
let battery_icon = document.getElementById("battery_icon");
let battery_level = document.getElementById("battery_level");
let audio1 = new Audio('audio/Charging.mp3');
// audio.play();

navigator.getBattery().then(battery => {
    const battery_level_change = () => {
        battery_level.innerText = (battery.level * 100) + "%";
    }
    setInterval(battery_level_change, 1000);
    battery_level_change();

    battery_icon.value = battery.charging;
    // alert(battery_icon.value);

    battery.addEventListener('chargingchange', () => {
        switch (battery.charging) {
            case true:
                battery_icon.classList.remove('bi-battery-half');
                battery_icon.classList.add('bi-battery-charging');
                active_battery.classList.add('active_battery');
                battery_icon.style.color = "#fff";
                audio1.play();
                break;
            case false:
                battery_icon.classList.add('bi-battery-half');
                battery_icon.classList.remove('bi-battery-charging');
                active_battery.classList.remove('active_battery');
                battery_icon.style.color = "unset";
                break;
        }
    })
});

let wifi = document.getElementById("wifi");
const wifi_change = () => {
    if(navigator.onLine) {
        wifi.style.color = "var(--color-5)";
    } else {
        wifi.style.color = "";
    }
}
setInterval(wifi_change, 100);
wifi_change();


let img_change = document.getElementById('img_change');

const change_img_data = () => {
    setTimeout(() => {
        img_change.style.background = "url('images/pubg.jpeg') no-repeat center center/cover";
    }, 0); // Start immediately
    setTimeout(() => {
        img_change.style.background = "url('images/pubg1.jpeg') no-repeat center center/cover";
    }, 4000); // 4 seconds later
    setTimeout(() => {
        img_change.style.background = "url('images/pubg2.jpeg') no-repeat center center/cover";
    }, 8000); // 8 seconds later
}

setInterval(change_img_data, 12000); // 12 seconds interval (to accommodate all image changes)
change_img_data(); // Call the function initially



// playing game
let play = document.getElementById("play");
let video = document.getElementById("video");

play.addEventListener('click', () => {
    if (video.paused || video.currentTime <= 0) {
        video.play();
        video.style.display = "flex";
        img_change.style.display = "none";
        play.innerHTML = `<i class="bi bi-pause-fill"></i> Pause`;
    } else {
        video.paused();
        video.style.display = '';
        img_change.style.display = '';
        play.innerHTML = `<i class="bi bi-play-fill"></i> Play`;
    }
});

video.addEventListener('ended', () => {
    video.paused();
    video.style.display = '';
    img_change.style.display = '';
    play.innerHTML = `<i class="bi bi-play-fill"></i> Play`;
});

let index = 0;
let join_new = document.getElementsByClassName("join_new")[0];

function update() {
    setInterval(() => {
        // Clear the content of join_new before adding new elements
        join_new.innerHTML = "";

        // Access the correct index and avoid going out of bounds
        const dataIndex = index % JoinData.length;
        const {name, game, img, price} = JoinData[dataIndex];
        
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img src="${img}" alt="">
        <div class="content">
            <div class="price">
                <h5>${game}</h5>
                <span>Blackshark Now</span>
                <h6>${price}</h6>
            </div>
            <p>${name}</p>
        </div>`;
        
        // Append the newly created card
        join_new.appendChild(card);

        // Increment the index for the next iteration
        index++;
    }, 3000); // Adjust the interval as per your requirement
};

document.addEventListener('DOMContentLoaded', () => {
    update();
});
