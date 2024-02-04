// todo init the promise
async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("fetching success!")
        }, 1000); // wait for 1 sec
    })
};  

// todo execute the promise/ func to handle async operation
async function processAsync() {
    try {
        console.log("Start fetching data...")
        
        // todo run other program/ fetch api
        const api = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8fba757e84fe4783e2bb8ab93aa117c3"
        fetch(api)
            .then(response => response.json())
            .then(weather => console.log(weather.main.temp))
            .catch(error => console.error(error))
        
        // call the promise
        const result = await fetchData()
        console.log(`Status: ${result}`)
    } catch (error) {
        console.error(`error: ${error}`)
    } finally {
        console.log("Fetching is done.")
    }
}

// call the async program
processAsync()