// Calculating Armstrong Numbers
// Difficulty: Easy
// Topics: Basic Programming, Number Theory
// Description: Write a program to check if a number is an Armstrong number.
// Example:
// Input: number = 153
// Output: Armstrong Number
// Explanation: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.


/**
 * Checks if a number is an Armstrong number.
 * 
 * @param {number} num The number to be checked.
 * @returns {string|undefined} 'Armstrong Number' if the number is an Armstrong number, otherwise 'Not an Armstrong Number'.
 */

const isArmstrong = (num) => {
    if (typeof num !== 'number') {
        return undefined;
    }

    const numString = num.toString();
    const exponent = numString.length;
    let total = 0;

    for (let i = 0; i < numString.length; i++) {
        total += Number(numString[i]) ** exponent;
    }

    return total === num ? 'Armstrong Number' : 'Not an Armstrong Number';
}