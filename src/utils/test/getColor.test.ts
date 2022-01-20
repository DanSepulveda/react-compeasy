import getColor from '../getColor'

describe("getItinials function", () => {
    test("'900' should return '50'", () => {
        expect(getColor(900)).toBe(50)
    })
    test("'700' should return '50'", () => {
        expect(getColor(700)).toBe(50)
    })
    test("'500' should return '50'", () => {
        expect(getColor(500)).toBe(50)
    })
    test("'400' should return '50'", () => {
        expect(getColor(400)).toBe(50)
    })
    test("'200' should return '700'", () => {
        expect(getColor(200)).toBe(700)
    })
    test("'50' should return '700'", () => {
        expect(getColor(50)).toBe(700)
    })
})