let enterData:string[] = ["diamond", "stars", "elite"]
let constraint = 0

// todo of
for (let data of enterData) {
    console.log("looping with 'of':",data)
    enterData[1] = "frost"
    enterData.push("excel")
    if (constraint === 5) {
        break
    }

    constraint++
}

// todo forEach
enterData = ["pertama", "kedua", "ketiga"]
enterData.forEach((item) => {
    console.log("for each looping:",item)
})

// todo map
enterData.map((one) => {
    console.log("loop with map:", one)
})