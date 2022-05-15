// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//My Solution
function solution(str){
    const reverseStr = str.split('').reverse('').join('');
    return reverseStr;
  }
