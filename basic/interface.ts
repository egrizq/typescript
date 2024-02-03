// todo define an interface for data object
interface Data {
    place: string;
    population: number;
    gender: boolean;
}

// todo init data
const tempat: Data = {
    place: "bekasi",
    population: 24,
    gender: true
}

// printing the data
function place(tempat:Data) {
    console.log(`${tempat.place} has ${tempat.population} population and a city: ${tempat.gender}`)
}

place(tempat)
