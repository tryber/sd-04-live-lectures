const convertToRoman = require('./roman-numerals');
const convertToInteger = require('./integer-numerals');


describe('convertToRoman', () => {

    test.skip('raises an error if argument is not a number', () => {
        expect(() => { convertToRoman('invalid') })
            .toThrow(/Argument must be a number/);
    });

    test('raises an error if argument is less than or equal to zero', () => {
        expect(() => { convertToRoman(-15) })
            .toThrow(/Argument must be greater than zero/);

        expect(() => { convertToRoman(0) })
            .toThrow(/Argument must be greater than zero/);
    });

    test("it's defined", () => {
        expect(typeof convertToRoman).toBe("function")
    })

    test('converts numbers from 1 to 4', () => {
        expect(convertToRoman(1)).toBe('I');
        expect(convertToRoman(2)).toBe('II');
        expect(convertToRoman(3)).toBe('III');
        expect(convertToRoman(4)).toBe('IV');
    });

    test('converts numbers from 5 to 9', () => {
        expect(convertToRoman(5)).toBe('V');
        expect(convertToRoman(6)).toBe('VI');
        expect(convertToRoman(7)).toBe('VII');
        expect(convertToRoman(8)).toBe('VIII');
        expect(convertToRoman(9)).toBe('IX');
    });

    test('converts numbers from 10 to 15, 26 and 43', () => {
        expect(convertToRoman(10)).toBe('X');
        expect(convertToRoman(11)).toBe('XI');
        expect(convertToRoman(12)).toBe('XII');
        expect(convertToRoman(13)).toBe('XIII');
        expect(convertToRoman(14)).toBe('XIV');
        expect(convertToRoman(15)).toBe('XV');
        expect(convertToRoman(26)).toBe('XXVI');
        expect(convertToRoman(43)).toBe('XLIII');
    });

    test('converts numbers 50, 55 and 76', () => {
        expect(convertToRoman(50)).toBe('L');
        expect(convertToRoman(55)).toBe('LV');
        expect(convertToRoman(76)).toBe('LXXVI');
    });

    test('converts numbers 100, 200 and 227', () => {
        expect(convertToRoman(100)).toBe('C');
        expect(convertToRoman(200)).toBe('CC');
        expect(convertToRoman(227)).toBe('CCXXVII');
    });

    test('converts numbers 500, 576 and 981', () => {
        expect(convertToRoman(500)).toBe('D');
        expect(convertToRoman(576)).toBe('DLXXVI');
        expect(convertToRoman(981)).toBe('CMLXXXI');
    });

    test('converts numbers 1000, 2999 and 3000', () => {
        expect(convertToRoman(1000)).toBe('M');
        expect(convertToRoman(2999)).toBe('MMCMXCIX');
        expect(convertToRoman(3000)).toBe('MMM');
    });
})

describe('convertToInteger', () => {

    test("it's defined", () => {
        expect(typeof convertToInteger).toBe('function');
    });

    test('converts I, II, III and IV to integer', () => {
        expect(convertToInteger('I')).toBe(1);
        expect(convertToInteger('II')).toBe(2);
        expect(convertToInteger('III')).toBe(3);
        expect(convertToInteger('IV')).toBe(4);
    });

    test('converts V, VI, VII, VIII and VIII to integer', () => {
        expect(convertToInteger('V')).toBe(5);
        expect(convertToInteger('VI')).toBe(6);
        expect(convertToInteger('VII')).toBe(7);
        expect(convertToInteger('VIII')).toBe(8);
        expect(convertToInteger('IX')).toBe(9);
    });

    test('converts X, XI, XII, XIII, XIV, XV, XXVI and XLIII to integer', () => {
        expect(convertToInteger('X')).toBe(10);
        expect(convertToInteger('XI')).toBe(11);
        expect(convertToInteger('XII')).toBe(12);
        expect(convertToInteger('XIII')).toBe(13);
        expect(convertToInteger('XIV')).toBe(14);
        expect(convertToInteger('XV')).toBe(15);
        expect(convertToInteger('XXVI')).toBe(26);
        expect(convertToInteger('XLIII')).toBe(43);
    });

    test('converts L, LV and LXXVI to integer', () => {
        expect(convertToInteger('L')).toBe(50);
        expect(convertToInteger('LV')).toBe(55);
        expect(convertToInteger('LXXVI')).toBe(76);
    });

    test('converts C, CC, CCXXVII to integer', () => {
        expect(convertToInteger('C')).toBe(100);
        expect(convertToInteger('CC')).toBe(200);
        expect(convertToInteger('CCXXVII')).toBe(227);
    });

    test('converts D, DLXXVI and CMLXXXI to integer', () => {
        expect(convertToInteger('D')).toBe(500);
        expect(convertToInteger('DLXXVI')).toBe(576);
        expect(convertToInteger('CMLXXXI')).toBe(981);
    });

    test('converts M, MMCMXCIX and MMM to integer', () => {
        expect(convertToInteger('M')).toBe(1000);
        expect(convertToInteger('MMCMXCIX')).toBe(2999);
        expect(convertToInteger('MMM')).toBe(3000);
    });

})