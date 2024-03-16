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

describe('object and array manipulation', () => { 
    interface Saving {
        name: string;
        money: number;
    }

    let savingData: Saving[] = []

    it("should add data to savingData", () => {
        const syraSaving: Saving = {
            name: "syra",
            money: 12000
        }
        savingData.push(syraSaving)

        expect(savingData.length).toEqual(1)
        expect(typeof savingData).toMatchObject<Saving>
        expect(savingData[0]).toEqual({name: "syra", money: 12000})
        expect(savingData.map(item => item.name)).toEqual(["syra"])
    })

    it("should manipulate data from savingData", () => {
        expect(savingData[0]["money"] = 15000 ).toEqual(15000)
    })

    it("should delete data from savingData", () => {
        savingData = savingData.filter(item => item.name !== "syra")

        expect(savingData.length).toEqual(0)
    })
})