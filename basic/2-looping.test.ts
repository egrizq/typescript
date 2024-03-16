describe("initialization counter", () => {
    let counter: number = 0
    for (let i=0; i<10; i++) {
        counter += i
    }
    
    it("should be counter equal to 45", () => {
        expect(counter).toBe(45)
        expect(typeof(counter)).toEqual("number")
    })
})