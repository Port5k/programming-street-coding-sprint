// Validating Leap Years
// Difficulty: Easy
// Topics: Basic Programming, Date Handling
// Description: Write a program to check if a given year is a leap year.
// Example:
// Input: year = 2020
// Output: Leap Year
// Explanation: 2020 is divisible by 4 but not by 100, or it is divisible by 400, so it is a leap year.

/**
 * Checks if a given year is a leap year.
 * 
 * @param {number} year - The year to be checked
 * @returns {string|undefined} - 'not Leap' if the number is not divisible by 4, otherwise 'is Leap'.
 */

const isLeapYear = (year) => {
    if (typeof year !== 'number') {
        return undefined;
    }

    if ((year % 100 === 0 && year % 400 !== 0) || year % 4 !== 0) {
        return 'not Leap';
    }

    return 'is Leap';
}