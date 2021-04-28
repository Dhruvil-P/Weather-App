// Declaring variables
const search_icon = document.querySelector(".search_icon");
const search_tab = document.querySelector("input");

let temp = document.querySelector(".temperature");
let city = document.querySelector(".city");
let date = document.querySelector(".day");
let Icons = document.querySelector(".icons");
let weather_el = document.querySelector(".weather_status");

let humidity = document.querySelector(".humidity .value");
let speed = document.querySelector(".speed .value");
let visibilty = document.querySelector(".visibility .value");
let pressure = document.querySelector(".pressure .value");

let low = document.querySelector(".low .value");
let high = document.querySelector(".high .value");

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");

let error_box = document.querySelector(".error-cont");
let error_message = document.querySelector(".error-message");
let error_code = document.querySelector(".error-code");
let button = document.querySelector(".button");

//Working of search button and tab 
search_tab.addEventListener('keypress', (event)=>{
    if (event.keyCode == 13) {
        getResults(search_tab.value);
    }
});

search_icon.addEventListener('click', ()=> {
    getResults(search_tab.value);
});

// API Fetch
function getResults(city_name){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&APPID=2ce814725dc871dc17f7d55cda48a4cd&cnt=7`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

// Displaying Content
function displayResults(weather){
    // Check for errors
    // Working of popup box
    code = weather.cod;
    switch (code) {
        case "404":
            document.querySelector(".cont1").classList.add("blur");
            document.querySelector(".cont2").classList.add("blur");
            error_box.classList.add("visible");

            error_code.innerText = `Error!`;
            error_message.innerText = `Invalid name of the city`;

            // Hiding of error box
            button.addEventListener("click", () => {
                error_box.classList.remove("visible");
                document.querySelector(".cont1").classList.remove("blur");
                document.querySelector(".cont2").classList.remove("blur");
            })
            break;

        case "400":
            document.querySelector(".cont1").classList.add("blur");
            document.querySelector(".cont2").classList.add("blur");
            error_box.classList.add("visible");

            error_code.innerText = `Error!`;
            error_message.innerText =  `City name not found`;

            // Hiding of error box
            button.addEventListener("click", () => {
                error_box.classList.remove("visible");
                document.querySelector(".cont1").classList.remove("blur");
                document.querySelector(".cont2").classList.remove("blur");
            })
            break;
    
        default:
            break;
    }
    
     // Change of background according to time and changing text color according to day/night
     let icon_code = weather.weather[0].icon;

     if (icon_code == '01n' || icon_code == '02n' || icon_code == '03n' || icon_code == '04n'
      || icon_code == '09n' || icon_code == '10n' || icon_code == '11n'
      || icon_code == '13n' || icon_code == '50n') {
         document.body.style.backgroundImage = 'url("../images/Wallpaper-Night.jpg")';

         temp.style.color = 'rgba(255, 255, 255, 0.767)';
         city.style.color = 'rgba(255, 255, 255, 0.767)';
         date.style.color = 'rgba(255, 255, 255, 0.767)';
         weather_el.style.color = 'rgba(255, 255, 255, 0.767)';

         humidity.style.color = 'rgba(255, 255, 255, 0.767)';
         speed.style.color = 'rgba(255, 255, 255, 0.767)';
         visibilty.style.color = 'rgba(255, 255, 255, 0.767)';
         pressure.style.color = 'rgba(255, 255, 255, 0.767)';

         low.style.color = 'rgba(255, 255, 255, 0.767)';
         high.style.color = 'rgba(255, 255, 255, 0.767)';

         line1.style.backgroundColor = 'rgba(255, 255, 255, 0.767)';
         line2.style.backgroundColor = 'rgba(255, 255, 255, 0.767)';
     }else{
         document.body.style.backgroundImage = 'url("../images/Wallpaper-Day.jpg")';

         temp.style.color = 'rgba(0, 0, 0, 0.534)';
         city.style.color = 'rgba(0, 0, 0, 0.534)';
         date.style.color = 'rgba(0, 0, 0, 0.534)';
         weather_el.style.color = 'rgba(0, 0, 0, 0.534)';

         humidity.style.color = 'rgba(0, 0, 0, 0.534)';
         speed.style.color = 'rgba(0, 0, 0, 0.534)';
         visibilty.style.color = 'rgba(0, 0, 0, 0.534)';
         pressure.style.color = 'rgba(0, 0, 0, 0.534)';

         low.style.color = 'rgba(255, 255, 255, 0.767)';
         high.style.color = 'rgba(255, 255, 255, 0.767)';

         line1.style.backgroundColor = 'rgba(0, 0, 0, 0.534)';
         line2.style.backgroundColor = 'rgba(0, 0, 0, 0.534)';
     }

    // Temperature display
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
    
    // City display
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    // Day display
    let now = new Date();
    date.innerText = dateBuilder(now);

    // Displaying Icons
    const WeatherIcon = weather.weather[0].icon;
    switch (WeatherIcon) {
        case "01d":
            document.querySelector(".icons").innerHTML = "<img src='./animated/day.svg'>";
            break;
    
        case "01n":
            document.querySelector(".icons").innerHTML = "<img src='./animated/night.svg'>";
            break;

        case "02d":
            document.querySelector(".icons").innerHTML = "<img src='./animated/cloudy-day-1.svg'>";
            break;
            
        case "02n":
            document.querySelector(".icons").innerHTML = "<img src='./animated/cloudy-night-1.svg'>";
            break;

        case "03d":
            document.querySelector(".icons").innerHTML = "<img src='./animated/cloudy-day-2.svg'>";
            break;

        case "03n":
            document.querySelector(".icons").innerHTML = "<img src='./animated/cloudy-night-2.svg'>";
            break;

        case "04d":
            document.querySelector(".icons").innerHTML = "<img src='./animated/cloudy-day-3.svg'>";
            break;

        case "04n":
            document.querySelector(".icons").innerHTML = "<img src='./animated/cloudy-night-3.svg'>";
            break;
            
            case "02d":

        case "09d" || "09n":
            document.querySelector(".icons").innerHTML = "<img src='./animated/rainy-5.svg'>";
            break;
            
        case "10d" || "10n":
            document.querySelector(".icons").innerHTML = "<img src='./animated/rainy-6.svg'>";
            break;

        case "11d" || "11n":
            document.querySelector(".icons").innerHTML = "<img src='./animated/thunder.svg'>";
            break;

        case "13d" || "13n":
            document.querySelector(".icons").innerHTML = "<img src='./animated/snowy-6.svg'>";
            break;

        case "50d" || "50n":
            document.querySelector(".icons").innerHTML = "<img src='http://openweathermap.org/img/wn/50d@2x.png'>";
            break;

        default:
            break;
    }

    // Weather display
    weather_el.innerText = `${weather.weather[0].main}`;

    // Humidity display
    humidity.innerText = `Humidity : ${weather.main.humidity}%`;

    // Speed display
    speed.innerText = `Wind Speed : ${weather.wind.speed} km/hr`;

    // Visibility display
    const Visibility_km = weather.visibility/1000;
    visibilty.innerText = `Visibility : ${Visibility_km} km`;

    // Visibility Display
    const pressure_pa = weather.main.pressure/100;

    pressure.innerText = `Pressure : ${pressure_pa} Pa`;

    // Lowest Temperature display
    low.innerText = `Lowest expected temperature: ${Math.round(weather.main.temp_min)}°C`;

    // Highest temperature display
    high.innerText = `Highest expected temperature: ${Math.round(weather.main.temp_max)}°C`;
}

// Getting current day, date, month and year
function dateBuilder(d){
    let months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}