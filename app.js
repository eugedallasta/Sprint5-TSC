"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://icanhazdadjoke.com/";
const urlWeather = "https://api.openweathermap.org/data/2.5/weather?id=3128760&appid=754064b723e0d23f4d918d569e6227af&units=metric";
const urlChuck = "https://geek-jokes.sameerkumar.website/api?format=json";
const streamJoke = document.querySelector(".joke p");
const button = document.getElementById("button");
const weather = document.getElementById("weather");
const icon = document.getElementById("icon");
const button3 = document.querySelector(".button3");
const button2 = document.querySelector(".button2");
const button1 = document.querySelector(".button1");
let reportJokes = [];
//Llamamos a la Api
const getJoke = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        /* capturamos respuesta de la API */
        const data = yield response.json();
        const joke = data.joke;
        return joke;
    }
    catch (error) {
        throw new Error(`Couldn't fetch joke ${error}`);
    }
});
//Al clickear el botón nos muestras chistes de 2 Apis diferentes
button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const rdm = Math.random(); //escoger aleatoriamente API de chistes
    if (rdm > 0.5) {
        streamJoke.innerHTML = yield getJoke(url);
    }
    else {
        streamJoke.innerHTML = yield getJoke(urlChuck);
    }
}));
//Pinto la Api weather
const getWeather = (urlWeather) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(urlWeather);
    const data = yield response.json();
    weather.innerHTML = `<img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`;
    weather.innerHTML += `<h3><strong> | ${Math.round(data.main.temp)} Cº </strong></h3>`;
});
getWeather(urlWeather);
//Puntuación del chiste
class Jokes {
    constructor(joke, score, date) {
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}
const d = new Date();
let dateText = d.toISOString();
button3.addEventListener('click', () => {
    reportJokes.push(new Jokes(streamJoke.innerHTML, 3, dateText));
    console.log(reportJokes);
});
button2.addEventListener('click', () => {
    reportJokes.push(new Jokes(streamJoke.innerHTML, 2, dateText));
    console.log(reportJokes);
});
button1.addEventListener('click', () => {
    reportJokes.push(new Jokes(streamJoke.innerHTML, 1, dateText));
    console.log(reportJokes);
});
