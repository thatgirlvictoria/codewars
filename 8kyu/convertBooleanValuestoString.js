/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
function boolToWord( bool ){
    return (bool ? "Yes" : "No")
}

//really don't need ()
function boolToWord( bool ){
    return bool ? "Yes" : "No"
}

//using if...else conditional statment
function boolToWord( bool ){
    if (bool) {
        return 'Yes';
    }else{
        return 'No';
    }
}