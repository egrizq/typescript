function myName(name: string, age: number): any {
    let all: any = ["my name is ", name, "and my age is ", age]
    return all
}

function addition(x: number, y:number): number {
    return x+y
}

// z? means it is optional
function multiple(x: number, y:number, z?:number): number {
    return x*y-(z || 0)
}

console.log(myName("rizq", 24))
console.log(addition(10,12))
console.log(multiple(10, 12))

// void mean the func didn't return anything
function vodito():void {
    console.log("bebas aja")
}
vodito()