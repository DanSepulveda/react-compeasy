import getColor from '../getColor'

describe("getItinials function", () => {
    test("'pink-900' should return 'pink-50'", () => {
        expect(getColor('pink-900')).toBe('pink-50')
    })
    test("'rose-700' should return 'rose-50'", () => {
        expect(getColor('rose-700')).toBe('rose-50')
    })
    test("'slate-500' should return 'slate-50'", () => {
        expect(getColor('slate-500')).toBe('slate-50')
    })
    test("'sky-400' should return 'sky-50'", () => {
        expect(getColor('sky-400')).toBe('sky-50')
    })
    test("'cyan-200' should return 'cyan-700'", () => {
        expect(getColor('cyan-200')).toBe('cyan-700')
    })
    test("'neutral-50' should return 'neutral-700'", () => {
        expect(getColor('neutral-50')).toBe('neutral-700')
    })
})