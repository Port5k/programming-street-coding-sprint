// Generating the Fibonacci Series
// Difficulty: Easy
// Topics: Basic Programming, Sequences
// Description: Write a program to generate the Fibonacci series up to a given number.
// Example:
// Input: limit = 10
// Output: [0, 1, 1, 2, 3, 5, 8]
// Explanation: The Fibonacci series up to 10 is generated as [0, 1, 1, 2, 3, 5, 8].


/**
 * Generate the Fibonacci series up to a given number.
 * 
 * @param {number} limit - The highest possible value in the sequence. 
 * @returns {Array} A sequence of numbers of which the highest is {limit}.
 */

const fibonacci = (limit) => {
    let array = [];

    for (let x = 0; array[array.length - 1] <= limit; x++) {
        if (array.length === 0 || array.length === 1) {
            array.push(x);
        } else {
            array.push(array[x - 1] + array[x - 2]);
        }
    }

    return array;
}


console.log(fibonacci(10))