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

function flipLeftTriangle(n: number) {
    for (let k=0; k<n; k++) {
        let temp = []

        for (let j=1; j<=k; j++) {
            temp.push(" ")
        }

        for (let a=n; a>k; a--) {
            temp.push("*")
        }

        console.log(temp.join(" "))
    }
}

flipLeftTriangle(5)

/* 
[LOG]: "* * * * *" 
[LOG]: "  * * * *" 
[LOG]: "    * * *" 
[LOG]: "      * *" 
[LOG]: "        *" 
*/

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