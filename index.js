// Part 1: MATH PROBLEMS

// The initial numbers that must be verified.
const n1 = 8;
const n2 = 17;
const n3 = 22;
const n4 = 3;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`);

// Check if all numbers are divisible by 5
const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;

console.log (`The four numbers are valid according to the provided criteria: ${isValid} && ${isDivisibleBy5}.`);


// Check if the first number is larger than the last
const firstNumLargerThanLast = n1 > n4;

console.log (`The four numbers are valid according to the provided criteria: ${isValid} && ${isDivisibleBy5} && ${firstNumLargerThanLast}.`);

// Accomplish the following arithmetic chain:

// Subtract the first number from the second number.
    // n2 - n1
// Multiply the result by the third number.
    // (n2 - n1) * n3 
// Find the remainder of dividing the result by the fourth number.
    // ((n2 - n1) * n3) % n4

const arithmeticChain = (n2 - n1) * n3 % n4 ;

console.log (`The four numbers are valid according to the provided criteria: ${isValid} && ${isDivisibleBy5} && ${firstNumLargerThanLast} && ${arithmeticChain}.`);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons

const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

console.log (`The four numbers are valid according to the provided criteria: ${isValid} && ${isDivisibleBy5} && ${firstNumLargerThanLast} && ${arithmeticChain} && ${isUnder25}.`);


// Part 2: PRACTICAL MATH

// Traveling at 55 mph:

// How many gallons of fuel will you need for the entire trip?
const totalGallons55 = 1500 / 30;
// Will your budget be enough to cover the fuel expense?
const enoughBudget55 = totalGallons * 3 <= 175;
// How long will the trip take, in hours?
const totalHours55 = 1500 / 55;

// Traveling at 60 mph:

// How many gallons of fuel will you need for the entire trip?
const totalGallons60 = 1500 / 28;
// Will your budget be enough to cover the fuel expense?
const enoughBudget60 = totalGallons * 3 <= 175;
// How long will the trip take, in hours?
const totalHours60 = 1500 / 60;

// Traveling at 75 mph:

// How many gallons of fuel will you need for the entire trip?
const totalGallons75 = 1500 / 23;
// Will your budget be enough to cover the fuel expense?
const enoughBudget75 = totalGallons * 3 <= 175;
// How long will the trip take, in hours?
const totalHours75 = 1500 / 75;