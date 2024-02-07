function flipRightTriangle(n: number) {
    for (let i=n-1; i>=0; i--) {
        let data = []
        for (let j=i; j>=0; j--) {
            data.push("*")
        }
        console.log(data.join(''))
    }
}

flipRightTriangle(10)

/*
[LOG]: "*****" 
[LOG]: "****" 
[LOG]: "***" 
[LOG]: "**" 
[LOG]: "*"
*/