/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

//my solution using unary negation operators

function opposite(number) {
    return -number;
}

//other solutions

const opposite = number => -number;

function opposite(number) {
    return number * (-1);
}
