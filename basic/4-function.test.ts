describe("function definition", () => {
    function returnString(number: number): string {
        return number.toString()
    }

    it("should return a string", () => {
        expect(returnString(10)).toBe("10")
        expect(typeof(returnString(20))).toBe("string")
    })

    function parseToInt(number: string): number {
        return parseInt(number)
    }

    it("should return a number", () => {
        expect(parseToInt("10")).toBe(10)
        expect(typeof(parseToInt("22"))).toBe("number")
    })
})