describe("object initialization", () => {
    interface Book {
        title: string;
        page: number;
        kind: string[];
    }

    const book: Book = {
        title: "hellow world!",
        page: 12,
        kind: ["code", "information"]
    }

    function myBook(insert: Book): Book {
        return ({
            title: insert.title,
            page: insert.page,
            kind: insert.kind
        })
    }

    const result = myBook(book)

    it("should be return myBook type", () => {
        expect(result).toBeDefined()
        expect(typeof result).toEqual("object")
        expect(Array.isArray(result.kind)).toBe(true)
    })

    it("should return myBook information", () => {
        expect(result.page).toEqual(12)
        expect(result.title).toEqual("hellow world!")
        expect(result.kind).toEqual(["code", "information"])
    })

    it("should return key object of myBook", () => {
        expect(result).toHaveProperty("title")
        expect(result).toHaveProperty("page")
        expect(result).toHaveProperty("kind")
    })
})