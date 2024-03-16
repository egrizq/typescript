describe('string reverse words', () => {
    function reverseWords(str: string): string {
        let result: string[] = []
        str.split(" ").map(word => {
            result.push(word.split("").reverse().join(""))
        })
        
        return result.join(" ")
    }

    it("it should be reverse each word before whitespace", () => {
        expect(reverseWords("This is an example!")).toEqual("sihT si na !elpmaxe")
        expect(reverseWords("double  spaces")).toEqual("elbuod  secaps")
    })
})