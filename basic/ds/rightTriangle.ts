function rightTriangle(n: number) {
    for (let i=1; i<=n; i++) {
        let data = []
        for (let j=0; j<i; j++) {
            data.push("*")
        }
        console.log(data.join(''))
    }
}

rightTriangle(5)

/*
[LOG]: "*" 
[LOG]: "**" 
[LOG]: "***" 
[LOG]: "****" 
[LOG]: "*****"
*/