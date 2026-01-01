// Checking for Prime Numbers
// Difficulty: Easy
// Topics: Basic Programming, Number Theory
// Description: Write a program to determine if a number is prime.
// Example:
// Input: number = 7
// Output: Prime
// Explanation: 7 has no divisors other than 1 and itself, so it is a prime number.


/**
 * Checks if a number is a prime number
 * 
 * @param {number} num - The number to be checked.
 * @returns {string|undefined} - 'not Prime' if number is not a prime number, 'Prime' otherwise.
 */

const isPrime = (num) => {
    if (typeof num !== 'number') {
        return undefined;
    }

    if (num < 2) {
        return 'not Prime';
    }

    for (let divisor = 2; divisor <= num; divisor++) {
        if (num % divisor === 0 && divisor !== num) {
            return 'not Prime';
        }
    }

    return 'Prime';
}