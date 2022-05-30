/*
We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"
*/

// using toString
function numberToString(num){
    return num.toString();
}

//using backticks
function numberToString(num){
    return `${num}`;
}

//
numberToString = String;