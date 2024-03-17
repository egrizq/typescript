describe("async await demonstration", () => {
    async function biodata(name:string, age: number): Promise<string> {
        return `my name is ${name} and my age is ${age} years old`
    }
    
    async function returnedData() {
        try {
            const myData = await biodata("rizq", 24)
            return myData
        } catch (error) {
            console.log(error)
        }
    }
    
    it("should be able to display my name and my age", async () => {
        const data = await returnedData()

        expect(data).toBeTruthy()
    })
})