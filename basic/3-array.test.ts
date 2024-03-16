describe("array test", () => {
    const items: string[] = ["sayur", "bakso", "buah", "kelapa"]

    it("should be defined items information and type", () => {
        expect(items.length).toBe(4)
        expect(items).toContain("kelapa")
        expect(items[0]).toBe("sayur")
        expect(Array.isArray(items)).toBe(true)
        
        items[1] = "jagung"
        expect(items[1]).toBe("jagung")
        expect(items[1] == "bakso").toBe(false)

        items.map(item => {
            expect(typeof(item)).toBe("string")
        })
    })
})