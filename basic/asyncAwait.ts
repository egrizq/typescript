/* 
A Promise is an object in JavaScript and TypeScript that represents the eventual completion (or failure) 
of an asynchronous operation. It represents a value that will be available at some point in the future.

Promises have three states:
1. Pending: The operation is still ongoing.
2. Fulfilled: The operation completed successfully, and the result is available.
3. Rejected: The operation failed, and an error reason is available.
*/

// todo init the promise
async function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        const status = true 
        setTimeout(() => {
            if (status) {
                resolve("fetching success!") // resolve if the promise is fullfied
            } else {
                reject("fetching failed") // reject if the promise is failed
            }
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
            .then(weather => console.log(weather))
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