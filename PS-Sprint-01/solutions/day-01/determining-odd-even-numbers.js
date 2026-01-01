// Determining Even/Odd Numbers
// Difficulty: Easy
// Topics: Basic Programming
// Description: Write a program to check whether a number is even or odd.
// Example:
// Input: number = 4
// Output: Even
// Explanation: Since 4 is divisible by 2, it is an even number.


/**
 * Checks if a number is even or odd
 * 
 * @param {number} num The number to check.
 * @returns {string|undefined} 'even' if the number is even, otherwise 'odd'
 * 
 */

const evenOrOdd = (num) => {
    if (typeof num !== 'number') {
        return undefined;
    }

    if (num % 2 !== 0) {
        return 'odd';
    }

    return 'even';
}