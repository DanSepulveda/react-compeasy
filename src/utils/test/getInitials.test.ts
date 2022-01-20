import getInitials from '../getInitials'

describe("getItinials function", () => {
    test("'Jhon Doe' should return 'JD", () => {
        expect(getInitials('John Doe')).toBe('JD')
    })
    test("'jhon' should return 'JH", () => {
        expect(getInitials('jhon')).toBe('JH')
    })
    test("'jhon Doe doe' should return 'JD", () => {
        expect(getInitials('jhon Doe doe')).toBe('JD')
    })
    test("'j' should return 'J'", () => {
        expect(getInitials('j')).toBe('J')
    })
    test("'jD' should return 'JD'", () => {
        expect(getInitials('jD')).toBe('JD')
    })
})