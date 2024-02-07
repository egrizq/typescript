function leftTriangle(n: number) {
    for (let i=1; i<=n; i++) {
        let temp = []

        for (let j=n-i; j>0; j--) {
            temp.push(" ")
        }

        for (let k=0; k<i; k++) {
            temp.push("*")
        }        

        console.log(temp.join(""))
    }
}

leftTriangle(5)

/* 
[LOG]: "    *" 
[LOG]: "   **" 
[LOG]: "  ***" 
[LOG]: " ****" 
[LOG]: "*****" 
*/