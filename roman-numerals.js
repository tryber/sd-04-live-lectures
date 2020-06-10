const convertToRoman = integer => {
    if (typeof integer !== 'number') {
        throw new Error('Argument must be a number');
    }

    if (integer <= 0) {
        throw new Error('Argument must be greater than zero');
    }

    const digits = [...integer + ''];
    const romanDigits = [];

    if (digits.length === 1) {
        return convertDigit(Number(digits[0]), 'I', 'V', 'X');
    } else if (digits.length === 2) {
        romanDigits[0] = convertDigit(Number(digits[0]), 'X', 'L', 'C');
        romanDigits[1] = convertDigit(Number(digits[1]), 'I', 'V', 'X');

        return `${romanDigits[0]}${romanDigits[1]}`;
    } else if (digits.length === 3) {
        romanDigits[0] = convertDigit(Number(digits[0]), 'C', 'D', 'M');
        romanDigits[1] = convertDigit(Number(digits[1]), 'X', 'L', 'C');
        romanDigits[2] = convertDigit(Number(digits[2]), 'I', 'V', 'X');

        return `${romanDigits[0]}${romanDigits[1]}${romanDigits[2]}`;
    } else if (digits.length === 4) {
        romanDigits[0] = 'M'.repeat(Number(digits[0]));
        romanDigits[1] = convertDigit(Number(digits[1]), 'C', 'D', 'M');
        romanDigits[2] = convertDigit(Number(digits[2]), 'X', 'L', 'C');
        romanDigits[3] = convertDigit(Number(digits[3]), 'I', 'V', 'X');

        return `${romanDigits[0]}${romanDigits[1]}${romanDigits[2]}${romanDigits[3]}`;
    }
}

const convertDigit = (digit, smallerNumber, middleNumber, biggerNumber) => {
    if (digit == 4) return `${smallerNumber}${middleNumber}`;
    if (digit >= 5 && digit <= 8) return `${middleNumber}${smallerNumber.repeat(digit - 5)}`;
    if (digit == 9) return `${smallerNumber}${biggerNumber}`;
    return smallerNumber.repeat(digit);
}

module.exports = convertToRoman;
