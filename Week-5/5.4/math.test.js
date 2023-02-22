

const { mathOperations } = require('./math');
const { sum, diff, product } = mathOperations;

describe('Testing the sum method', () => {

    test('two plus two should equal 4', () => {
        expect(sum(2, 2)).toBe(4)
    })
    test('Test with negative numbers', () => {
        expect(sum(-4, 2)).toBe(-2)
    })
    test('Test typecasting when a string is provided', () => {
        expect(sum("4", 2)).toBe("42")
    })
})




describe('Testing the diff method', () => {

    test('two - two should equal 0', () => {
        expect(diff(2, 2)).toBe(0)
    })
    test('Test with negative numbers', () => {
        expect(diff(-4, 2)).toBe(-6)
    })
    test('Test typecasting to number when a string is provided', () => {
        expect(diff("4", 2)).toBe(2)
    })
})

describe('Testing the product method', () => {

    test('two * two should equal 4', () => {
        expect(product(2, 2)).toBe(4)
    })
    test('Test with negative numbers', () => {
        expect(product(-4, 2)).toBe(-8)
    })
    test('Test typecasting to number when a string is provided', () => {
        expect(product("4", 3)).toBe(12)
    })
    test('Test typecasting to number when a string is provided', () => {
        expect(product([1, 2, 3], [1, 2, 3])).toBe(NaN)
    })
})
