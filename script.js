


const cityName = localStorage.getItem('city');




const city = document.getElementById('city');
city.innerText = cityName

const server = async () => {


    const Server_Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=afbc99db955a3347823752de85e7e55a&units=metric`;


    const response = await fetch(Server_Url);
    const data = await response.json();

    return dataDetail(data);


}





const dataDetail = (data) => {

    if (!data.weather || data.weather.length === 0) {
        console.log("Weather data not available");

        const error = document.getElementById("error-msg");
        error.style.display = "block";

        const none = document.getElementById("rainDetail");
        none.style.display = "none"

        return;
    }






    
  

    const country = document.getElementById('country');
    const temp = document.getElementById('temp');
    const icon = document.getElementById('weathericon');
    const main = document.getElementById('weat-main');
    const desc = document.getElementById('weat-desc');
    const feel = document.getElementById('weat-feel');
    const vis = document.getElementById('visibility');
    const speed = document.getElementById('wind-speed');

    const dashboard = document.getElementById("weather-dashboard");

    const weathIcon = data.weather[0].icon;
  

    const iconLink = `https://openweathermap.org/img/wn/${weathIcon}@2x.png`

  

    country.innerText = data.sys.country;
    temp.innerText = data.main.temp;
    main.innerText = data.weather[0].main;
    desc.innerText = data.weather[0].description;
    speed.innerText = data.wind.speed;
    feel.innerText = data.main.feels_like;
    vis.innerText = data.visibility;
 
    icon.src = "https://openweathermap.org/img/wn/${data.weather[0].icon}"

    icon.src = iconLink
    

    if (data.weather[0].main === "Mist") {

        dashboard.style.backgroundImage = "url('mist1.gif')"
        dashboard.style.backgroundSize = "100% 100%";

    } else if (data.weather[0].main === "Thunderstorm") {

        dashboard.style.backgroundImage = "url('thunder.jpg')"
        dashboard.style.backgroundSize = "100% 100%";

    } else if (data.weather[0].main === "Rain") {

        dashboard.style.backgroundImage = "url('rain.webp')"
        dashboard.style.backgroundSize = "100% 100%";

    }
    else if (data.weather[0].main === "Snow") {

        dashboard.style.backgroundImage = "url('Snow')"
        dashboard.style.background = "linear-gradient(rgb(37 34 34),rgb(0 0 0 / 30%)),url(photo-1682687220499-d9c06b872eee.avif)"
        dashboard.style.backgroundSize = "100% 100%";

    } else if (data.weather[0].main === "Clear") {

        dashboard.style.backgroundImage = "url('clearsky1.jpg')"
        dashboard.style.backgroundSize = "100% 100%";

    }
    else if (data.weather[0].main === "Clouds") {

        dashboard.style.backgroundSize = "100% 100%";
        dashboard.style.background = "linear-gradient(rgb(37 34 34),rgb(0 0 0 / 30%)),url(brokencloud.jpg)"
        dashboard.style.backgroundRepeat = "no-repeat";


    }
    else if (data.weather[0].main === "Drizzle") {

        dashboard.style.backgroundImage = "url('drizzle.avif')"
        dashboard.style.backgroundSize = "100% 100%";


    }
    else if (data.weather[0].main === "Smoke") {

        dashboard.style.backgroundImage = "url('smoke.webp')"
        dashboard.style.backgroundSize = "100% 100%";

    }
    else if (data.weather[0].main === "Haze") {

        dashboard.style.backgroundImage = "url('haze.jpg')"
        dashboard.style.backgroundSize = "100% 100%";

    }
    else if (data.weather[0].main === "Fog") {

        dashboard.style.backgroundImage = "url('fog.jpg')"
        dashboard.style.backgroundSize = "100% 100%";

    }





    return data;
}

server();



const display = document.getElementById("open");

const smNav = document.getElementById('sm-nav');

display.addEventListener('click', (e) => {
    smNav.style.display = "block";
    smNav.style.transition = " 2.1s ease-in";

    

    console.log('adasd')
})
const close = document.getElementById("close");
close.addEventListener('click', (e) => {

    smNav.style.display = "none";


})
