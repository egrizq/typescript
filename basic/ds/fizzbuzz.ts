/* 
412. FIZZ BUZZ

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

*/


function fizzBuzz(n: number):void {
    let temp:any = []
    let val = ""
    
    for (let i=1; i < n; i++) {
        
        if (i%3 === 0 && i%5 === 0) {
            val = "FizzBuzz"
        } else if (i%3 === 0) {
            val = "Fizz"
        } else if (i%5 === 0) {
            val = "Buzz"
        } else {
            val = i.toString()
        }
        temp.push(val)
    }

    return temp
}

console.log(fizzBuzz(3))