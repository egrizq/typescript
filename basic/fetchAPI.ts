// fetching api
const api = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8fba757e84fe4783e2bb8ab93aa117c3"
fetch(api)
    .then(response => response.json())
    .then(weather => console.log(weather.main.temp))
    .catch(error => console.error(error))