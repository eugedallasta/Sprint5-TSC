const url: string = "https://icanhazdadjoke.com/";
const urlWeather: string = "https://api.openweathermap.org/data/2.5/weather?id=3128760&appid=754064b723e0d23f4d918d569e6227af&units=metric";
const urlChuck: string = "https://api.chucknorris.io/jokes/random";
const streamJoke: any = document.querySelector(".joke p");
const button: any = document.getElementById("button");
const weather: any = document.getElementById("weather");
const icon: any = document.getElementById("icon");



//al presionar el botón, obtenemos otro chiste
button.addEventListener('click', getJoke);

async function getJoke():Promise<void> {
    const response = await fetch(url, { headers: { 'Accept': 'application/json' } });

    const data = await response.json();


    streamJoke.innerHTML = data.joke;

}
getJoke();

async function getChuckJoke():Promise<void> {
    const response = await fetch(urlChuck, { headers: { 'Accept': 'application/json' } });

    const data = await response.json();


    streamJoke.innerHTML = data.joke;

}
getChuckJoke();

//pinto la Api weather
async function getWeather():Promise<void> {
    const response = await fetch(urlWeather);

    const data = await response.json();

   
    weather.innerHTML = `<img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`;
    weather.innerHTML += `<h3><strong> | ${data.main.temp}  </strong></h3>`;

}
getWeather();

