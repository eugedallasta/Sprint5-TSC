const url: string = "https://icanhazdadjoke.com/";
const urlWeather: string = "https://api.openweathermap.org/data/2.5/weather?id=3128760&appid=754064b723e0d23f4d918d569e6227af&units=metric";
const urlChuck: string = "https://geek-jokes.sameerkumar.website/api?format=json";
const streamJoke: HTMLElement = document.querySelector(".joke p") as HTMLElement;
const button: HTMLButtonElement = document.getElementById("button") as HTMLButtonElement;
const weather: HTMLElement = document.getElementById("weather") as HTMLElement;
const icon: HTMLElement = document.getElementById("icon") as HTMLElement;
const button3: HTMLButtonElement = document.querySelector(".button3") as HTMLButtonElement;
const button2: HTMLButtonElement = document.querySelector(".button2") as HTMLButtonElement;
const button1: HTMLButtonElement = document.querySelector(".button1") as HTMLButtonElement;
let reportJokes: Jokes[] = [];


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
        weather.innerHTML += `<h3><strong> | ${Math.round(data.main.temp)} Cº </strong></h3>`;

    }
getWeather(urlWeather)

//Puntuación del chiste


class Jokes{
  joke: string;
  score: number;
  date:string;
  constructor(joke: string, score: number, date:string){
    this.joke = joke;
    this.score = score;
    this.date = date;
  }
}
const d = new Date();
let dateText = d.toISOString();

button3.addEventListener('click', () => {
  reportJokes.push(new Jokes(streamJoke.innerHTML, 3,dateText));
  console.log(reportJokes);
});
button2.addEventListener('click', () => {
  reportJokes.push(new Jokes(streamJoke.innerHTML, 2,dateText));
  console.log(reportJokes);
});
button1.addEventListener('click', () => {
  reportJokes.push(new Jokes(streamJoke.innerHTML, 1,dateText));
  console.log(reportJokes);
});



