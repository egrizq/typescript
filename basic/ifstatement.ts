let nama: string = "not rizq";
const allData:number[] = [1000, 1200, 5000, 7500]

if (nama === "rizq") {
    for (let i = 0; i<allData.length; i++)
    console.log(`he has ${allData[i]}`)
} else {
    nama = "ramadhan"
    for (const data of allData) {
        console.log(`${nama} has ${data}`)
    }
}