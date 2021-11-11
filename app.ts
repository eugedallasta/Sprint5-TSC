const url: string = "https://icanhazdadjoke.com/";
const urlWeather: string = "https://api.openweathermap.org/data/2.5/weather?id=3128760&appid=754064b723e0d23f4d918d569e6227af&units=metric";
const urlChuck: string = "https://api.chucknorris.io/jokes/random";
const streamJoke: any = document.querySelector(".joke p");
const button: any = document.getElementById("button");
const weather: any = document.getElementById("weather");
const icon: any = document.getElementById("icon");
const button3: any = document.querySelector(".button3");
const button2: any = document.querySelector(".button2");
const button1: any = document.querySelector(".button1");
let reportJokes: any[] = [];


//Llamamos a la Api
const getJoke = async (url: string): Promise<string> => {
  try {
    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    /* capturamos respuesta de la API */
    const data = await response.json();
    const joke: string = data.joke;
    return joke;
  } catch (error) {
    throw new Error(`Couldn't fetch joke ${error}`);
  }
};
//Al clickear el botón nos muestras chistes de 2 Apis diferentes
button.addEventListener("click", async () => {
    const rdm: number = Math.random(); //escoger aleatoriamente API de chistes
    if (rdm > 0.5) {
        streamJoke.innerHTML = await getJoke(url);
    } else {
        streamJoke.innerHTML = await getJoke(urlChuck);
    }
})

//Pinto la Api weather
    const getWeather = async  (urlWeather: string): Promise<any> => {
        const response = await fetch(urlWeather);

        const data = await response.json();
   
        weather.innerHTML = `<img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`;
        weather.innerHTML += `<h3><strong> | ${data.main.temp}  </strong></h3>`;

    }
getWeather(urlWeather);

//Puntuación del chiste

interface reportAcudits {
     joke: string;
     score: number;
     date: Date;
}
 
const jokeScore = ()=>{}



button3.addEventListener("click",jokeScore());
button2.addEventListener("click", jokeScore());
button1.addEventListener("click", jokeScore());
