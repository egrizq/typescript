/*
 callback function is a function that is passed as an argument to another function, 
 and it is executed after the completion of a specific task or event. 
 
 In the context of asynchronous programming, callbacks are often used to handle the results of asynchronous operations.

*/

// define a callback function type(string) and return a void
type MyCallback = (result:string) => void;

// function that takes callback as parameter
function performAsync(callback: MyCallback):void {
    // simulating async operation
    setTimeout(() => {
        const data = "result of async operation"
        // todo invoke callback result
        callback(data);
    }, 1000);
}

// callback function to be passed to performAsync
function handleCallback(result: string): void {
    console.log(`handling the result: ${result}`)
}

// call the function with callback
performAsync(handleCallback)