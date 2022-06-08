/*
Sum - Square Even, Root Odd

Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

PREP

Parameters: 
    array of numbers 
    --> loop through the array

Return:
    SUM of the arry after the numbers are sqrd sqrt, rounded to 2 decimal places

Examples:
    [4,9]
    4 is an even # => 16
    9 is an odd # => 3
    SUM = 19.00

Pseudocode:
    1. Complete the function that takes an array of numbers ('nums), as the only arguement to th function.
    2. Take each number in the arry WRITE A LOOP
    3. and *square* it if it is even,
    4. or *square root* the number if it is odd.
    IF /ELSE
    6. Take this new arry and return the *sum* of it,
    ACCUMULATE sum += new number 
    reduce
    7. rounded to two decimal places. 
    MATH.round
    toFixed 
*/

const sumSquareEvenRootOdd = ns => {
    let sum = 0
    ns.forEach(ns => {
        if(ns % 2 ===0)
            sum += Math.pow(ns,2)
        else
            sum += Math.sqrt(ns)
    })
    return(Math.round(sum*100)/100)
};