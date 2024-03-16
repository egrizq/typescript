describe("initialization string type", () => {
    const location: string = "muhammad"
    
    const stringInit = (name: string) => {
        return name
    }

    it("should be return string", () => {
        expect(location).toEqual("muhammad")
        expect(location.length).toEqual(8)
        expect(stringInit("rizq")).toBe("rizq")
        expect(typeof(stringInit("ramadhan"))).toEqual("string")
    })
})

describe("initialization integer type", () => {
    const age: number = 12

    const addition = (left: number, right: number) => {
        return left + right
    }

    it("should be return number", () => {
        expect(age).toBe(12)
        expect(typeof(age)).toBe("number")
        expect(addition(10, 12)).toBe(22)
        expect(typeof(addition(2,2))).toBe("number")
    })

})

describe('School Attendance', () => {
    it('Should go to school if student status is true', () => {
        const statusStudent: boolean = true;
        let goToSchool: boolean;

        if (statusStudent) {
            goToSchool = true;
        } else {
            goToSchool = false;
        }

        expect(statusStudent).toEqual(true);
        expect(goToSchool).toEqual(true);
    });
});



